import { Module } from '@nestjs/common';
import { AnalyticsSystemController } from './analytics-system.controller';
import { AnalyticsSystemService } from './analytics-system.service';
/** Registers the analytics-system feature. */
@Module({ controllers: [AnalyticsSystemController], providers: [AnalyticsSystemService], exports: [AnalyticsSystemService] })
export class AnalyticsSystemModule {}
