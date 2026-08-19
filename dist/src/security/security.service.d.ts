/** Provides the security application capability. */
export declare class SecurityService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
