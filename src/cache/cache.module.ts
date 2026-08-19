import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { CacheService } from './cache.service';
/** Registers the cache feature. */
@Module({ controllers: [CacheController], providers: [CacheService], exports: [CacheService] })
export class CacheModule {}
