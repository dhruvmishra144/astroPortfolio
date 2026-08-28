import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  /** Staged intro, played immediately on load. */
  heroSelector?: string;
  /** Scroll-triggered, one pass each. */
  revealSelector?: string;
}

/**
 * Staged hero intro plus per-section scroll reveal.
 *
 * No-ops entirely under prefers-reduced-motion. Nothing here sets a starting
 * opacity in CSS on purpose: if JS fails or motion is reduced, the content is
 * already visible rather than permanently hidden.
 */
export function initReveal(options: RevealOptions = {}): void {
  const { heroSelector, revealSelector } = options;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  if (heroSelector) {
    gsap.from(heroSelector, {
      opacity: 0,
      y: 22,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.15,
    });
  }

  if (revealSelector) {
    gsap.utils.toArray<HTMLElement>(revealSelector).forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: isMobile ? 12 : 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isMobile ? 0.35 : 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      );
    });
  }
}
