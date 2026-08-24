"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
// Matches the import used in BlockchainService: the scoped `@stellar/stellar-sdk`
// package exports `Horizon.Server`, not a flat `Server` export.
const stellar_sdk_1 = require("@stellar/stellar-sdk");
const transaction_entity_1 = require("./entities/transaction.entity");
// Matches the fallback URL used in BlockchainService (process.env.HORIZON_URL ??
// this default). Kept as a local constant for now — see note below.
const HORIZON_URL = process.env.HORIZON_URL ?? 'https://horizon-testnet.stellar.org';
/** Provides the transactions application capability. */
let TransactionsService = class TransactionsService {
    transactionsRepository;
    horizon = new stellar_sdk_1.Horizon.Server(HORIZON_URL);
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    /** Returns a stable service health payload for this capability. */
    status() {
        return { module: 'transactions', status: 'ready' };
    }
    /**
     * Fetches the last 200 operations for `publicKey` from Horizon, normalizes
     * payment-type operations into TransactionEntity rows, and inserts them
     * with ON CONFLICT (hash) DO NOTHING. Returns the count of rows actually
     * inserted (duplicates are silently skipped, not counted).
     */
    async syncTransactions(userId, publicKey) {
        const page = await this.horizon
            .operations()
            .forAccount(publicKey)
            .order('desc')
            .limit(200)
            .call();
        const paymentOps = page.records.filter((op) => [
            'payment',
            'path_payment_strict_receive',
            'path_payment_strict_send',
        ].includes(op.type));
        if (paymentOps.length === 0) {
            return { synced: 0 };
        }
        // `category` is intentionally omitted so Postgres applies the column's
        // own default ('uncategorized') — the column is NOT NULL with no
        // nullable: true, so passing category: null here would violate that
        // constraint instead of falling through to the default.
        const rows = paymentOps.map((op) => ({
            userId,
            hash: op.transaction_hash,
            asset: op.asset_type === 'native' ? 'XLM' : op.asset_code ?? 'UNKNOWN',
            amount: op.amount,
            createdAt: new Date(op.created_at),
        }));
        // Postgres RETURNING only reports rows that were actually inserted —
        // rows skipped by ON CONFLICT DO NOTHING never appear here, so
        // result.raw.length is the true "new rows" count, not attempted count.
        const result = await this.transactionsRepository
            .createQueryBuilder()
            .insert()
            .into(transaction_entity_1.TransactionEntity)
            .values(rows)
            .orIgnore()
            .returning(['id'])
            .execute();
        return { synced: result.raw.length };
    }
    /**
     * Paginated transaction history for a user, with optional category/asset
     * filters, ordered newest-first.
     */
    async getHistory(userId, options) {
        const { page, limit, category, asset } = options;
        const qb = this.transactionsRepository
            .createQueryBuilder('t')
            .where('t.userId = :userId', { userId })
            .orderBy('t.createdAt', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        if (category) {
            qb.andWhere('t.category = :category', { category });
        }
        if (asset) {
            qb.andWhere('t.asset = :asset', { asset });
        }
        const [data, total] = await qb.getManyAndCount();
        return { data, total };
    }
    /**
     * Updates the category on a single transaction. Throws NotFoundException
     * if the row doesn't exist, ForbiddenException if it belongs to a
     * different user.
     */
    async categorize(userId, transactionId, category) {
        const transaction = await this.transactionsRepository.findOne({
            where: { id: transactionId },
        });
        if (!transaction) {
            throw new common_1.NotFoundException('Transaction not found');
        }
        if (transaction.userId !== userId) {
            throw new common_1.ForbiddenException('Transaction does not belong to this user');
        }
        transaction.category = category;
        return this.transactionsRepository.save(transaction);
    }
    /**
     * Aggregates total spend per category for a user, filtered by asset and
     * a minimum created_at date.
     */
    async getSpendingByCategory(userId, asset, since) {
        const rows = await this.transactionsRepository
            .createQueryBuilder('t')
            .select('t.category', 'category')
            .addSelect('SUM(t.amount)', 'total')
            .where('t.userId = :userId', { userId })
            .andWhere('t.asset = :asset', { asset })
            .andWhere('t.createdAt >= :since', { since })
            .groupBy('t.category')
            .getRawMany();
        return rows;
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.TransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map