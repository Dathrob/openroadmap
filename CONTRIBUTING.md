# Contributing to OpenRoadmap

OpenRoadmap welcomes roadmap and project contributions. GitHub is the contribution platform; there is no account system or internal editor.

## Public roadmap contributors

Anyone can contribute without repository access:

1. Fork `https://github.com/Dathrob/openroadmap`.
2. Clone your fork and create `roadmap/<slug>`.
3. Add one roadmap under `roadmaps/<slug>/`.
4. Run the local checks.
5. Commit and push to your fork.
6. Open a pull request against `Dathrob/openroadmap:main`.
7. Respond to CI and maintainer review.

Prefer one primary roadmap per pull request so review, history, validation, and rollback stay clear.

## Repository contributors

Trusted Repository Contributors may work on roadmaps, code, UI, documentation, tests, CI, and tooling. Use a branch such as `roadmap/<slug>`, `feat/<description>`, `fix/<description>`, `docs/<description>`, or `chore/<description>`. Repository access does not permit direct pushes to `main` or self-merging.

## Local validation

```bash
npm install
npm run lint
npm run validate
npm test
npm run typecheck
npm run build
```

## Authorship and verification

Roadmaps may be Human, AI, or Hybrid. AI and Hybrid roadmaps must truthfully disclose provider, model, version, and generation date when available. A merged contribution is published; it is not automatically Verified. Verification is a separate status indicating that the project’s defined verification requirements were met. Verified does not mean best, official, or guaranteed.

## Governance

Every change to `main`, including maintainer changes, goes through a pull request, CI, and review. Current project policy is that final approval and merging are performed by the maintainer, @dathrob. Required GitHub branch rules must be configured in repository settings.

See the [Contributor Guide](/guide), [specification](docs/SPEC.md), [AI authoring guide](docs/AI_AUTHORING.md), and [Code of Conduct](CODE_OF_CONDUCT.md).
