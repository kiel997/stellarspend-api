# Security audit report

## Findings

| ID | Severity | Finding | Status |
| --- | --- | --- | --- |
| SS-001 | Medium | Production signing provider must be isolated from the API process. | Open |
| SS-002 | Low | Redis and PostgreSQL require TLS and network policy in deployment. | Open |
| SS-003 | Low | Dependency audit is enforced in CI. | Mitigated |
