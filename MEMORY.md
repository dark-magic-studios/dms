# MEMORY — persistent project memory

Index of decisions and facts future agent sessions must not regress. Newest first.

## Decisions
- **2026-10-02 — pnpm is the package manager.** `pnpm-lock.yaml` + `pnpm-workspace.yaml` are canonical; stale `package-lock.json` deleted. Enforced by curse `pnpm-only`.
- **2026-10-02 — Cast: Silicon Valley.** Personas and skill prefixes use Silicon Valley names. No wizard names.
- **2026-10-02 — Roster of 8**: Peter Gregory, Richard, Jared, Dinesh, Gilfoyle, Big Head, Erlich, Gavin. Others (Laurie, Monica, Russ, Dan Melcher, Jian-Yang) intentionally not installed; add via `recruit-agent`.
- **2026-10-02 — Product definition confirmed by owner**: studio portfolio + lead-gen funnel for davidmorais; clients are game devs, secondary audience developers; goal is brand growth.
- **2026-10-02 — No launch deadline set**; recorded as "none yet".

## Facts worth remembering
- Stack: Next.js 16.2.6 (breaking changes; read `node_modules/next/dist/docs/`), React 19.2.4, TypeScript 5, Tailwind 4, ESLint 9. No database, no CI, no test runner, no hosting config found.
- Design tokens are **verdant green on void**, not violet/cyan as the old README claims. README is stale.
- Fonts are loaded via `next/font/google` in `app/layout.tsx` (Cinzel, Cormorant Garamond, Manrope, JetBrains Mono); `@fontsource/*` deps in `package.json` appear unused (verify before removing).
- GA loads `afterInteractive` with no consent gate (GDPR gap). `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.example`.
- No `sitemap.ts` / `robots.ts` yet.
- Spells live in `.hocus/_spells/` (not repo root `_spells/`). Persona souls in `.hocus/personas/`.
- `hocus` ^2.4.0 was added as a dependency (uncommitted at bootstrap time).
- Harness: `.agents/` is the source of truth; the plugin bundle is `.agents/plugins/dms-plugin/`; never edit mirrors or create `.claude/agents/` or `.cursor/agents/`.
- Product statuses live in `lib/products.ts`; Hocus is live, Vitreus building.

## Chronology
- 2026-10-02: Harness bootstrapped by Peter Gregory; stack and product validated by owner.
