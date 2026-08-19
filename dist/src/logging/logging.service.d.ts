/** Provides structured redacted application logging. */
export declare class LoggingService {
    private readonly logger;
    /** Logs an operational message without secret payloads. */
    info(message: string, context?: string): void;
    private redact;
}
