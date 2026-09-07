/**
 * Selected work. Card data lives here so ProjectGrid.astro stays presentation
 * only and adding a project is a single object append.
 *
 * Every metric below is already substantiated inside the case study it links
 * to — do not add a number here that the case study cannot defend. Where the
 * numbers come from prototype evaluation rather than production, `metricsNote`
 * says so on the card; the honesty is the point, not a caveat to bury.
 */

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectCard {
  href: string;
  /** Display index, e.g. "01". */
  index: string;
  title: string;
  category: string;
  categorySub: string;
  /** Shown in the chip. Keeps shipped work and concept work clearly separated. */
  status: string;
  /** Optional: cards render text-forward when there is no honest image to use. */
  image?: string;
  imageAlt?: string;
  /** Who it was built for. */
  forWhom: string;
  /** What was broken before. */
  problem: string;
  /** What was actually delivered. */
  outcome: string;
  /** Max 3 on the featured card. */
  metrics: ProjectMetric[];
  /** Provenance for the metrics above, when they are not production numbers. */
  metricsNote?: string;
  tags: string[];
  featured: boolean;
  /** Tailwind lg: col/row span classes, for non-featured bento tiles. */
  span?: string;
  /** Pastel tint slot for light mode. */
  tint?: 'a' | 'b' | 'c' | 'd';
}

export const projects: ProjectCard[] = [
  {
    href: '/projects/GoFlow',
    index: '01',
    title: 'GoFlow',
    category: 'AI Workflow Automation',
    categorySub: 'Enterprise iPaaS',
    status: 'Independent concept',
    // No image: the only asset on hand is a 600x400 stock tablet mockup branded
    // for a different product. A real GoFlow screen belongs here when one exists.
    forWhom: 'For non-technical operators at 20–250 person companies running business-critical integrations',
    problem:
      'SMBs don’t abandon integration tools because setup is hard. They freeze at Run — a wrong mapping silently overwrites live customer data, and there is no way back.',
    outcome:
      'A self-initiated redesign of an AI-powered iPaaS around four ideas: preview before you commit, see the blast radius, recover without support, and leave an audit trail.',
    metrics: [
      { value: '88%', label: 'first-run completion (from ~60%)' },
      { value: '~50%', label: 'fewer first-run config errors' },
      { value: '~40%', label: 'faster median setup' },
    ],
    metricsNote:
      'Prototype evaluation with evidence-grounded personas — not production metrics. The case study labels every figure by how it was obtained.',
    tags: ['Product strategy', 'Trust & safety model', 'Design system', 'Solo'],
    featured: true,
    tint: 'a',
  },
  {
    href: '/projects/LaCasaRetreats',
    index: '02',
    title: 'LaCasa Retreats',
    category: 'Booking Platform & PMS',
    categorySub: 'Hospitality',
    status: 'Live product',
    image: '/lacasa-home.png',
    imageAlt:
      'LaCasa Retreats booking site home page, showing property search and availability',
    forWhom: 'For a 17-property short-stay rental operator in Noida',
    problem:
      'Bookings arrived through five disconnected channels — Airbnb, Booking.com, Agoda, WhatsApp, and walk-ins — so the same unit could be sold twice, and every night’s price was set by hand.',
    outcome:
      'A guest-facing booking site and the property-management system behind it, designed and built solo end to end, in production and maintained since.',
    metrics: [
      { value: '17', label: 'properties live' },
      { value: '5 → 1', label: 'channels into one calendar' },
      { value: '< 1 min', label: 'seasonal repricing (was an afternoon)' },
    ],
    tags: ['React 19', 'Firebase', 'Razorpay', 'Solo build, end to end'],
    featured: true,
    tint: 'c',
  },
];
