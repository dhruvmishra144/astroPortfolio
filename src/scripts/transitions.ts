import gsap from 'gsap';

// Spinner banner page transition, ported from the Next.js template.tsx +
// utils/animation.tsx. On load the banner slides away; links marked with
// [data-transition] slide it back in before navigating.

export const animationPageIn = () => {
  const banner = document.getElementById('banner-1');
  if (!banner) return;

  gsap
    .timeline()
    .set(banner, { yPercent: 0, duration: 1, borderRadius: 0, opacity: 1 })
    .to(banner, { yPercent: 150, duration: 1, borderRadius: 100, opacity: 0 });
};

export const animationPageOut = (href: string) => {
  const banner = document.getElementById('banner-1');
  if (!banner) {
    window.location.href = href;
    return;
  }

  gsap
    .timeline()
    .set(banner, { yPercent: -100, borderRadius: 100, duration: 0.5, opacity: 0 })
    .to(banner, {
      yPercent: 0,
      borderRadius: 0,
      duration: 0.5,
      opacity: 1,
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
