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
exports.SavingsGoalEntity = void 0;
const typeorm_1 = require("typeorm");
/** Tracks a user's savings goal and decimal-safe progress. */
let SavingsGoalEntity = class SavingsGoalEntity {
    /** Goal identifier. */
    id;
    /** Owning user identifier. */
    userId;
    /** Human-readable goal name. */
    name;
    /** Target represented as a database numeric. */
    targetAmount;
    /** Current contribution represented as a database numeric. */
    currentAmount;
    /** Completion state. */
    isCompleted;
    /** Creation timestamp. */
    createdAt;
    /** Update timestamp. */
    updatedAt;
};
exports.SavingsGoalEntity = SavingsGoalEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SavingsGoalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], SavingsGoalEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SavingsGoalEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 30, scale: 12 }),
    __metadata("design:type", String)
], SavingsGoalEntity.prototype, "targetAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 30, scale: 12, default: 0 }),
    __metadata("design:type", String)
], SavingsGoalEntity.prototype, "currentAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SavingsGoalEntity.prototype, "isCompleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SavingsGoalEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SavingsGoalEntity.prototype, "updatedAt", void 0);
exports.SavingsGoalEntity = SavingsGoalEntity = __decorate([
    (0, typeorm_1.Entity)('savings_goals')
], SavingsGoalEntity);
//# sourceMappingURL=savings-goal.entity.js.map