import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { CacheModule } from '../cache/cache.module';
import { TransactionEntity } from '../transactions/entities/transaction.entity';

/** Registers the analytics feature. */
@Module({
  imports: [CacheModule, TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
