import { MigrationInterface, QueryRunner } from 'typeorm';

/** Creates the budgets table for user spending plans. */
export class CreateBudgetsTable1710000000004 implements MigrationInterface {
  name = 'CreateBudgetsTable1710000000004';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS budgets (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid NOT NULL,
        name varchar(80) NOT NULL,
        asset varchar(12) NOT NULL,
        amount numeric(30,12) NOT NULL,
        category varchar(80) NOT NULL,
        period varchar(20) NOT NULL DEFAULT 'monthly',
        start_date date,
        end_date date,
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now()
      )
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS budgets');
  }
}
