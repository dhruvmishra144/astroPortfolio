/**
 * Generates public/og.png — the 1200x630 social share card.
 *
 * Run with: node scripts/build-og.mjs
 *
 * Why a script and not a checked-in design file: the card repeats the hero's
 * claim and the site's accent, and both have changed twice already. Generating
 * it from the same strings means the card cannot end up advertising a tagline
 * the site no longer uses.
 *
 * Fonts are NOT the site's webfonts. librsvg/resvg render with system fonts, and
 * Paytone One / Poppins are project woff2 files, not installed system-wide — so
 * the card uses a neutral system stack on purpose rather than silently falling
 * back to something ugly. The card is typographically close, not identical.
 */
import sharp from 'sharp';

// Token values copied from src/styles/global.css (light theme).
const INK = '#0b1a2b';
const ACCENT = '#1560bd';
const MUTED = '#3c536e';
const DOT = 'rgba(11, 26, 43, 0.10)';

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="48%" stop-color="#fbfdfe"/>
      <stop offset="100%" stop-color="#f1f5fb"/>
    </linearGradient>
    <radialGradient id="glowA" cx="8%" cy="4%" r="55%">
      <stop offset="0%" stop-color="rgba(21,96,189,0.16)"/>
      <stop offset="100%" stop-color="rgba(21,96,189,0)"/>
    </radialGradient>
    <radialGradient id="glowB" cx="94%" cy="96%" r="55%">
      <stop offset="0%" stop-color="rgba(234,200,140,0.16)"/>
      <stop offset="100%" stop-color="rgba(234,200,140,0)"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="${DOT}"/>
    </pattern>
    <linearGradient id="dotFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="55%" stop-color="#fff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="1"/>
    </linearGradient>
    <mask id="dotMask">
      <rect width="1200" height="630" fill="url(#dotFade)"/>
    </mask>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glowA)"/>
  <rect width="1200" height="630" fill="url(#glowB)"/>
  <rect width="1200" height="630" fill="url(#dots)" mask="url(#dotMask)"/>

  <!-- accent rule -->
  <rect x="80" y="132" width="64" height="5" rx="2.5" fill="${ACCENT}"/>

  <text x="80" y="112" font-family="${FONT}" font-size="21" font-weight="700"
        letter-spacing="5.4" fill="${ACCENT}">DHRUVMISHRA.IN</text>

  <text x="80" y="268" font-family="${FONT}" font-size="76" font-weight="700"
        letter-spacing="-2.2" fill="${INK}">I design complex software,</text>
  <text x="80" y="358" font-family="${FONT}" font-size="76" font-weight="700"
        letter-spacing="-2.2" fill="${ACCENT}">then I build it.</text>

  <text x="80" y="444" font-family="${FONT}" font-size="30" font-weight="400"
        fill="${MUTED}">Interface architecture, design systems, and the production</text>
  <text x="80" y="486" font-family="${FONT}" font-size="30" font-weight="400"
        fill="${MUTED}">front-end that ships them.</text>

  <rect x="80" y="536" width="420" height="1" fill="rgba(11,26,43,0.14)"/>
  <text x="80" y="578" font-family="${FONT}" font-size="26" font-weight="700"
        fill="${INK}">Dhruv Mishra</text>
  <text x="255" y="578" font-family="${FONT}" font-size="26" font-weight="400"
        fill="${MUTED}">· Design Engineer</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(new URL('../public/og.png', import.meta.url).pathname);

const meta = await sharp(new URL('../public/og.png', import.meta.url).pathname).metadata();
console.log(`og.png written: ${meta.width}x${meta.height}, ${meta.format}`);
