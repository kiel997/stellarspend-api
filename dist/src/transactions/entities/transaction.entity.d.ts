/** Stores an immutable normalized Stellar transaction record. */
export declare class TransactionEntity {
    /** Transaction identifier. */
    id: string;
    /** Owning wallet/user identifier. */
    userId: string;
    /** Stellar transaction hash. */
    hash: string;
    /** Asset code such as XLM, USDC, or EURC. */
    asset: string;
    /** Decimal amount represented as text to avoid floating-point loss. */
    amount: string;
    /** Transaction category. */
    category: string;
    /** Creation timestamp. */
    createdAt: Date;
}
