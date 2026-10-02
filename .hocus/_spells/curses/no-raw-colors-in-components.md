---
name: no-raw-colors-in-components
type: curse
severity: soft
description: Use design tokens from globals.css, not hardcoded hex colors
---

Colors come from the tokens in `app/globals.css` (`--void-*`, `--smoke-*`,
`--verdant-*`, `--fg-*`, semantic `--success/--warning/--danger`). Flag any new hex,
rgb, or Tailwind arbitrary color value in components. Add or reuse a token instead.
