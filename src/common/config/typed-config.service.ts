import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/** Provides typed access to validated StellarSpend configuration. */
@Injectable()
export class TypedConfigService {
  constructor(private readonly config: ConfigService) {}

  /** Returns a string configuration value. */
  get(key: string, fallback?: string): string {
    return this.config.get<string>(key) ?? fallback ?? '';
  }

  /** Returns a numeric configuration value. */
  getNumber(key: string, fallback: number): number {
    return this.config.get<number>(key) ?? fallback;
  }
}
