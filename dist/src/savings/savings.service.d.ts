/** Provides the savings application capability. */
export declare class SavingsService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
