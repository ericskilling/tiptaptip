import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'static',
  integrations: [
    tailwind({
      // Don't apply Tailwind's base reset so it doesn't conflict with terminal.css/base.css
      applyBaseStyles: false,
    }),
  ],
});
