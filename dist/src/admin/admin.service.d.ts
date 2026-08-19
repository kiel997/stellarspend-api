/** Provides the admin application capability. */
export declare class AdminService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
