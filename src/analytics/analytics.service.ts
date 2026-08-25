import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionEntity } from '../transactions/entities/transaction.entity';
import { CacheService } from '../cache/cache.service';

const TREND_TTL_SECONDS = 300;

export interface SpendingTrendPoint {
  week: string;
  total: string;
}

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionsRepository: Repository<TransactionEntity>,
    private readonly cacheService: CacheService,
  ) {}

  status(): { module: string; status: string } {
    return { module: 'analytics', status: 'ready' };
  }

  async getSpendingTrend(
    userId: string,
    asset: string,
    weeks: number,
  ): Promise<SpendingTrendPoint[]> {
    const cacheKey = `analytics:trend:${userId}:${asset}:${weeks}`;

    const cached = await this.cacheService.get<SpendingTrendPoint[]>(cacheKey);
    if (cached) {
      return cached;
    }

    const rows = await this.transactionsRepository
      .createQueryBuilder('t')
      .select("date_trunc('week', t.createdAt)", 'week')
      .addSelect('SUM(t.amount)', 'total')
      .where('t.userId = :userId', { userId })
      .andWhere('t.asset = :asset', { asset })
      .andWhere(`t.createdAt >= NOW() - (:weeks || ' weeks')::interval`, { weeks })
      .groupBy('week')
      .orderBy('week', 'ASC')
      .getRawMany();

    await this.cacheService.set(cacheKey, rows, TREND_TTL_SECONDS);
    return rows;
  }
}