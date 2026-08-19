/** Provides the users application capability. */
export declare class UsersService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
