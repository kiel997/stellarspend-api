/** Provides the currency-conversion application capability. */
export declare class CurrencyConversionService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
