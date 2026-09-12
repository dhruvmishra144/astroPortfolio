/**
 * Single source of truth for /resume AND the homepage experience timeline.
 *
 * Role bullets are verbatim from the PDF resume — do not paraphrase them here,
 * the two must stay in sync. They are statements of fact about delivered work
 * and survive the repositioning unchanged.
 *
 * `summary` and `title` are NO LONGER in sync with the last uploaded PDF: they
 * were rewritten for the Design Engineer positioning while that PDF still says
 * Senior Product Designer. `resumePdf.href` is deliberately empty until a new
 * export exists — see the note there. This page is the source of truth; the
 * PDF has to catch up to it, not the other way round.
 *
 * Job titles under `roles` are as conferred by each employer and are not
 * repositioning surface. Only `independent-product-studio` — self-conferred —
 * was restated.
 *
 * `headline` and `chips` are the exception: they exist only for the homepage
 * timeline and are deliberately NOT in the PDF.
 *
 * Phone number and personal email are intentionally absent from this file, so
 * they cannot leak into rendered HTML. They remain in the downloadable PDF; the
 * page routes visitors to /contact instead.
 */

export interface ResumeLink {
  label: string;
  href: string;
  display?: string;
}

export interface ResumeProfile {
  name: string;
  title: string;
  location: string;
  links: ResumeLink[];
  summary: string;
}

export interface CompetencyGroup {
  title: string;
  items: string[];
}

/** One resume bullet. `tag` is the bracketed prefix from the PDF. */
export interface RoleBullet {
  tag: string;
  project?: string;
  text: string;
  link?: ResumeLink;
}

export interface Role {
  /** Slug, used for keys and anchors. */
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  engagement: string;
  current: boolean;
  /** Homepage timeline only — not in the PDF. */
  headline: string;
  /** Homepage timeline only, max 3. */
  chips: string[];
  /** Resume page only. */
  bullets: RoleBullet[];
}

export interface EducationEntry {
  school: string;
  credential: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  id?: string;
}

export interface Award {
  name: string;
  issuer: string;
  date: string;
}

/** `href: ''` means the PDF is not published yet — all UI must gate on it. */
export interface ResumePdf {
  href: string;
  filename: string;
  updated: string;
}

export const resumeProfile: ResumeProfile = {
  name: 'Dhruv Mishra',
  title: 'Design Engineer — design systems through production front-end',
  location: 'Faridabad, Delhi NCR, India',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruvmishra144/',
      display: 'linkedin.com/in/dhruvmishra144',
    },
    {
      label: 'Portfolio',
      href: 'https://dhruvmishra.in',
      display: 'dhruvmishra.in',
    },
  ],
  summary:
    'Design Engineer with 10+ years owning the interface layer end to end — the architecture and the design system through to the production front-end that ships. Works the full seam: information architecture, design tokens and component governance in Figma, then React, Next.js, TypeScript and Tailwind in the repository, which removes the design-to-engineering handoff where fidelity is normally lost. Experience spans enterprise iPaaS, agentic AI orchestration, and WealthTech, alongside a booking platform and property-management system designed, built and maintained solo in production.',
};

/*
 * Engineering leads. The items inside each group are unchanged — only the
 * order and the group names moved, because a Design Engineer who lists Figma
 * before React has buried the half of the job that is harder to prove.
 */
export const competencies: CompetencyGroup[] = [
  {
    title: 'Interface Engineering',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'iOS/Swift Architecture',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'RESTful APIs',
      'FARM Stack (FastAPI, React, MongoDB)',
      'Git/GitHub',
    ],
  },
  {
    title: 'Design Systems & Interface Architecture',
    items: [
      'Figma',
      'FigJam',
      'Design Tokens & Reusable Component Systems',
      'Information Architecture',
      'Interactive Prototyping',
      'User Research',
      'Journey Mapping',
      'Persona Modeling',
      'Usability Testing',
    ],
  },
  {
    title: 'AI Systems & Infrastructure',
    items: [
      'Agentic Workflow Orchestration',
      'Prompt Engineering',
      'LLM UI Integration',
      'Firebase',
      'Google Cloud Platform (GCP)',
      'Cloudflare',
      'Agile / Scrum Methodologies',
    ],
  },
];

export const roles: Role[] = [
  {
    id: 'independent-product-studio',
    company: 'Independent Product Studio',
    role: 'Principal Design Engineer',
    period: '03/2026 – Present',
    location: 'Faridabad, India',
    engagement: 'Primary Full-Time Practice',
    current: true,
    headline:
      'Designing and shipping products end to end — booking platforms, agentic-AI canvases, internal tools — as the only person between the problem and production.',
    chips: ['Next.js', 'Firebase', 'Solo delivery'],
    bullets: [
      {
        tag: 'Full-Stack Web Engineering',
        project: 'LaCasa Retreats',
        text: 'Designed end-to-end guest booking funnels and engineered the web application using Next.js/Tailwind CSS, integrating automated reservation tracking and calendar sync.',
        link: { label: 'View case study', href: '/projects/LaCasaRetreats' },
      },
      {
        tag: 'UX Strategy & Frontend Architecture',
        project: 'Draoenix AI',
        text: 'Architected prompt-to-workflow interaction canvases, real-time node execution states, and streaming response UI for multi-agent LLM systems with asynchronous task tracing.',
      },
      {
        tag: 'UX Architecture & Frontend',
        project: 'Closeroot',
        text: 'Spearheaded UI/UX architecture and web platform implementation for a global 1-on-1 tutoring ecosystem, streamlining educator onboarding and class discovery conversion.',
      },
      {
        tag: 'Full-Stack Web Engineering',
        project: 'TinyCRM',
        text: 'Designed and built a lightweight, developer-first customer pipeline tool using Next.js, Tailwind CSS, and Firebase with real-time state synchronization.',
      },
    ],
  },
  {
    id: 'dax-software-solutions',
    company: 'DAX Software Solutions',
    role: 'Senior UX/UI Design Advisor',
    period: '03/2026 – Present',
    location: 'Faridabad, India',
    engagement: 'Advisory & Retainer Capacity',
    current: true,
    headline:
      'Advisory: enterprise cloud-portal UX and a governed design system, on retainer.',
    chips: ['Figma governance', 'Design tokens', 'Usability audits'],
    bullets: [
      {
        tag: 'Pure UX/UI Architecture',
        text: 'Architect enterprise UX/UI workflows and high-fidelity interactive prototypes in Figma, aligning cloud portal user journeys with Microsoft ecosystem design standards.',
      },
      {
        tag: 'Design Systems Governance',
        text: 'Engineered scalable enterprise design system assets and component tokens, standardizing multi-tenant dashboard layouts and reducing interface iteration turnaround by 30%.',
      },
      {
        tag: 'UX Usability Audits',
        text: 'Conducted usability reviews and interaction audits across enterprise client portals, eliminating navigation bottlenecks and optimizing core task completion rates.',
      },
    ],
  },
  {
    id: 'axtechnosoft-aonflow',
    company: 'Axtechnosoft Pvt Ltd / Aonflow',
    role: 'Lead Product Designer & Frontend Specialist',
    period: '03/2021 – 02/2026',
    location: 'Gurugram, India',
    engagement: 'Full-Time Enterprise Role',
    current: false,
    headline:
      'Five years owning the product design of an enterprise iPaaS — no-code data mapping between systems that were never meant to talk.',
    chips: ['iPaaS', '50+ components', 'React'],
    bullets: [
      {
        tag: 'UX/UI Architecture',
        project: 'Aonflow (iPaaS Platform)',
        text: 'Spearheaded end-to-end product design and user flow architecture for an enterprise Integration Platform as a Service, designing intuitive no-code data mapping interfaces between disparate enterprise systems.',
      },
      {
        tag: 'Design Systems & Strategy',
        text: 'Architected and governed a centralized Figma enterprise design system with 50+ reusable components and design tokens, accelerating UI sprint velocity by 30% and reducing workflow friction by 25%.',
      },
      {
        tag: 'Full-Stack Frontend',
        text: 'Partnered directly with core engineering to validate technical feasibility, build reusable React UI components, and enforce pixel-perfect delivery across production releases.',
      },
    ],
  },
  {
    id: 'hexaview-technologies',
    company: 'Hexaview Technologies Inc.',
    role: 'Senior UI Developer & iOS Engineer',
    period: '03/2016 – 04/2021',
    location: 'Noida Area, India',
    engagement: 'Full-Time Engineering & Design',
    current: false,
    headline:
      'Modernised legacy WealthTech on the web and shipped a native iOS app in Swift — research through code.',
    chips: ['Swift / iOS', 'UX research', 'HTML5'],
    bullets: [
      {
        tag: 'UX Research & Modernization',
        project: 'Foliomax (WealthTech)',
        text: 'Directed user research, persona creation, and wireframing to transform legacy desktop fee-calculation software into a responsive web application (InVision/HTML5), achieving 35% faster workflow creation and 30% higher data accuracy.',
      },
      {
        tag: 'Native iOS Engineering',
        project: 'Fluent Fast',
        text: 'Designed UI/UX and engineered the native iOS application in Swift, featuring real-time audio/video communication, chat modules, and multi-language learning interfaces across 80+ languages.',
      },
      {
        tag: 'Frontend Architecture',
        text: 'Spearheaded the transition to modular, reusable UI component libraries across enterprise client projects, reducing regression bugs and cutting frontend implementation time by 25%.',
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: "Lingaya's Vidyapeeth",
    credential: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    period: '2011 – 2015',
  },
];

export const certifications: Certification[] = [
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic', date: '05/2026' },
  {
    name: 'Design Thinking - Design Research & Analysis',
    issuer: 'Alison',
    id: '1420-10296906',
  },
  { name: 'HTML5/CSS3 Certified', issuer: 'CutShort', id: '28702' },
];

export const awards: Award[] = [
  { name: 'On Time Engagement Award', issuer: 'Axtechnosoft Pvt Ltd', date: '11/2021' },
  { name: 'Pat on the Back Award', issuer: 'Hexaview Technologies', date: '08/2018' },
];

export const resumePdf: ResumePdf = {
  // GATED ON PURPOSE — do not restore this href until a new PDF is exported.
  //
  // The last uploaded file is titled "Senior Product Designer" and carries the
  // old summary. The profile above now reads Design Engineer, so relinking it
  // would hand a recruiter two different claims about the same person. Empty
  // href is the supported state: the download button stops rendering and
  // /resume falls back to "Print / save as PDF", which prints this copy.
  //
  // To restore, re-export the PDF from the current page copy, upload to
  // ImageKit, then set href back to the pattern below and bump `updated`:
  //   https://ik.imagekit.io/dhruvmishra144/<file>.pdf?updatedAt=<ts>&ik-attachment=true
  //
  // `ik-attachment=true` is load-bearing: the link is cross-origin, so the HTML
  // `download` attribute is ignored, and without that flag the PDF opens in the
  // browser's viewer instead of downloading. `updatedAt` is ImageKit's
  // cache-buster, which matters because the asset has a one-year max-age.
  href: '',
  filename: 'Dhruv-Mishra-Resume.pdf',
  updated: 'August 2026',
};

/** Compact projection for the homepage timeline — no bullets. */
export const timeline = roles.map(
  ({ id, company, role, period, engagement, current, headline, chips }) => ({
    id,
    company,
    role,
    period,
    engagement,
    current,
    headline,
    chips,
  })
);

export type TimelineRole = (typeof timeline)[number];
