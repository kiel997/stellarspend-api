/** Provides the analytics-system application capability. */
export declare class AnalyticsSystemService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
