# Optimizations

Use indexed user and hash columns, cursor-based transaction history, Redis locks for sync coordination, bounded Horizon pagination, and batched analytics fan-out. Keep chain calls behind the blockchain module so retries, timeouts, and provider changes remain isolated.
