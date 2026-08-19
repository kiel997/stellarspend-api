/** Provides the wallet application capability. */
export declare class WalletService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
