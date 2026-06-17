import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static-site config for carvetrace.com.
// EN at /, FR at /fr/. Localized slugs are file-based (not auto-translated).
export default defineConfig({
  site: 'https://carvetrace.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
