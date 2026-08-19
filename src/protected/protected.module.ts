import { Module } from '@nestjs/common';
import { ProtectedController } from './protected.controller';
import { ProtectedService } from './protected.service';
/** Registers the protected feature. */
@Module({ controllers: [ProtectedController], providers: [ProtectedService], exports: [ProtectedService] })
export class ProtectedModule {}
