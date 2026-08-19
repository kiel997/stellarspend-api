/** Provides liveness and readiness probes. */
export declare class HealthController {
    /** Returns a liveness response without requiring a database. */
    live(): {
        status: string;
    };
}
