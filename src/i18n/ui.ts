// UI strings used by Header / Footer / shared chrome.
// Page-body copy lives in the .astro page files themselves (per-page review).

import type { Locale } from './routes';

export const ui = {
  en: {
    'nav.why':        'Why',
    'nav.howItWorks': 'How it works',
    'nav.demo':       'Demo',
    'nav.pricing':    'Pricing',
    'nav.docs':       'Docs',
    'nav.contact':    'Contact',
    'nav.verifier':   'Open the verifier',
    'nav.langSwitch': 'FR',
    'footer.tagline': 'Cryptographically verifiable event data for high-stakes AI systems.',
    'footer.verifier': 'Independent verifier',
    'footer.github':   'Source on GitHub',
    'footer.contact':  'Contact',
    'footer.legal':    'Aryamind SARL — all rights reserved',
    'footer.security': 'Security',
    'footer.privacy':  'Privacy',
    'footer.terms':    'Terms',
    'footer.dpa':      'DPA',
    'footer.blog':     'Blog',
    'footer.deck':     'Pitch deck',
    'footer.onboarding': 'Onboarding',
    'footer.status':   'Status',
    'footer.trust':    'Trust center',
  },
  fr: {
    'nav.why':        'Pourquoi',
    'nav.howItWorks': 'Comment ça marche',
    'nav.demo':       'Démo',
    'nav.pricing':    'Tarifs',
    'nav.docs':       'Docs',
    'nav.contact':    'Contact',
    'nav.verifier':   'Ouvrir le vérificateur',
    'nav.langSwitch': 'EN',
    'footer.tagline': 'Données d’événements cryptographiquement vérifiables pour les systèmes d’IA à fort enjeu.',
    'footer.verifier': 'Vérificateur indépendant',
    'footer.github':   'Source sur GitHub',
    'footer.contact':  'Contact',
    'footer.legal':    'Aryamind SARL — tous droits réservés',
    'footer.security': 'Sécurité',
    'footer.privacy':  'Confidentialité',
    'footer.terms':    'Conditions',
    'footer.dpa':      'DPA',
    'footer.blog':     'Blog',
    'footer.deck':     'Deck',
    'footer.onboarding': 'Onboarding',
    'footer.status':   'Statut',
    'footer.trust':    'Trust center',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
