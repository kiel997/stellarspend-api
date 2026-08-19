import { Injectable } from '@nestjs/common';
/** Provides the notification application capability. */
@Injectable()
export class NotificationService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'notification', status: 'ready' }; }
}
