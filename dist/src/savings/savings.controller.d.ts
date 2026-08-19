import { SavingsService } from './savings.service';
/** Exposes the savings API surface. */
export declare class SavingsController {
    private readonly service;
    constructor(service: SavingsService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
