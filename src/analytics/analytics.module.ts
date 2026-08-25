import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { TransactionEntity } from '../transactions/entities/transaction.entity';
import { BudgetEntity } from '../budgets/entities/budget.entity';

/** Registers the analytics feature. */
@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity, BudgetEntity]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
