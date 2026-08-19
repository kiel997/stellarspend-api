import { MigrationInterface, QueryRunner } from 'typeorm';
/** Creates the core StellarSpend transaction ledger table. */
export declare class CreateFinancialTables1710000000000 implements MigrationInterface {
    /** Applies the additive financial schema. */
    up(queryRunner: QueryRunner): Promise<void>;
    /** Removes only the schema introduced by this migration. */
    down(queryRunner: QueryRunner): Promise<void>;
}
