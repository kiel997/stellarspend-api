import { SecurityService } from './security.service';
/** Exposes the security API surface. */
export declare class SecurityController {
    private readonly service;
    constructor(service: SecurityService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
