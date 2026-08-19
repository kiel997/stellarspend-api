# Architecture

The flat module layout keeps feature ownership explicit: auth/users handle identity; wallet/blockchain handle Stellar boundaries; transactions/budgets/budget-allocation/savings handle financial workflows; currency-conversion/notification/mail/analytics handle supporting behavior; admin/settings/audit/security/cache/logging/health/translation/accessibility/protected provide platform capabilities.

Request lifecycle: security headers and CORS -> API versioning -> throttling -> JWT/role guards -> validation and serialization -> controller -> service -> repository or blockchain adapter -> audit/event publication.

Financial submission flow: validate positive decimal -> idempotency key -> Stellar relay adapter -> ledger transaction record -> audit event -> notification and analytics fan-out.
