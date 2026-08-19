import { Module } from '@nestjs/common';
import { BudgetAllocationController } from './budget-allocation.controller';
import { BudgetAllocationService } from './budget-allocation.service';
/** Registers the budget-allocation feature. */
@Module({ controllers: [BudgetAllocationController], providers: [BudgetAllocationService], exports: [BudgetAllocationService] })
export class BudgetAllocationModule {}
