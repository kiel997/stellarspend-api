import { Controller, Get } from '@nestjs/common';
import { AuditService } from './audit.service';
/** Exposes the audit API surface. */
@Controller('audit')
export class AuditController {
  constructor(private readonly service: AuditService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
