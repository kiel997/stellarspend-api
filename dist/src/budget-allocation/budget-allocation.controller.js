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
exports.BudgetAllocationController = void 0;
const common_1 = require("@nestjs/common");
const budget_allocation_service_1 = require("./budget-allocation.service");
/** Exposes the budget-allocation API surface. */
let BudgetAllocationController = class BudgetAllocationController {
    service;
    constructor(service) {
        this.service = service;
    }
    /** Reports module availability for operations and smoke tests. */
    status() { return this.service.status(); }
};
exports.BudgetAllocationController = BudgetAllocationController;
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BudgetAllocationController.prototype, "status", null);
exports.BudgetAllocationController = BudgetAllocationController = __decorate([
    (0, common_1.Controller)('budget-allocation'),
    __metadata("design:paramtypes", [budget_allocation_service_1.BudgetAllocationService])
], BudgetAllocationController);
//# sourceMappingURL=budget-allocation.controller.js.map