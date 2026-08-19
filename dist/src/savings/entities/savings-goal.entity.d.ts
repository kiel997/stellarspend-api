/** Tracks a user's savings goal and decimal-safe progress. */
export declare class SavingsGoalEntity {
    /** Goal identifier. */
    id: string;
    /** Owning user identifier. */
    userId: string;
    /** Human-readable goal name. */
    name: string;
    /** Target represented as a database numeric. */
    targetAmount: string;
    /** Current contribution represented as a database numeric. */
    currentAmount: string;
    /** Completion state. */
    isCompleted: boolean;
    /** Creation timestamp. */
    createdAt: Date;
    /** Update timestamp. */
    updatedAt: Date;
}
