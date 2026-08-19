import { Module } from '@nestjs/common';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';
/** Registers the budgets feature. */
@Module({ controllers: [BudgetsController], providers: [BudgetsService], exports: [BudgetsService] })
export class BudgetsModule {}
