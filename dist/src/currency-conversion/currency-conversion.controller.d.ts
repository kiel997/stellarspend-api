import { CurrencyConversionService } from './currency-conversion.service';
/** Exposes the currency-conversion API surface. */
export declare class CurrencyConversionController {
    private readonly service;
    constructor(service: CurrencyConversionService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
