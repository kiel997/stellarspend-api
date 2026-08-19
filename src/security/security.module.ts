import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';
/** Registers the security feature. */
@Module({ controllers: [SecurityController], providers: [SecurityService], exports: [SecurityService] })
export class SecurityModule {}
