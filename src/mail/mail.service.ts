import { Injectable } from '@nestjs/common';
/** Provides the mail application capability. */
@Injectable()
export class MailService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'mail', status: 'ready' }; }
}
