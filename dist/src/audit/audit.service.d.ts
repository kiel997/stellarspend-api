/** Provides the audit application capability. */
export declare class AuditService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
