import { NotificationService } from './notification.service';
/** Exposes the notification API surface. */
export declare class NotificationController {
    private readonly service;
    constructor(service: NotificationService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
