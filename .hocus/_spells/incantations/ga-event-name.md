---
name: ga-event-name
type: incantation
description: Naming format for Google Analytics events sent via lib/gtag.ts
---

Format:
action: {noun}_{verb}        (snake_case, e.g. product_click, email_click, signum_export)
category: {navigation|contact|product|tool|engagement}
label: {short static slug}   (never PII, never file names or user input)

Always send through `trackEvent` in `lib/gtag.ts` or the `TrackedLink` component.
