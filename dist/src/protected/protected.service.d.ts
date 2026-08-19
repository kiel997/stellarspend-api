/** Provides the protected application capability. */
export declare class ProtectedService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
