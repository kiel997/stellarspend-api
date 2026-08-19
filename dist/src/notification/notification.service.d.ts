/** Provides the notification application capability. */
export declare class NotificationService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
