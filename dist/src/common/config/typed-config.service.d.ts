import { ConfigService } from '@nestjs/config';
/** Provides typed access to validated StellarSpend configuration. */
export declare class TypedConfigService {
    private readonly config;
    constructor(config: ConfigService);
    /** Returns a string configuration value. */
    get(key: string, fallback?: string): string;
    /** Returns a numeric configuration value. */
    getNumber(key: string, fallback: number): number;
}
