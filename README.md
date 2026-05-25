# carvetrace-site

Public website for CarveTrace — https://carvetrace.com

Built with [Astro](https://astro.build) (static output), bilingual (EN + FR),
deployed to Cloudflare Pages.

## Repository layout

```
src/
  layouts/        Shared HTML shell
  components/     Header, Footer
  pages/          EN pages (routed at /...)
  pages/fr/       FR pages (routed at /fr/...)
  i18n/           Translation strings + route map
  styles/         Global CSS
.github/workflows/
  deploy.yml      Cloudflare Pages deploy on push to main
```

## Local development

```bash
npm ci
npm run dev          # vite dev server on :4321
npm run build        # produces dist/
npm run preview      # serve dist/ locally
```

## Deployment

Pushed to `main` → GitHub Actions builds Astro → uploads `dist/` to
Cloudflare Pages project `carvetrace-com` → served at `carvetrace.com`.

### Operator prerequisites (one-time, manual)

1. Cloudflare Pages project `carvetrace-com` in the Aryamind account,
   linked to this repo (or set up for direct upload via GH Actions).
2. Cloudflare API token scoped to Pages: Edit on `carvetrace-com`.
3. GitHub repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. DNS apex record `carvetrace.com → carvetrace-com.pages.dev`
   (Cloudflare DNS, proxied). Do **not** touch the existing
   `verify.carvetrace.com` record.

Until the secrets and DNS are in place, the deploy workflow will fail
loudly on the Cloudflare step — the right failure mode (no silent
partial deploy).

## Sibling repos

- `aryamind-tech/carvetrace-verify-wasm` — the in-browser verifier
  served at `verify.carvetrace.com`. The `/demo` page on this site
  links there (does not embed).

## Content discipline

The site leads with **the problem** (a contested AI decision /
disputable evidence), positions **self-hosted sovereignty** as the
differentiator, and presents **readable reports** — not Merkle trees
or leaf indices.

No tracking. No analytics. No third-party fonts. No cookies. The
verifier itself promises zero-network-after-load; this site keeps
the same posture.
