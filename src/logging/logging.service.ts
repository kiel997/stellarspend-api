import { Injectable, Logger } from '@nestjs/common';
/** Provides structured redacted application logging. */
@Injectable()
export class LoggingService {
  private readonly logger = new Logger('StellarSpend');
  /** Logs an operational message without secret payloads. */
  info(message: string, context = 'Application'): void { this.logger.log(this.redact(message), context); }
  private redact(value: string): string { return value.replace(/(password|token|refreshToken|secretKey)=([^& ]+)/gi, '$1=[REDACTED]'); }
}
