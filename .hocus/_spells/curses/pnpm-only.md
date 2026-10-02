---
name: pnpm-only
type: curse
severity: hard
description: Only pnpm manages dependencies; never create npm or yarn lockfiles
---

This repository uses **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). Never run
`npm install`, `npm i`, `yarn`, or create `package-lock.json` / `yarn.lock`. If one
appears, stop and ask the user before deleting or committing it.
