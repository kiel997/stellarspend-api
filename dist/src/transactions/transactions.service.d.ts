/** Provides the transactions application capability. */
export declare class TransactionsService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
