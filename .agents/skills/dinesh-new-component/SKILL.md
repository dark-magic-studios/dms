---
name: dinesh-new-component
description: Dinesh — add a reusable React component to components/ following dms design tokens, server/client conventions, and tracking.
---

# Dinesh New Component

## When to use
- A section, card, or widget is needed on one or more pages.

## Instructions
1. **Check for reuse** first: `components/` has `Hero`, `Services`, `Engagement`, `Contact`, `ProductCard`, `HomeTeasers`, `HocusCast`, `TrackedLink`. Extend before duplicating.
2. **File**: `components/<PascalName>.tsx`, default export, props typed with an interface. No `any`.
3. **Server by default.** Add `"use client"` only when it needs state, effects, or event handlers (see `NavBar.tsx`, `TrackedLink.tsx`).
4. **Styling**: BEM `dm-<block>` classes in `app/globals.css` using tokens (`--void-*` backgrounds, `--smoke-*` text, `--verdant-*` accent, `--fg-*` foregrounds). Fonts via the CSS variables from `app/layout.tsx`, not new font imports. Icons from `lucide-react`.
5. **Data-driven**: product-like content comes from `lib/products.ts` types, not hardcoded copy.
6. **Accessibility**: semantic elements, `aria-label` on icon-only controls, visible focus, `aria-hidden` on decorative layers.
7. **Tracking**: interactive elements that matter to the funnel use `TrackedLink` / `trackEvent` (see `dinesh-new-tracked-event`).
8. **Verify**: `pnpm lint`, `pnpm build`, then `graphify update .`.
