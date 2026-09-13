import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  /** Staged intro, played immediately on load. */
  heroSelector?: string;
  /** Scroll-triggered, one pass each. */
  revealSelector?: string;
  /**
   * Scroll-triggered, but staggers the element's own children instead of
   * moving the container as one block. For lists and card grids, where the
   * whole point is that items arrive in sequence.
   */
  revealChildrenSelector?: string;
}

/*
 * Shared motion constants. One set of numbers so every reveal on the site has
 * the same rhythm — a stagger that differs per section reads as inconsistency,
 * not variety.
 */
const DISTANCE = 22; // px; far enough to register as movement, near enough to stay a fade
const DISTANCE_MOBILE = 14;
const DURATION = 0.6;
const DURATION_MOBILE = 0.45;
const STAGGER = 0.09;
const EASE = 'power2.out';
const START = 'top 85%';

/**
 * Staged hero intro plus per-section scroll reveal.
 *
 * No-ops entirely under prefers-reduced-motion. Nothing here sets a starting
 * opacity in CSS on purpose: if JS fails or motion is reduced, the content is
 * already visible rather than permanently hidden.
 */
export function initReveal(options: RevealOptions = {}): void {
  const { heroSelector, revealSelector, revealChildrenSelector } = options;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  const y = isMobile ? DISTANCE_MOBILE : DISTANCE;
  const duration = isMobile ? DURATION_MOBILE : DURATION;

  if (heroSelector) {
    gsap.from(heroSelector, {
      opacity: 0,
      y,
      duration,
      stagger: STAGGER,
      ease: EASE,
      delay: 0.15,
    });
  }

  if (revealSelector) {
    gsap.utils.toArray<HTMLElement>(revealSelector).forEach((el) => {
      // A container whose children stagger must not also fade as a block, or
      // its border and background arrive first around an empty box and the
      // whole thing reads as a loading glitch.
      if (revealChildrenSelector && el.querySelector(revealChildrenSelector)) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: EASE,
          scrollTrigger: { trigger: el, start: START, once: true },
        }
      );
    });
  }

  if (revealChildrenSelector) {
    gsap.utils.toArray<HTMLElement>(revealChildrenSelector).forEach((el) => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      gsap.fromTo(
        children,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger: STAGGER,
          ease: EASE,
          // Trigger on the container, animate the children — otherwise each
          // card waits for its own scroll position and the sequence is lost.
          scrollTrigger: { trigger: el, start: START, once: true },
        }
      );
    });
  }
}
