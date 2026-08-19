import { Controller, Get } from '@nestjs/common';
import { SettingsService } from './settings.service';
/** Exposes the settings API surface. */
@Controller('settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
