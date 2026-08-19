# Database schema

Core persisted records include users, wallets, transactions, budgets, budget line items, budget allocations, savings goals, savings contributions, currency rates, notifications, analytics events, audit logs, idempotency keys, settings, and translations. Financial amounts are PostgreSQL `numeric(30,12)` values represented as strings in TypeScript. User-owned records reference a user UUID and are scoped by the authenticated subject; transaction hashes and idempotency keys are unique.
