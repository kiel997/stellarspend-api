# StellarSpend API

StellarSpend is a wallet-first financial management API for unbanked and underbanked communities. It records Stellar transactions, supports XLM/USDC/EURC wallets, enables budgeting and savings goals, and keeps a transparent audit trail without KYC-gated flows.

## Features

- Stellar Horizon and Soroban integration
- Wallet linkage and transaction relay boundary
- Decimal-safe transaction, budget, allocation, and savings records
- Multi-currency support for XLM, USDC, and EURC
- Notifications, mail, internal analytics, and external analytics fan-out
- JWT authentication, revocation, rate limiting, idempotency, audit logs
- English, Spanish, French, Swahili, Portuguese, and Arabic translation support

## Architecture

```text
HTTP / WebSocket -> security middleware -> JWT/role guards -> DTO validation
                 -> controllers -> domain services -> TypeORM/PostgreSQL
                                      |-> blockchain (Horizon/Soroban)
                                      |-> audit / analytics / notifications
```

## Quick start

```bash
npm install
cp .env.example .env
npm run start:dev
```

Swagger is available at `http://localhost:3001/docs` and the versioned API begins at `/api/v1`.

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Database schema](DATABASE_SCHEMA.md)
- [Runbook](RUNBOOK.md)
- [Security checklist](SECURITY_CHECKLIST.md)
- [Security audit report](SECURITY_AUDIT_REPORT.md)
- [Configuration](README-config.md)
- [Contributing](CONTRIBUTING.md)
- [API versioning](API_VERSIONING.md)
- [Audit requirements](docs/AUDIT_REQUIREMENTS.md)
- [Optimizations](OPTIMIZATIONS.md)
- [Workflow examples](WORKFLOW_EXAMPLES.md)
