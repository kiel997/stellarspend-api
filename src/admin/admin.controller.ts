import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
/** Exposes the admin API surface. */
@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
