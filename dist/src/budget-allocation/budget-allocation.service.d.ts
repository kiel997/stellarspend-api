/** Provides the budget-allocation application capability. */
export declare class BudgetAllocationService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
