"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFinancialTables1710000000000 = void 0;
/** Creates the core StellarSpend transaction ledger table. */
class CreateFinancialTables1710000000000 {
    /** Applies the additive financial schema. */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS transactions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL, hash varchar(128) UNIQUE NOT NULL, asset varchar(12) NOT NULL, amount numeric(30,12) NOT NULL CHECK (amount > 0), category varchar(80) NOT NULL DEFAULT 'uncategorized', created_at timestamptz NOT NULL DEFAULT now())`);
    }
    /** Removes only the schema introduced by this migration. */
    async down(queryRunner) { await queryRunner.query('DROP TABLE IF EXISTS transactions'); }
}
exports.CreateFinancialTables1710000000000 = CreateFinancialTables1710000000000;
//# sourceMappingURL=1710000000000-create-financial-tables.js.map