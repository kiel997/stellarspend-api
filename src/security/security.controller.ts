import { Controller, Get } from '@nestjs/common';
import { SecurityService } from './security.service';
/** Exposes the security API surface. */
@Controller('security')
export class SecurityController {
  constructor(private readonly service: SecurityService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
