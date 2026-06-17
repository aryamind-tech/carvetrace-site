// Map of page-id → localized slug per locale.
// The page-id is the canonical key; the .astro file lives at the EN slug
// (or fr/<fr-slug> for FR pages). The Header uses this map to render the
// EN↔FR language switch.

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type PageId =
  | 'home'
  | 'how-it-works'
  | 'demo'
  | 'pricing'
  | 'contact'
  // Legal / trust surface — EN-only for now. Procurement-grade English is the
  // accepted standard for B2B legal in EU deals ; FR translations layer in later.
  | 'privacy'
  | 'terms'
  | 'dpa'
  | 'security';

export const routes: Record<PageId, Record<Locale, string>> = {
  home:           { en: '/',                fr: '/fr/' },
  'how-it-works': { en: '/how-it-works/',   fr: '/fr/comment-ca-marche/' },
  demo:           { en: '/demo/',           fr: '/fr/demo/' },
  pricing:        { en: '/pricing/',        fr: '/fr/tarifs/' },
  contact:        { en: '/contact/',        fr: '/fr/contact/' },
  privacy:        { en: '/legal/privacy/',  fr: '/legal/privacy/' },
  terms:          { en: '/legal/terms/',    fr: '/legal/terms/' },
  dpa:            { en: '/legal/dpa/',      fr: '/legal/dpa/' },
  security:       { en: '/security/',       fr: '/security/' },
};

export function altLocaleHref(currentPageId: PageId, currentLocale: Locale): string {
  const other: Locale = currentLocale === 'en' ? 'fr' : 'en';
  return routes[currentPageId][other];
}

/** Page IDs that have an EN-only canonical surface and should hide the lang switch. */
export const enOnlyPages: ReadonlySet<PageId> = new Set([
  'privacy', 'terms', 'dpa', 'security',
]);
