import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
/** Exposes the analytics API surface. */
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
