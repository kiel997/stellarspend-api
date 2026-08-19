import { MailService } from './mail.service';
/** Exposes the mail API surface. */
export declare class MailController {
    private readonly service;
    constructor(service: MailService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
