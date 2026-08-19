import { AnalyticsService } from './analytics.service';
/** Exposes the analytics API surface. */
export declare class AnalyticsController {
    private readonly service;
    constructor(service: AnalyticsService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
