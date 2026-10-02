---
name: dinesh-new-page
description: Dinesh — add a new App Router route to the dms site with metadata, nav wiring, and tracked CTAs.
---

# Dinesh New Page

Adds a route under `app/<segment>/page.tsx` that matches the existing pages (`app/services/page.tsx`, `app/products/page.tsx`).

## When to use
- A new top-level page, product page, or tool page is requested.

## Instructions
1. **Read Next 16 docs first.** `node_modules/next/dist/docs/` for routing and metadata. This is not the Next.js you remember.
2. **Create `app/<segment>/page.tsx`** as a **server component**. Export `metadata: Metadata` with a `title` ending in ` — Dark Magic Studios` and a one-sentence `description` (see `app/products/page.tsx`).
3. **Shell**: render `<NavBar />`, `<main>`, `<Footer />` (from `@/components/*`). Open with `<section className="dm-subpage-hero">` containing `.dm-eyebrow`, `h1.dm-subpage-hero__title`, `p.dm-subpage-hero__lede`, then content inside `.dm-container`.
4. **Style** with existing `dm-*` classes and tokens from `app/globals.css`. Add new classes there in the same BEM style (`dm-<block>__<element>`), never inline hex colors.
5. **Links and CTAs**: use `TrackedLink` (`@/components/TrackedLink`) with `eventName`, `eventCategory`, `eventLabel` for every CTA. Contact CTA is `mailto:hello@darkmagicstudios.com` with `external`.
6. **Nav**: if the page is top-level, add it to the `links` array in `components/NavBar.tsx` (`{ id, href, label }`).
7. **Verify**: `pnpm lint` and `pnpm build`; open `pnpm dev` and check the page at mobile width. Then `graphify update .`.

## Output
List of files created/changed, plus the route and its metadata title.
