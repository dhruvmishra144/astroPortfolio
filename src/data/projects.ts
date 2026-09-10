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
    href: '/projects/LaCasaRetreats',
    index: '01',
    title: 'LaCasa Retreats',
    category: 'Booking Platform & PMS',
    categorySub: 'Hospitality',
    status: 'Live product',
    image: '/lacasa-home.webp',
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
