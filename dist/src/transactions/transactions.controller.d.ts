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
    sync(req: any, publicKey: string): Promise<import("./transactions.service").SyncResult>;
    spendingByCategory(req: any, asset: string, since: string): Promise<import("./transactions.service").SpendingByCategoryRow[]>;
    getHistory(req: any, page?: string, limit?: string, category?: string, asset?: string): Promise<import("./transactions.service").PaginatedHistory>;
    categorize(req: any, id: string, category: string): Promise<import("./entities/transaction.entity").TransactionEntity>;
}
