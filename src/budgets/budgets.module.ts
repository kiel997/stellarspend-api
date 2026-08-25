import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';
import { BudgetEntity } from './entities/budget.entity';

/** Registers the budgets feature. */
@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity])],
  controllers: [BudgetsController],
  providers: [BudgetsService],
  exports: [BudgetsService],
})
export class BudgetsModule {}
