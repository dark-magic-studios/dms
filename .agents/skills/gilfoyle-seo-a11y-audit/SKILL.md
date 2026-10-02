---
name: gilfoyle-seo-a11y-audit
description: Gilfoyle — audit the dms site for SEO metadata, accessibility, performance, and GDPR/analytics compliance, with ranked findings.
---

# Gilfoyle SEO / A11y / Privacy Audit

Read-only. Produces a ranked report; fixes go through Jared to Dinesh.

## Checklist
1. **Metadata**: every `app/**/page.tsx` exports `metadata` with unique `title` and `description`; root `metadataBase` is `https://darkmagicstudios.com`; OpenGraph and Twitter cards present for key pages; `app/sitemap.ts` and `app/robots.ts` exist (currently missing: finding).
2. **Semantics and a11y**: one `h1` per page, ordered headings, landmarks (`nav`, `main`, `footer`), `alt` text on images, `aria-label` on icon-only buttons, visible focus rings, text/background contrast on `--void-*` surfaces (WCAG AA), reduced-motion respect for animation in `app/globals.css`.
3. **Performance**: `next/image` for raster assets; font count (4 Google fonts loaded in `app/layout.tsx`: justify or trim); `pdfjs-dist` and `pdf-lib` only loaded on `/tools/signum` (dynamic import); no large client components on server-renderable pages.
4. **Privacy**: GA (`components/GoogleAnalytics.tsx`) loads `afterInteractive` with no consent gate: GDPR/ePrivacy finding until consent lands. No PII in events (`lib/gtag.ts` callers).
5. **Funnel**: every page has a path to `mailto:hello@darkmagicstudios.com` and each CTA is tracked.
6. **Hygiene**: single lockfile (`pnpm-lock.yaml`), `.env` not committed, `.env.example` current.

## Output
```
## Audit — <date>
Critical / High / Medium / Low
- [severity] <page or file>: <finding> → <fix> (owner: Dinesh|Erlich)
```
Add accepted findings to `TASKS.md` through Richard.
