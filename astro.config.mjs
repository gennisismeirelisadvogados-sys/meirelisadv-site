import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.meirelisadv.com.br',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
});
