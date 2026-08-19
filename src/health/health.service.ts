import { Injectable } from '@nestjs/common';
/** Provides the health application capability. */
@Injectable()
export class HealthService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'health', status: 'ready' }; }
}
