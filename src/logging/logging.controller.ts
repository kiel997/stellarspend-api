import { Controller, Get } from '@nestjs/common';
import { LoggingService } from './logging.service';
/** Exposes the logging API surface. */
@Controller('logging')
export class LoggingController {
  constructor(private readonly service: LoggingService) {}
  /** Reports logging availability for smoke tests. */
  @Get('status') status(): { module: string; status: string } { return { module: 'logging', status: 'ready' }; }
}
