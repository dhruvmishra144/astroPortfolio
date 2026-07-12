<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let cursor: HTMLDivElement | null = $state(null);
  let enabled = $state(false);

  onMount(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      enabled = pointerQuery.matches && !motionQuery.matches;
    };

    update();
    pointerQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);

    return () => {
      pointerQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  });

  $effect(() => {
    if (!enabled || !cursor) return;

    const el = cursor;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let rafId = 0;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.5, delay: 0.5 });
    document.body.classList.add('custom-cursor-active');

    const animateCursor = () => {
      gsap.to(el, { duration: 0.2, x: mouseX, y: mouseY, ease: 'power2.out' });
      rafId = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        if (!isHovering) {
          isHovering = true;
          gsap.to(el, { duration: 0.3, scale: 2.5, ease: 'power2.out' });
        }
      } else if (isHovering) {
        isHovering = false;
        gsap.to(el, { duration: 0.3, scale: 1, ease: 'power2.out' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateCursor();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  });
</script>

{#if enabled}
  <div
    bind:this={cursor}
    class="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
  ></div>
{/if}
