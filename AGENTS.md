# OpenRoadmap contributor instructions

Read `docs/SPEC.md` and `schemas/roadmap.schema.json` before creating a roadmap. Add `roadmaps/<slug>/roadmap.yaml` and `README.md`; do not hard-code content in React. Use original external links only; do not copy course content or invent URLs. Declare Human, AI, or Hybrid authorship and disclose truthful AI provenance.

Public contributors use a fork and pull request. Repository Contributors use a branch in the canonical repository. No contributor, including the maintainer, should push directly to `main`; all changes require pull request, CI, and review. Prefer one primary roadmap per PR.

Run `npm run lint`, `npm run validate`, `npm test`, `npm run typecheck`, and `npm run build` before a PR. A merged roadmap is published but not automatically Verified.
