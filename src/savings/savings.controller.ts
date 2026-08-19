import { Controller, Get } from '@nestjs/common';
import { SavingsService } from './savings.service';
/** Exposes the savings API surface. */
@Controller('savings')
export class SavingsController {
  constructor(private readonly service: SavingsService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
