import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

/** Exposes the analytics API surface. */
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

  @Get('status')
  status(): { module: string; status: string } {
    return this.service.status();
  }

  @Get('trend')
  getTrend(
    @Query('userId') userId: string,
    @Query('asset') asset: string,
    @Query('weeks') weeks = '12',
  ) {
    return this.service.getSpendingTrend(userId, asset, Number(weeks));
  }
}