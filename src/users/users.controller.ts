import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
/** Exposes the users API surface. */
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
