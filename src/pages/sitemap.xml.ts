import type { APIRoute } from 'astro';

/**
 * Sitemap, generated from the actual page files.
 *
 * Written by hand rather than pulling in @astrojs/sitemap: this is ~30 lines,
 * it has no install step, and enumerating `src/pages` means a new route appears
 * here the moment the file exists. A hardcoded URL list would go stale silently,
 * which is the failure mode that makes sitemaps worse than useless.
 *
 * Routes are derived, not typed out — the only manual decisions are which files
 * are not real pages (404) and the relative priorities below.
 */

const pageFiles = import.meta.glob('./**/*.astro');

/** Not a crawlable destination. */
const EXCLUDE = new Set(['/404']);

/**
 * Relative weight only — priority is a hint about importance *within this site*,
 * not a ranking lever. The landing page and the one finished case study are what
 * this site exists to get people to.
 */
const PRIORITY: Record<string, string> = {
  '/': '1.0',
  '/projects/LaCasaRetreats': '0.9',
  '/resume': '0.8',
  '/contact': '0.7',
  '/about-me': '0.6',
  '/design-systems/lacasa-retreats': '0.6',
};

function toRoute(filePath: string): string {
  const route = filePath
    .replace(/^\.\//, '/')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '');
  return route === '' ? '/' : route;
}

export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const lastmod = new Date().toISOString().split('T')[0];

  const routes = Object.keys(pageFiles)
    .map(toRoute)
    .filter((r) => !EXCLUDE.has(r))
    .sort((a, b) => (PRIORITY[b] ?? '0.5').localeCompare(PRIORITY[a] ?? '0.5') || a.localeCompare(b));

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${origin}${route === '/' ? '/' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${PRIORITY[route] ?? '0.5'}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
