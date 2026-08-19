import { Injectable } from '@nestjs/common';
/** Provides the analytics application capability. */
@Injectable()
export class AnalyticsService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'analytics', status: 'ready' }; }
}
