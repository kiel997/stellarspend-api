/** Provides the budgets application capability. */
export declare class BudgetsService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
