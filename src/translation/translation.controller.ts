import { Controller, Get } from '@nestjs/common';
import { TranslationService } from './translation.service';
/** Exposes the translation API surface. */
@Controller('translation')
export class TranslationController {
  constructor(private readonly service: TranslationService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
