---
name: dinesh-new-tracked-event
description: Dinesh — add a Google Analytics event for a funnel interaction through lib/gtag.ts and TrackedLink, consent-aware.
---

# Dinesh New Tracked Event

Analytics lives in `lib/gtag.ts` (`trackEvent(action, { category, label, value })`, no-ops when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is unset or `window.gtag` is absent) and `components/GoogleAnalytics.tsx`.

## Existing events
`nav_click` (navigation), `email_click` (contact). Search with `graphify query "trackEvent"` before inventing names.

## Instructions
1. **Name**: snake_case `action` in the form `<noun>_<verb>` (`product_click`, `signum_export`). Reuse a category: `navigation`, `contact`, `product`, `tool`, `engagement`.
2. **Links**: wrap with `TrackedLink` props `eventName`, `eventCategory`, `eventLabel`; `external` for `mailto:` and off-site URLs.
3. **Non-link interactions** (buttons, tool completions): import `trackEvent` in a `"use client"` component and call it in the handler.
4. **Never send PII** (emails typed into forms, PDF contents or filenames from Signum). Labels are short static strings or slugs.
5. **Consent**: when the cookie-consent task (see `TASKS.md`) lands, events must stay inert until consent is granted. Do not add a second tracking path around `lib/gtag.ts`.
6. **Document**: add the event to the table in `PRODUCT.md` under Analytics events.
7. **Verify**: `pnpm lint`, `pnpm build`; in dev, confirm the call in the browser console with a test measurement ID.
