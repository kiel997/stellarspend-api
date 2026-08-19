import { Injectable } from '@nestjs/common';
/** Provides the cache application capability. */
@Injectable()
export class CacheService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'cache', status: 'ready' }; }
}
