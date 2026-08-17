/**
 * TestimonialMarquee.tsx — dark infinite marquee (React + Framer Motion island).
 *
 * Self-contained styling (navy/cyan) so it needs no external stylesheet.
 * Manual useAnimationFrame loop over a MotionValue → seamless wrap + real
 * pause-on-hover; respects prefers-reduced-motion.  Render: client:visible.
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

export type Testimonial = { quote: string; name: string; role: string };

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote:
      'Dhruv operates two levels up from most designers — he framed the system architecture before anyone had drawn a screen, and it held all the way to production.',
    name: 'VP of Product',
    role: 'Enterprise SaaS',
  },
  {
    quote:
      'The rare designer who can sit with our engineers, reason about data models, and still ship an interface leadership trusts.',
    name: 'Director of Engineering',
    role: 'Data Platform',
  },
  {
    quote:
      'He turned an ambiguous, politically loaded redesign into a sequenced, measurable program. Adoption moved because the strategy was sound.',
    name: 'Head of Design',
    role: 'B2B Services',
  },
  {
    quote:
      'Clarity under complexity. Dhruv gave us a design system and a decision framework that outlived the project itself.',
    name: 'Founder',
    role: 'AI Data Tooling',
  },
  {
    quote: 'Strategic, technical, and calm. He owns the outcome end to end — exactly what you want architecting a platform.',
    name: 'Chief Product Officer',
    role: 'Fintech',
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure
      className="mr-6 flex w-[20rem] shrink-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-slate-900/50 sm:w-[24rem] sm:p-8"
      style={{ boxShadow: '0 24px 60px rgba(2,8,23,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
    >
      <blockquote className="text-[0.95rem] leading-relaxed text-slate-100 sm:text-base">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-white/5 pt-5">
        <span className="text-sm font-semibold tracking-wide text-white">{t.name}</span>
        <span className="text-[0.68rem] uppercase tracking-[0.14em] text-cyan-300/80">{t.role}</span>
      </figcaption>
    </figure>
  );
}

type Props = { items?: Testimonial[]; speed?: number; direction?: 'left' | 'right' };

export default function TestimonialMarquee({
  items = DEFAULT_ITEMS,
  speed = 38,
  direction = 'left',
}: Props) {
  const x = useMotionValue(0);
  const groupRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const dir = direction === 'left' ? -1 : 1;

  useEffect(() => {
    const measure = () => {
      if (groupRef.current) widthRef.current = groupRef.current.offsetWidth;
    };
    measure();
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener('change', onMq);
    window.addEventListener('resize', measure);
    if (dir > 0) x.set(-(widthRef.current || 0));
    return () => {
      mq.removeEventListener('change', onMq);
      window.removeEventListener('resize', measure);
    };
  }, [dir, x]);

  useAnimationFrame((_, delta) => {
    if (paused || reduced) return;
    const w = widthRef.current;
    if (!w) return;
    let next = x.get() + (dir * (speed * delta)) / 1000;
    if (next <= -w) next += w;
    else if (next >= 0) next -= w;
    x.set(next);
  });

  return (
    <div
      className="overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div className="flex w-max" style={{ x }}>
        <div ref={groupRef} className="flex w-max">
          {[...items, ...items].map((t, i) => (
            <Card key={`a-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max" aria-hidden={true}>
          {[...items, ...items].map((t, i) => (
            <Card key={`b-${i}`} t={t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
