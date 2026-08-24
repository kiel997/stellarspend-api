"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTransactionsIndexes1710000000001 = void 0;
// ASSUMPTION: column names are snake_case ("user_id", "created_at") in
// Postgres. This is only true if the app's TypeORM connection is configured
// with a snake-case naming strategy (e.g. SnakeNamingStrategy). If entity
// columns are NOT auto-converted to snake_case, replace with the actual
// column names from 1710000000000-create-financial-tables.ts.
class AddTransactionsIndexes1710000000001 {
    name = 'AddTransactionsIndexes1710000000001';
    async up(queryRunner) {
        await queryRunner.query(`CREATE INDEX "IDX_transactions_user_created_at" ON "transactions" ("user_id", "created_at" DESC)`);
        await queryRunner.query(`CREATE INDEX "IDX_transactions_user_category" ON "transactions" ("user_id", "category")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "IDX_transactions_user_category"`);
        await queryRunner.query(`DROP INDEX "IDX_transactions_user_created_at"`);
    }
}
exports.AddTransactionsIndexes1710000000001 = AddTransactionsIndexes1710000000001;
//# sourceMappingURL=1710000000001-add-transactions-indexes.js.map