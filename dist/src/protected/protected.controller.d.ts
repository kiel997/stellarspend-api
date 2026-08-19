/** Demonstrates the application JWT boundary. */
export declare class ProtectedController {
    /** Returns an authenticated-only response. */
    getProtected(): {
        access: boolean;
    };
}
