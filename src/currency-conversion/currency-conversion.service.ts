import { Injectable } from '@nestjs/common';
/** Provides the currency-conversion application capability. */
@Injectable()
export class CurrencyConversionService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'currency-conversion', status: 'ready' }; }
}
