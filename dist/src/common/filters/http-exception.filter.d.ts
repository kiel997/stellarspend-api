import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
/** Converts thrown exceptions into a stable, non-sensitive API response shape. */
export declare class HttpExceptionFilter implements ExceptionFilter {
    /** Handles an exception without exposing implementation details. */
    catch(exception: unknown, host: ArgumentsHost): void;
}
