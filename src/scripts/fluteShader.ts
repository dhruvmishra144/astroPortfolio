import gsap from 'gsap';

/**
 * Hero shader: concentric light "rings" cut into diagonal flutes, with a small
 * chromatic offset per colour channel.
 *
 * The fragment maths is a port of an existing three.js ShaderAnimation
 * component. That component pulled in React and three.js to draw one
 * full-screen quad, which is ~150 KB for no gain on this Astro site, so this is
 * the same shader on raw WebGL2: no dependencies, ~3 KB.
 *
 * Differences from the original, all deliberate:
 *  - it draws light on black, which would be a black box on the light theme.
 *    Here the output is premultiplied-alpha: on dark the streaks glow in the
 *    original colours; on light they become denim ink on a transparent
 *    background (the theme is read from the live tokens, not hardcoded);
 *  - it fades in from the left, because the hero's text sits there and white
 *    streaks behind it would cost contrast;
 *  - it renders at reduced resolution, runs only while visible, ticks on
 *    GSAP's clock (one clock, no second rAF loop), and draws a single still
 *    frame under prefers-reduced-motion;
 *  - it runs two staggered waves, each crossing the screen in ~10s and
 *    restarting at the edge (a new ring every ~5s), instead of one ring on a
 *    13s cycle that spent most of that time off-screen.
 */

const VERT = /* glsl */ `#version 300 es
void main() {
  // Full-screen triangle from the vertex id: no buffers to create or leak.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `#version 300 es
precision highp float;

// Waves in flight at once, and seconds for one to cross the screen.
#define WAVES 2
#define TRAVEL 10.0

uniform vec2 uRes;
uniform float uTime;
uniform float uStrength;
uniform float uLight;
uniform float uPeriod;
uniform vec3 uInkA;
uniform vec3 uInkB;
out vec4 outColor;

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = (frag * 2.0 - uRes) / min(uRes.x, uRes.y);
  float lineWidth = 0.002;

  // Vertical flutes. The original stepped the ring radius by mod(uv.x + uv.y,
  // 0.2), which cut it into diagonal bands. Using x alone makes the bands
  // vertical; dividing by the period first makes their width a uniform, set
  // from JS in CSS pixels, so the flute density is the same on every screen.
  // Each flute still steps the ring by up to 0.2 (the original's amplitude),
  // which is what makes neighbouring flutes read as separate pieces of glass.
  float x = uv.x / uPeriod;
  float f = fract(x);
  float step_ = f * 0.2;

  // Waves. The original ran one ring out to radius 5 while the screen only
  // spans ~2, so most of every cycle was empty and the whole thing felt slow.
  // Now WAVES rings are in flight at once, phase-staggered. Each travels from
  // the origin to just past the farthest corner and restarts there, so a new
  // wave is always being born as an old one reaches the edge. Waves fade in at
  // birth and out at the end, so nothing pops at the restart.
  // ext is the half-extent of the visible area in uv units (the short side
  // spans [-1, 1], so the long side is wider).
  vec2 ext = uRes / min(uRes.x, uRes.y);
  vec2 origin = vec2(0.24 * ext.x, 0.05 * ext.y);
  float r = length(uv - origin);
  float maxR = length(abs(origin) + ext);

  vec3 c = vec3(0.0);
  for (int w = 0; w < WAVES; w++) {
    float tw = fract(uTime / TRAVEL + float(w) / float(WAVES));
    float life = smoothstep(0.0, 0.06, tw) * (1.0 - smoothstep(0.82, 1.0, tw));
    vec3 cw = vec3(0.0);
    for (int j = 0; j < 3; j++) {
      // i = 0 contributes nothing (its weight is i*i), so it is skipped.
      for (int i = 1; i < 5; i++) {
        float fi = float(i);
        // Small per-line / per-channel phase offsets give the original's
        // clustered lines and chromatic fringe, kept as one tight group.
        float ring = clamp(tw + 0.01 * (fi - float(j)), 0.0, 1.0) * maxR;
        float d = abs(ring - r + step_);
        // max(): the original divides by values that reach zero.
        cw[j] += lineWidth * fi * fi / max(d, 0.0005);
      }
    }
    c += cw * life;
  }

  // A crisp seam on each flute's leading edge, anti-aliased with the pixel
  // derivative so it stays ~1-2px wide at any resolution.
  float seam = smoothstep(0.0, fwidth(x) * 2.0, f);
  c *= 0.5 + 0.5 * seam;

  vec2 p = frag / uRes;
  float mask = smoothstep(0.12, 0.7, p.x) * uStrength;
  float k = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);

  if (uLight > 0.5) {
    vec3 ink = mix(uInkB, uInkA, clamp(c.r - c.b + 0.5, 0.0, 1.0));
    float a = k * mask * 0.75;
    outColor = vec4(ink * a, a);
  } else {
    vec3 col = clamp(c, 0.0, 1.0) * 0.7 * mask;
    outColor = vec4(col, k * mask);
  }
}`;

type Vec3 = [number, number, number];

/** Resolve a CSS token to 0..1 RGB by letting the browser compute it. */
function resolveToken(probe: HTMLElement, token: string): Vec3 {
  probe.style.color = `var(${token})`;
  const m = getComputedStyle(probe).color.match(/[\d.]+/g);
  if (!m || m.length < 3) return [0.5, 0.5, 0.5];
  return [Number(m[0]) / 255, Number(m[1]) / 255, Number(m[2]) / 255];
}

const mix3 = (a: Vec3, b: Vec3, t: number): Vec3 => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

const luminance = (c: Vec3) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn('[flute-shader] shader failed:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * Starts the effect. Returns a teardown function, or null if WebGL2 is not
 * available (the caller keeps its CSS fallback).
 */
export function initFluteShader(canvas: HTMLCanvasElement, host: HTMLElement): (() => void) | null {
  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
  });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  const program = gl.createProgram();
  if (!vs || !fs || !program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('[flute-shader] link failed:', gl.getProgramInfoLog(program));
    return null;
  }
  gl.useProgram(program);
  gl.bindVertexArray(gl.createVertexArray());

  const u = {
    res: gl.getUniformLocation(program, 'uRes'),
    time: gl.getUniformLocation(program, 'uTime'),
    strength: gl.getUniformLocation(program, 'uStrength'),
    light: gl.getUniformLocation(program, 'uLight'),
    period: gl.getUniformLocation(program, 'uPeriod'),
    inkA: gl.getUniformLocation(program, 'uInkA'),
    inkB: gl.getUniformLocation(program, 'uInkB'),
  };

  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrowQuery = window.matchMedia('(max-width: 767px)');

  const probe = document.createElement('span');
  probe.style.display = 'none';
  document.body.appendChild(probe);

  const applyTokens = () => {
    const bg = resolveToken(probe, '--background');
    const accent = resolveToken(probe, '--accent');
    const isLight = luminance(bg) > 0.5;
    gl.uniform1f(u.light, isLight ? 1 : 0);
    gl.uniform3fv(u.inkA, accent);
    gl.uniform3fv(u.inkB, mix3(accent, bg, 0.5));
  };

  const applyLayout = () => {
    const rect = host.getBoundingClientRect();
    // Sharp edges need near-native resolution: at ~half res the browser's
    // bilinear upscale smeared every flute seam. 1 CSS px per canvas px on
    // desktop (not device px: the shader is cheap, but 4x DPR is not free);
    // lower on phones, where the layer is also dimmer.
    const scale = narrowQuery.matches ? 0.65 : 1;
    const w = Math.max(2, Math.round(rect.width * scale));
    const h = Math.max(2, Math.round(rect.height * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.uniform2f(u.res, w, h);
    // Flute width in CSS px -> shader units (uv spans 2 over the short side).
    const fluteCss = narrowQuery.matches ? 18 : 26;
    gl.uniform1f(u.period, (2 * fluteCss) / Math.min(rect.width, rect.height));
    // Dimmer when stacked: the headline then sits across the whole width.
    gl.uniform1f(u.strength, narrowQuery.matches ? 0.5 : 0.85);
  };

  const draw = (time: number) => {
    gl.uniform1f(u.time, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  // Shader time is real seconds (one wave crosses the screen in TRAVEL, see the
  // shader). 3s puts the two waves at ~30% and ~80% of their travel, so the
  // still frame shows rings spread across the screen.
  const STILL_TIME = 3;
  const SPEED = 1;
  let running = false;
  let visible = false;

  const tick = () => draw(STILL_TIME + gsap.ticker.time * SPEED);

  const sync = () => {
    const shouldRun = visible && !reducedQuery.matches && !document.hidden;
    if (shouldRun && !running) {
      gsap.ticker.add(tick);
      running = true;
    } else if (!shouldRun && running) {
      gsap.ticker.remove(tick);
      running = false;
    }
    if (!running) draw(STILL_TIME);
    host.dataset.motion = running ? 'running' : reducedQuery.matches ? 'static' : 'paused';
  };

  applyTokens();
  applyLayout();
  draw(STILL_TIME);
  host.classList.add('is-ready');

  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      sync();
    },
    { threshold: 0 }
  );
  io.observe(host);

  const ro = new ResizeObserver(() => {
    applyLayout();
    if (!running) draw(STILL_TIME);
  });
  ro.observe(host);

  const onTheme = () => {
    applyTokens();
    if (!running) draw(STILL_TIME);
  };
  window.addEventListener('themechange', onTheme);
  document.addEventListener('visibilitychange', sync);
  reducedQuery.addEventListener('change', sync);

  const onLost = (e: Event) => {
    e.preventDefault();
    host.classList.remove('is-ready');
    teardown();
  };
  canvas.addEventListener('webglcontextlost', onLost);

  function teardown() {
    gsap.ticker.remove(tick);
    running = false;
    io.disconnect();
    ro.disconnect();
    window.removeEventListener('themechange', onTheme);
    document.removeEventListener('visibilitychange', sync);
    reducedQuery.removeEventListener('change', sync);
    canvas.removeEventListener('webglcontextlost', onLost);
    probe.remove();
  }

  return teardown;
}
