/**
 * Selected work. Card data lives here so ProjectGrid.astro stays presentation
 * only and adding project 02 is a single object append with `featured: false`.
 *
 * Every metric below is already substantiated inside the case study it links
 * to — do not add a number here that the case study cannot defend.
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
  image: string;
  imageAlt: string;
  /** Who it was built for. */
  forWhom: string;
  /** What was broken before. */
  problem: string;
  /** What was actually delivered. */
  outcome: string;
  /** Max 3 on the featured card. */
  metrics: ProjectMetric[];
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
    tint: 'a',
  },
];
