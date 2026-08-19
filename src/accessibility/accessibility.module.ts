import { Module } from '@nestjs/common';
import { AccessibilityController } from './accessibility.controller';
import { AccessibilityService } from './accessibility.service';
/** Registers the accessibility feature. */
@Module({ controllers: [AccessibilityController], providers: [AccessibilityService], exports: [AccessibilityService] })
export class AccessibilityModule {}
