import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
/** Stores an immutable normalized Stellar transaction record. */
@Entity('transactions')
export class TransactionEntity {
  /** Transaction identifier. */
  @PrimaryGeneratedColumn('uuid') id!: string;
  /** Owning wallet/user identifier. */
  @Column('uuid') userId!: string;
  /** Stellar transaction hash. */
  @Column({ unique: true }) hash!: string;
  /** Asset code such as XLM, USDC, or EURC. */
  @Column({ length: 12 }) asset!: string;
  /** Decimal amount represented as text to avoid floating-point loss. */
  @Column({ type: 'numeric', precision: 30, scale: 12 }) amount!: string;
  /** Transaction category. */
  @Column({ default: 'uncategorized' }) category!: string;
  /** Creation timestamp. */
  @CreateDateColumn() createdAt!: Date;
}
