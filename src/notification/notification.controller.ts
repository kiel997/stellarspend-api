import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
/** Exposes the notification API surface. */
@Controller('notification')
export class NotificationController {
  constructor(private readonly service: NotificationService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
