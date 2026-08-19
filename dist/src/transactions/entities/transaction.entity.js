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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEntity = void 0;
const typeorm_1 = require("typeorm");
/** Stores an immutable normalized Stellar transaction record. */
let TransactionEntity = class TransactionEntity {
    /** Transaction identifier. */
    id;
    /** Owning wallet/user identifier. */
    userId;
    /** Stellar transaction hash. */
    hash;
    /** Asset code such as XLM, USDC, or EURC. */
    asset;
    /** Decimal amount represented as text to avoid floating-point loss. */
    amount;
    /** Transaction category. */
    category;
    /** Creation timestamp. */
    createdAt;
};
exports.TransactionEntity = TransactionEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], TransactionEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 12 }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "asset", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 30, scale: 12 }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'uncategorized' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "createdAt", void 0);
exports.TransactionEntity = TransactionEntity = __decorate([
    (0, typeorm_1.Entity)('transactions')
], TransactionEntity);
//# sourceMappingURL=transaction.entity.js.map