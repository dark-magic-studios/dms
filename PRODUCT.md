# PRODUCT — Dark Magic Studios site (dms)

## Vision
The public face of Dark Magic Studios (davidmorais): an independent studio building developer tools, apps, and game systems. The site proves the studio is real and good, then turns a visit into a conversation.

## What this repository is
A Next.js marketing site, studio portfolio, and **lead-gen funnel**. It is not a SaaS and has no backend, database, or accounts.

## Target users
1. **Game developers (clients)**: indie studios and teams who need tools, game systems, save formats, designer-facing tooling, or a codebase nobody wants to touch.
2. **Developers**: people who might adopt Hocus (multi-agent harness generator) or follow the studio's work.
3. **Collaborators ("familiars")**: contractors who apply at `/familiars`.

## Goals (in priority order)
1. **Brand growth**: make Dark Magic Studios recognisable and credible to game devs and developers.
2. **Lead generation**: visitors reach `hello@darkmagicstudios.com` with clear fit signals (see good/bad-fit lists on `/services`).
3. **Product awareness**: Hocus live, Vitreus in development, Signum free, Forgeboard and Pulsebook on the bench.

## Site map
| Route | Purpose |
|---|---|
| `/` | Hero, studio intro, teasers (`HomeTeasers`), contact |
| `/services` | What the studio does, good/bad fits, engagement model |
| `/products` | Full portfolio: Building / Free tools / Coming |
| `/products/hocus`, `/products/vitreus` | Product pages |
| `/tools/signum` | Free client-side PDF fill-and-sign tool (no upload) |
| `/familiars` | Apply to work with the studio |

## Portfolio (source of truth: `lib/products.ts`)
| Product | Status |
|---|---|
| Hocus | Live |
| Vitreus | In development |
| Signum | Free tool |
| Forgeboard | Coming soon (indie game feature requests, roadmap, changelog) |
| Pulsebook | Coming soon (mood/habit journal with real cross-device sync) |

## Analytics events
Sent via `lib/gtag.ts`; naming per spell `ga-event-name`.
| Action | Category | Where |
|---|---|---|
| `nav_click` | navigation | `NavBar` links |
| `email_click` | contact | `NavBar`, contact CTAs |

## Design language
Dark "void" backgrounds, "smoke" neutrals, **verdant green** accent (tokens in `app/globals.css`). Fonts: Cinzel (wordmark/headings), Cormorant Garamond, Manrope (body), JetBrains Mono (code). Tone: confident, quiet, no corporate sludge, honest about status.

## Hard constraints
- **Deadline**: none set yet.
- **Compliance**: GDPR/ePrivacy: Google Analytics must be consent-gated (open task). Owner is based in Portugal; audience includes the EU.
- **Platform**: static-friendly Next.js 16 App Router, pnpm, no database. Keep it fast and small.
- **Quality targets**: performance budget and accessibility target to be defined (open tasks).
- **Irreversible**: brand name and domain `darkmagicstudios.com`; contact `hello@darkmagicstudios.com`.

## Non-goals
Accounts, payments, a CMS, a blog engine (not yet), brochure-site theming for clients.
