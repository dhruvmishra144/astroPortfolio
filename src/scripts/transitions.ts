import gsap from 'gsap';

// "System Boot" preloader: a ~1.1s grid-activation sequence that plays once
// per browser session on #banner-1, then hands off to the page's own grid
// background (see body::before in global.css) so it reads as the site
// coming online rather than a generic loading screen. Repeat page loads in
// the same session (and reduced-motion users) skip straight past it.
const BOOT_KEY = 'dm-booted';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hasBooted = () => {
  try {
    return sessionStorage.getItem(BOOT_KEY) === '1';
  } catch {
    return false;
  }
};

const markBooted = () => {
  try {
    sessionStorage.setItem(BOOT_KEY, '1');
  } catch {
    // Storage unavailable (e.g. privacy mode) — just re-run next time.
  }
};

const hideBannerInstantly = (banner: HTMLElement) => {
  gsap.set(banner, { autoAlpha: 0, pointerEvents: 'none' });
};

const runBootSequence = (banner: HTMLElement) => {
  const bars = banner.querySelectorAll('.boot-bar');
  const sweep = banner.querySelector('.boot-sweep');
  const mark = banner.querySelector('.boot-mark');
  const dot = banner.querySelector('.boot-dot');
  const name = banner.querySelector('.boot-name');
  const role = banner.querySelector('.boot-role');
  const status = banner.querySelector('.boot-status');

  gsap.set(banner, { autoAlpha: 1, pointerEvents: 'auto' });

  gsap
    .timeline({ defaults: { ease: 'power2.out' }, onComplete: markBooted })
    .set([mark, dot, name, role, status], { opacity: 0, y: 6 }, 0)
    .set(bars, { scaleY: 0, opacity: 1 }, 0)
    .set(sweep, { scaleX: 0 }, 0)
    .to(mark, { opacity: 1, y: 0, duration: 0.18 }, 0)
    .to(dot, { opacity: 1, duration: 0.18 }, 0.05)
    .to(bars, { scaleY: 1, duration: 0.4, stagger: { each: 0.012, from: 'center' } }, 0.2)
    .to(name, { opacity: 1, y: 0, duration: 0.3 }, 0.22)
    .to(role, { opacity: 1, y: 0, duration: 0.3 }, 0.3)
    .to(sweep, { scaleX: 1, duration: 0.3, ease: 'power3.inOut' }, 0.6)
    .to(status, { opacity: 1, duration: 0.12 }, 0.68)
    .to(status, { opacity: 0, duration: 0.18 }, 0.9)
    .to([mark, dot, name, role], { opacity: 0, y: -10, duration: 0.25 }, 0.85)
    .to(bars, { opacity: 0, duration: 0.25 }, 0.88)
    .to(banner, { autoAlpha: 0, pointerEvents: 'none', duration: 0.25 }, 0.95);
};

export const animationPageIn = () => {
  const banner = document.getElementById('banner-1');
  if (!banner) return;

  if (prefersReducedMotion() || hasBooted()) {
    hideBannerInstantly(banner);
    return;
  }

  runBootSequence(banner);
};

export const animationPageOut = (href: string) => {
  const banner = document.getElementById('banner-1');
  if (!banner || prefersReducedMotion()) {
    window.location.href = href;
    return;
  }

  gsap
    .timeline()
    .set(banner, { autoAlpha: 0, pointerEvents: 'auto' })
    .to(banner, {
      autoAlpha: 1,
      duration: 0.25,
      onComplete: () => {
        window.location.href = href;
      },
    });
};

export const initPageTransitions = () => {
  animationPageIn();

  document.addEventListener('click', (event) => {
    const trigger = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-transition]');
    if (!trigger) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (trigger.target === '_blank') return;

    event.preventDefault();
    animationPageOut(trigger.href);
  });
};
