import { AdminService } from './admin.service';
/** Exposes the admin API surface. */
export declare class AdminController {
    private readonly service;
    constructor(service: AdminService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
