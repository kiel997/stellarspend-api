import { Controller, Get } from '@nestjs/common';
import { CurrencyConversionService } from './currency-conversion.service';
/** Exposes the currency-conversion API surface. */
@Controller('currency-conversion')
export class CurrencyConversionController {
  constructor(private readonly service: CurrencyConversionService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
