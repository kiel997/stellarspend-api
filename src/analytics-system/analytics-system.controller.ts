import { Controller, Get } from '@nestjs/common';
import { AnalyticsSystemService } from './analytics-system.service';
/** Exposes the analytics-system API surface. */
@Controller('analytics-system')
export class AnalyticsSystemController {
  constructor(private readonly service: AnalyticsSystemService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
