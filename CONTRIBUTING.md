# Contributing

Use `TypedConfigService` for configuration and never read `process.env` in feature services. Add DTO validation, tests with mocked persistence, and a matching migration for each entity change. Use Conventional Commits and branches such as `feature/`, `fix/`, `docs/`, and `chore/`; run `npm run lint`, `npm test`, and `npm run build` before opening a pull request.

Public classes and methods use JSDoc describing purpose, parameters, and return values. Module ownership follows the feature list in `ARCHITECTURE.md`.
