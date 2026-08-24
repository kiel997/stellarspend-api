import { MigrationInterface, QueryRunner } from 'typeorm';

// ASSUMPTION: column names are snake_case ("user_id", "created_at") in
// Postgres. This is only true if the app's TypeORM connection is configured
// with a snake-case naming strategy (e.g. SnakeNamingStrategy). If entity
// columns are NOT auto-converted to snake_case, replace with the actual
// column names from 1710000000000-create-financial-tables.ts.
export class AddTransactionsIndexes1710000000001 implements MigrationInterface {
  name = 'AddTransactionsIndexes1710000000001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_transactions_user_created_at" ON "transactions" ("user_id", "created_at" DESC)`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_transactions_user_category" ON "transactions" ("user_id", "category")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_transactions_user_category"`);
    await queryRunner.query(`DROP INDEX "IDX_transactions_user_created_at"`);
  }
}