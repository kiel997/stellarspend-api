import { Controller, Get } from '@nestjs/common';
import { AccessibilityService } from './accessibility.service';
/** Exposes the accessibility API surface. */
@Controller('accessibility')
export class AccessibilityController {
  constructor(private readonly service: AccessibilityService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
