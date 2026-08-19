# Security checklist

- [x] Authentication and authorization: JWT boundary, validation, and role-ready guards.
- [x] API security: versioning, CORS allowlist, validation pipe, throttling, controlled errors.
- [x] Data storage: TypeORM migrations, decimal-safe numeric fields, scoped user records.
- [ ] File uploads: not applicable to the API surface.
- [x] Codebase and dependencies: strict TypeScript, CI lint/test/build/audit gates.
- [ ] Blockchain/wallet security: production signer isolation and secret rotation remain deployment responsibilities.

See [SECURITY_AUDIT_REPORT.md](SECURITY_AUDIT_REPORT.md).
