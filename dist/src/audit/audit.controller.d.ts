import { AuditService } from './audit.service';
/** Exposes the audit API surface. */
export declare class AuditController {
    private readonly service;
    constructor(service: AuditService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
