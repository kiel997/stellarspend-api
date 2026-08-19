/** Provides the accessibility application capability. */
export declare class AccessibilityService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
