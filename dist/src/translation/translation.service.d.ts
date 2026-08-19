/** Provides the translation application capability. */
export declare class TranslationService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
