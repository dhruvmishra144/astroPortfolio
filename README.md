# UX Portfolio — Dhruv Mishra

Personal portfolio built with [Astro](https://astro.build) + [Svelte](https://svelte.dev),
styled with Tailwind CSS v4 and animated with GSAP. The site builds to fully static
HTML in `dist/`, ready for Cloudflare.

#LaCasa Retreats - first case study completed

## Stack

- **Astro 5** — static pages, layouts, and routing (`src/pages`)
- **Svelte 5** — interactive islands: custom cursor, testimonial carousel, ECharts chart
- **Tailwind CSS 4** — via `@tailwindcss/vite`; design tokens live in `src/styles/global.css`
- **GSAP** — scroll reveals and the spinner page transition (`src/scripts/transitions.ts`)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## Deploy on Cloudflare

**Option A — Cloudflare Workers (CLI):**

```bash
npx wrangler login   # once
npm run deploy       # builds and deploys using wrangler.jsonc
```

**Option B — Cloudflare Pages (git integration):**

Connect this repo in the Cloudflare dashboard and use:

- Build command: `npm run build`
- Build output directory: `dist`

## Firebase (optional)

`src/lib/firebase.ts` is kept from the previous version. To use it, add
`PUBLIC_FIREBASE_*` variables to a `.env` file (see the variable names in that file)
and import it from client-side code only. Never commit `.env`.

## Project structure

```
src/
  components/       shared UI (Header, Nav, Footer, Icon, Svelte islands)
    goflow/         GoFlow case-study building blocks
    aonflow/        Aonflow case-study building blocks
  layouts/Base.astro  HTML shell, metadata, page-transition banner
  pages/            one .astro file per route
  scripts/          GSAP page-transition logic
  styles/           global.css + self-hosted Poppins/Paytone One fonts
public/             images, logos, mockups
```
