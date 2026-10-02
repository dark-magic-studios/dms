---
name: erlich-new-product-page
description: Erlich — register a product in lib/products.ts and publish its /products/<slug> page with honest status and compelling copy.
---

# Erlich New Product Page

## When to use
- A new product, tool, or "coming soon" entry joins the portfolio, or a status changes.

## Instructions
1. **Register** a `Product` in `lib/products.ts` in the right list: `BUILDING`, `FREE_TOOLS`, or `COMING_SOON`. Fields: `slug`, `name`, `tagline` (lowercase, dot-separated phrase style), `description` (2 sentences, concrete), `tags`, `status` (`live` | `free` | `building` | `soon`), `statusLabel`, optional `href`, `github`, `mark`, `Icon` (lucide).
2. **Honesty rule**: status must match reality. `soon` entries get no dates. Never claim features that do not ship.
3. **Page** (only when `href` is set): delegate scaffolding to Dinesh via `dinesh-new-page` at `app/products/<slug>/page.tsx`; model on `app/products/hocus/page.tsx` and `vitreus/page.tsx`. Assets in `public/products/<slug>/` (`mark.png`).
4. **Copy pass**: audience is indie game devs and developers. Lead with the problem, then the mechanism, then one CTA. Run `/whismy-injector` then `/deslopify` on the draft.
5. **Cross-update**: root `metadata.description` in `app/layout.tsx` lists the products; `PRODUCT.md` portfolio table; `README.md` if relevant.
6. **Changelog**: add an entry via `/erlich-changelog`.
