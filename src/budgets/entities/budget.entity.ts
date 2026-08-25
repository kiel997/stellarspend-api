import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/** Stores a user's recurring or one-time spending budget. */
@Entity('budgets')
export class BudgetEntity {
  /** Budget identifier. */
  @PrimaryGeneratedColumn('uuid') id!: string;

  /** Owning user identifier. */
  @Column('uuid') userId!: string;

  /** Human-readable budget name (e.g. "Groceries"). */
  @Column({ length: 80 }) name!: string;

  /** Stellar asset code such as XLM, USDC, or EURC. */
  @Column({ length: 12 }) asset!: string;

  /** Budgeted amount as decimal text to avoid floating-point loss. */
  @Column({ type: 'numeric', precision: 30, scale: 12 }) amount!: string;

  /** Spending category this budget tracks. */
  @Column({ length: 80 }) category!: string;

  /** Budget period: 'monthly', 'weekly', or 'yearly'. */
  @Column({ length: 20, default: 'monthly' }) period!: string;

  /** Optional start date for the budget window. */
  @Column({ type: 'date', nullable: true }) startDate!: string | null;

  /** Optional end date for the budget window. */
  @Column({ type: 'date', nullable: true }) endDate!: string | null;

  /** Row creation timestamp. */
  @CreateDateColumn() createdAt!: Date;

  /** Row last-update timestamp. */
  @UpdateDateColumn() updatedAt!: Date;
}
