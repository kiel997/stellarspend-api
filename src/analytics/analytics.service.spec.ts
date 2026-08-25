import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { AnalyticsService } from './analytics.service';
import { TransactionEntity } from '../transactions/entities/transaction.entity';
import { CacheService } from '../cache/cache.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let cacheService: { get: jest.Mock; set: jest.Mock };
  let repo: { createQueryBuilder: jest.Mock };
  let qb: any;

  beforeEach(async () => {
    qb = {
      select: jest.fn().mockReturnThis(),
      addSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      groupBy: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      getRawMany: jest.fn(),
    };

    cacheService = { get: jest.fn(), set: jest.fn() };
    repo = { createQueryBuilder: jest.fn(() => qb) };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsService,
        { provide: getRepositoryToken(TransactionEntity), useValue: repo },
        { provide: CacheService, useValue: cacheService },
      ],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
  });

  it('returns cached trend without querying the DB on a cache hit', async () => {
    cacheService.get.mockResolvedValue(
      [{ week: '2026-08-01', total: '100' }] as never,
    );

    const result = await service.getSpendingTrend('user1', 'XLM', 12);

    expect(result).toEqual([{ week: '2026-08-01', total: '100' }]);
    expect(repo.createQueryBuilder).not.toHaveBeenCalled();
  });

  it('runs the aggregation query and caches the result on a cache miss', async () => {
    cacheService.get.mockResolvedValue(null as never);
    qb.getRawMany.mockResolvedValue([{ week: '2026-08-01', total: '250' }]);

    const result = await service.getSpendingTrend('user1', 'XLM', 12);

    expect(qb.getRawMany).toHaveBeenCalled();
    expect(cacheService.set).toHaveBeenCalledWith(
      'analytics:trend:user1:XLM:12',
      [{ week: '2026-08-01', total: '250' }],
      300,
    );
    expect(result).toEqual([{ week: '2026-08-01', total: '250' }]);
  });
});