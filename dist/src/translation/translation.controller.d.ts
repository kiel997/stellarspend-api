import { TranslationService } from './translation.service';
/** Exposes the translation API surface. */
export declare class TranslationController {
    private readonly service;
    constructor(service: TranslationService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
