import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
/** Demonstrates the application JWT boundary. */
@Controller('protected')
export class ProtectedController {
  /** Returns an authenticated-only response. */
  @Get()
  @UseGuards(JwtAuthGuard)
  getProtected(): { access: boolean } { return { access: true }; }
}
