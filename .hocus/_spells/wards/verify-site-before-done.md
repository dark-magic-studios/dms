---
name: verify-site-before-done
type: ward
trigger: before-task-complete
calls: site-verification
description: Lint, build, and graph refresh before closing any code task
---

Before marking a code task done in `TASKS.md` or sealing a potion, cast
`site-verification`. This repo has no test runner yet, so lint and build are the gate.
