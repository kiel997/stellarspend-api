import { LoggingService } from './logging.service';
/** Exposes the logging API surface. */
export declare class LoggingController {
    private readonly service;
    constructor(service: LoggingService);
    /** Reports logging availability for smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
