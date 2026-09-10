import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Shared behavior for long-form case study pages: the scannable/deep-dive
// reading toggle (ReadingToggle.astro), the sticky scrollspy TOC
// (CaseTocNav.astro), and scroll-in reveal animation for sections/cards.
// `storageKey` must be unique per page so two case studies don't clobber
// each other's saved reading-depth preference.
export function initCaseStudyChrome({ storageKey }: { storageKey: string }) {
  gsap.registerPlugin(ScrollTrigger);

  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-view-btn]');
  function setView(view: string) {
    document.body.dataset.view = view;
    buttons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.viewBtn === view));
    try {
      localStorage.setItem(storageKey, view);
    } catch {}
    ScrollTrigger.refresh();
  }
  buttons.forEach((btn) => btn.addEventListener('click', () => setView(btn.dataset.viewBtn!)));
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(storageKey);
  } catch {}
  setView(saved === 'scannable' ? 'scannable' : 'deep');

  const tocPill = document.querySelector<HTMLElement>('.case-toc-pill');
  const tocWrap = document.querySelector<HTMLElement>('.case-toc-sticky');
  if (tocPill && tocWrap) {
    const updateTocFade = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tocPill;
      const maxScroll = scrollWidth - clientWidth;
      tocWrap.classList.toggle('can-scroll-left', scrollLeft > 4);
      tocWrap.classList.toggle('can-scroll-right', scrollLeft < maxScroll - 4);
    };
    updateTocFade();
    tocPill.addEventListener('scroll', updateTocFade, { passive: true });
    window.addEventListener('resize', updateTocFade);

    document.querySelectorAll<HTMLButtonElement>('[data-toc-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dir = Number(btn.dataset.tocScroll);
        tocPill.scrollBy({ left: dir * 160, behavior: 'smooth' });
      });
    });

    const tocLinks = Array.from(tocPill.querySelectorAll<HTMLAnchorElement>('.case-toc-item[href^="#"]'));
    const sectionMap = new Map<HTMLElement, HTMLAnchorElement>();
    tocLinks.forEach((link) => {
      const id = link.getAttribute('href')?.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (section) sectionMap.set(section, link);
    });

    const setActiveLink = (link: HTMLAnchorElement) => {
      tocLinks.forEach((l) => l.classList.toggle('is-active', l === link));
      link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = sectionMap.get(entry.target as HTMLElement);
          if (link) setActiveLink(link);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sectionMap.forEach((_, section) => spy.observe(section));
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  if (!reduceMotion) {
    const sectionY = isMobile ? 12 : 48;
    const sectionDuration = isMobile ? 0.35 : 0.9;
    const cardY = isMobile ? 8 : 28;
    const cardDuration = isMobile ? 0.3 : 0.7;

    const revealTargets = document.querySelectorAll<HTMLElement>('main#content section, main#content > div.py-4');
    revealTargets.forEach((el, i) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: sectionY },
        {
          autoAlpha: 1,
          y: 0,
          duration: sectionDuration,
          ease: 'power3.out',
          delay: isMobile ? 0 : (i % 3) * 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    const cardGroups = document.querySelectorAll<HTMLElement>('main#content .grid');
    cardGroups.forEach((grid) => {
      const cards = Array.from(grid.children) as HTMLElement[];
      if (cards.length < 2) return;
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: cardY },
        {
          autoAlpha: 1,
          y: 0,
          duration: cardDuration,
          ease: 'power3.out',
          stagger: isMobile ? 0.04 : 0.08,
          scrollTrigger: {
            trigger: grid,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });
  }
}
