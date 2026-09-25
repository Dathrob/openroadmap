# OpenRoadmap

## Know what to learn. Know where to look.

OpenRoadmap is an open-source standard and directory for structured learning roadmaps. It organizes external resources into transparent paths for anything learnable. It is not an LMS, course provider, chatbot, or hosted AI generator.

- Website: [openroadmap.vercel.app](https://openroadmap.vercel.app)
- [Documentation](docs/SPEC.md) · [Contributor guide](/guide) · [Contributing](CONTRIBUTING.md)

## Quick start

```bash
npm install
npm run dev
```

Validate every roadmap with `npm run validate`. Roadmaps live in `roadmaps/<slug>/roadmap.yaml`; use `examples/roadmap-template.yaml`. AI and hybrid contributions must disclose provider, model, version, and generation date.

## Architecture

YAML → JSON Schema → validator → parser → static registry → Next.js pages. GitHub pull requests are the content workflow; no database or secrets are required.

## Maintainer

@dathrob ([dathrob](https://github.com/dathrob)).

Licensed under Apache-2.0.
