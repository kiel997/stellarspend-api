import { Injectable } from '@nestjs/common';
/** Provides the analytics-system application capability. */
@Injectable()
export class AnalyticsSystemService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'analytics-system', status: 'ready' }; }
}
