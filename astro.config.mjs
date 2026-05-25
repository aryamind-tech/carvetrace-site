import { defineConfig } from 'astro/config';

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
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
