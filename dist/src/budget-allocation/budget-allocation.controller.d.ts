import { BudgetAllocationService } from './budget-allocation.service';
/** Exposes the budget-allocation API surface. */
export declare class BudgetAllocationController {
    private readonly service;
    constructor(service: BudgetAllocationService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
