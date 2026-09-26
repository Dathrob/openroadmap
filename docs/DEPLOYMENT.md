# Deployment and branch protection

## Production

`main` is the production source:

```text
Pull Request → CI → Maintainer review → Merge → main → Vercel Production
```

Import `github.com/Dathrob/openroadmap` into Vercel. Next.js is detected automatically; the default install and `npm run build` settings work. No environment variables or secrets are required.

## Pull requests

GitHub Actions validates pull requests with lint, roadmap validation, tests, typechecking, and build. Public fork pull requests use GitHub CI only by default and do not require Vercel credentials or preview deployments. Trusted branch previews are optional.

## Required GitHub settings

These cannot be configured by repository files alone. The maintainer should configure a ruleset for `main` that requires a pull request, requires the relevant CI status checks, requires conversation resolution where practical, blocks force pushes, and prevents branch deletion. Current project policy assigns final merge authority to @Dathrob; repository settings must enforce any desired restriction.
