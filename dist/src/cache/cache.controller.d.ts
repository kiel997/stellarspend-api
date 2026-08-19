import { CacheService } from './cache.service';
/** Exposes the cache API surface. */
export declare class CacheController {
    private readonly service;
    constructor(service: CacheService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
