import { Controller, Get } from '@nestjs/common';
import { CacheService } from './cache.service';
/** Exposes the cache API surface. */
@Controller('cache')
export class CacheController {
  constructor(private readonly service: CacheService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
