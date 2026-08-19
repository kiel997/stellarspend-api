import { BudgetsService } from './budgets.service';
/** Exposes the budgets API surface. */
export declare class BudgetsController {
    private readonly service;
    constructor(service: BudgetsService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
