/** Provides the cache application capability. */
export declare class CacheService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
