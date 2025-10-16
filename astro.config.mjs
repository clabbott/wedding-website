import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://clabbott.github.io',
  base: '/wedding-website',
  integrations: [tailwind()],
  output: 'static',
});
