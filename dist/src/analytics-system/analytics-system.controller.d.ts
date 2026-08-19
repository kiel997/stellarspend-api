import { AnalyticsSystemService } from './analytics-system.service';
/** Exposes the analytics-system API surface. */
export declare class AnalyticsSystemController {
    private readonly service;
    constructor(service: AnalyticsSystemService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
