/** Centralizes all Horizon interactions and prevents SDK leakage into feature modules. */
export declare class BlockchainService {
    private readonly server;
    /** Fetches a Stellar account balance snapshot. */
    getBalances(publicKey: string): Promise<unknown[]>;
    /** Validates a positive decimal amount before relay orchestration. */
    validatePositiveAmount(amount: string): string;
}
