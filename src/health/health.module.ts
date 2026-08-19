import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
/** Registers health probes. */
@Module({ controllers: [HealthController] })
export class HealthModule {}
