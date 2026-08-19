import { Module } from '@nestjs/common';
import { CurrencyConversionController } from './currency-conversion.controller';
import { CurrencyConversionService } from './currency-conversion.service';
/** Registers the currency-conversion feature. */
@Module({ controllers: [CurrencyConversionController], providers: [CurrencyConversionService], exports: [CurrencyConversionService] })
export class CurrencyConversionModule {}
