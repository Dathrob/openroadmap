# V0.1 stress-test report

Task 002 tested the format against machine learning, backend engineering, photography, digital marketing, and multiple ML authorship variants.

## Findings

- `spec`, identity, version, authorship, ordered sections, topics, resources, dependencies, categories, and URLs worked across domains.
- The original format was not software-specific, but a first-class `subject` object was needed to group multiple roadmaps without conflating a roadmap id with a subject.
- Resource `type` and `format` remain open strings, which accommodates books, videos, documentation, MOOCs, repositories, tutorials, and practice platforms without a rigid taxonomy.
- A reusable-resource catalog was deferred: the current fixtures do not yet repeat enough metadata to justify added indirection, and inline resources keep contributions LLM-friendly.
- Reviews, ranking, resource health, and version history remain V0.2 concerns.

The standard remains small enough for an external coding agent to generate reliably: read `AGENTS.md`, create one YAML document, run `npm run validate`, and fix explicit errors.
