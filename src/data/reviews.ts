/**
 * Social proof. Every quote here is attributable to a real, named person.
 *
 * Names are rendered exactly as published (including `divya kukreja` lowercase)
 * — title-casing an attributed name is a silent edit to someone else's words.
 *
 * No review count is asserted anywhere. The rating links out so a visitor can
 * verify it in one click, which is the whole point of showing it.
 */

export interface Review {
  quote: string;
  name: string;
  source: 'Google' | 'Client' | 'Unattributed';
  /** e.g. "3 reviews · 5 years ago" or "Stakeholder, LaCasa Retreats" */
  context?: string;
  /** Google's own category tags. */
  tags?: string[];
}

export const googleRating = {
  value: '4.8',
  label: 'on Google',
  // Same canonical outbound link already used in socialLinks.ts.
  href: 'https://g.co/kgs/E29cFzu',
};

/**
 * The strongest quote available: named, and about a shipped system rather than
 * service quality. Already used inside the LaCasa case study.
 */
export const clientQuote: Review = {
  quote:
    'The website made our lives easy. We can scan the entire business in a few minutes and know almost everything about sales and profits — great work by Dhruv.',
  name: 'Siddhant Sharma',
  source: 'Client',
  context: 'Stakeholder, LaCasa Retreats',
};

export const googleReviews: Review[] = [
  {
    quote:
      'Had a great experience working with Dhruv Mishra. Work satisfaction for client seems to be priority for him. Found his designing skills to be updated with current market trends. He provided creative design after brainstorming the right solution for my UI/UX work given to him. Highly recommend him to someone looking for quality work.',
    name: 'Kav Singh',
    source: 'Google',
    context: '3 reviews · 5 years ago',
    tags: ['Professionalism'],
  },
  {
    quote:
      'A perfect place for your website development. Have the ability to create, design, Hosting, Managing sites, logo making and optimize and they also guide you throughout the process. Highly recommended',
    name: 'Bhawana Rana',
    source: 'Google',
    context: '3 reviews · 5 years ago',
    tags: ['Quality', 'Professionalism', 'Value'],
  },
  {
    quote:
      'I really liked the services provided to me. It was value for money and the services were timely delivered. I would recommend you to the others as well. Looking forward to work with you again. Good job done!',
    name: 'divya kukreja',
    source: 'Google',
    context: '3 reviews · 5 years ago',
    tags: ['Value'],
  },
];

/** Not currently rendered — kept for a fourth slot if one is ever wanted. */
export const extraReviews: Review[] = [
  {
    quote:
      'Dhruv is very professional and liked working with him. I will surely like to collaborate with him in future.',
    name: 'Vandana Singh',
    source: 'Google',
    context: '10 reviews · 3 years ago',
  },
];

/**
 * Deliberately empty.
 *
 * The five quotes previously in TestimonialMarquee.tsx were attributed only to
 * job titles ("VP of Product, Enterprise SaaS"). Labelling those "name withheld
 * — under NDA" only makes sense if a real client actually said something close
 * to them; otherwise the label is itself a false claim about a person who does
 * not exist. Populate this array only with quotes confirmed as real client
 * words. `Testimonials.astro` renders nothing for an empty array.
 */
export const withheldQuotes: Review[] = [];
