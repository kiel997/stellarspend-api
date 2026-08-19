# Runbook

Required settings are documented in `.env.example`: PostgreSQL connection, JWT secret and TTLs, Redis URL, `STELLAR_NETWORK`, `HORIZON_URL`, `SOROBAN_RPC_URL`, and SMTP settings. Run additive migrations with `npm run migration:run`; never enable TypeORM synchronization. Liveness is `/api/v1/health/live`; Swagger is `/docs`.

For incidents, check API logs, database connectivity, Horizon availability, Redis locks, migration status, and idempotency records before retrying a relay. Stellar signing material must remain outside logs and should be held by a dedicated signer or wallet provider in production.
