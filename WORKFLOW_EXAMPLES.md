# Workflow examples

1. Client submits a transaction with an idempotency key.
2. DTO validation rejects malformed or non-positive amounts.
3. Blockchain adapter performs Stellar relay coordination.
4. Transaction, audit, notification, and analytics events are persisted.
5. A retry returns the original idempotent result without double submission.
