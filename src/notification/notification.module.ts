import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
/** Registers the notification feature. */
@Module({ controllers: [NotificationController], providers: [NotificationService], exports: [NotificationService] })
export class NotificationModule {}
