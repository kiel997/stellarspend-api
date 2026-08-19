import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
/** Exposes the mail API surface. */
@Controller('mail')
export class MailController {
  constructor(private readonly service: MailService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
