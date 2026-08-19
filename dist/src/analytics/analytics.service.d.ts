/** Provides the analytics application capability. */
export declare class AnalyticsService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
