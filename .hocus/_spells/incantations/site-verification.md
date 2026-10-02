---
name: site-verification
type: incantation
description: Verification steps for any change to the dms Next.js site
---

Steps (stop at the first failure and diagnose with `failure-diagnosis`):
1. `pnpm lint`
2. `pnpm build`
3. For UI changes: `pnpm dev`, open the affected route at desktop and mobile width
4. `graphify update .`
Report: pass/fail per step, one line each.
