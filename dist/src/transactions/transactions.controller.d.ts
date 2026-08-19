import { TransactionsService } from './transactions.service';
/** Exposes the transactions API surface. */
export declare class TransactionsController {
    private readonly service;
    constructor(service: TransactionsService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
