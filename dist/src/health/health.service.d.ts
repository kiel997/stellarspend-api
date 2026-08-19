/** Provides the health application capability. */
export declare class HealthService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
