import { Controller, Get } from '@nestjs/common';
/** Provides liveness and readiness probes. */
@Controller('health')
export class HealthController {
  /** Returns a liveness response without requiring a database. */
  @Get('live') live(): { status: string } { return { status: 'ok' }; }
}
