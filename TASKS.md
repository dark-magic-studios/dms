# TASKS

Format for the queue (read by Jared): `- [ ] <id> | owner: <agent> | skill: <skill> | files: <paths> | acceptance: <criteria>`

## Queue
- [ ] T-001 | owner: Dinesh | skill: dinesh-new-tracked-event | files: components/GoogleAnalytics.tsx, lib/gtag.ts, new components/CookieConsent.tsx | acceptance: GA does not load or send events until the visitor opts in; choice persisted; opt-out possible; EU/GDPR-compliant copy. Plan first via Richard.
- [ ] T-002 | owner: Richard | skill: richard-draft-potion | files: PRODUCT.md | acceptance: define a performance budget (e.g. Lighthouse perf/LCP/CLS/JS weight per route) and an accessibility target (WCAG 2.2 AA), recorded in PRODUCT.md.
- [ ] T-003 | owner: Gilfoyle | skill: gilfoyle-seo-a11y-audit | files: app/** | acceptance: baseline audit report against the T-002 targets, findings ranked and queued.
- [ ] T-004 | owner: Dinesh | skill: dinesh-new-page | files: app/sitemap.ts, app/robots.ts, per-page OG metadata | acceptance: sitemap and robots served; every page has unique title, description, OG tags.
- [ ] T-005 | owner: Erlich | skill: erlich-readme | files: README.md | acceptance: README reflects pnpm, verdant design language, real routes, env setup (`NEXT_PUBLIC_GA_MEASUREMENT_ID`).
- [ ] T-006 | owner: Big Head | skill: bighead-dumb-test | files: n/a | acceptance: funnel walkthrough as a game-dev visitor on desktop and mobile; confusion log filed.
- [ ] T-007 | owner: Dinesh | skill: dinesh-new-component | files: package.json | acceptance: confirm whether `@fontsource/cinzel` and `@fontsource/inter` are used; remove if dead (needs user confirmation per curse `no-unconfirmed-package-installs`).

## Open questions (owner: David)
- [ ] Launch deadline (none set).
- [ ] Hosting target (Vercel / Netlify / other) and whether to add CI (lint + build on PR).
- [ ] Commit the dependency change `hocus` ^2.4.0 and the deleted `package-lock.json`.

## Done
- [x] 2026-10-02 Harness bootstrap: roster, skills, spells, foundational docs (see `hocus.md`).
