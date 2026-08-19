"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetAllocationModule = void 0;
const common_1 = require("@nestjs/common");
const budget_allocation_controller_1 = require("./budget-allocation.controller");
const budget_allocation_service_1 = require("./budget-allocation.service");
/** Registers the budget-allocation feature. */
let BudgetAllocationModule = class BudgetAllocationModule {
};
exports.BudgetAllocationModule = BudgetAllocationModule;
exports.BudgetAllocationModule = BudgetAllocationModule = __decorate([
    (0, common_1.Module)({ controllers: [budget_allocation_controller_1.BudgetAllocationController], providers: [budget_allocation_service_1.BudgetAllocationService], exports: [budget_allocation_service_1.BudgetAllocationService] })
], BudgetAllocationModule);
//# sourceMappingURL=budget-allocation.module.js.map