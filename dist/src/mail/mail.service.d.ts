/** Provides the mail application capability. */
export declare class MailService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
