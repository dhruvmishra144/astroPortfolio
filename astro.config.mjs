// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Required for absolute canonical/OG URLs in SeoHead.astro. Canonical always
  // points at the apex; www.dhruvmishra.in keeps serving the same content.
  site: 'https://dhruvmishra.in',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
