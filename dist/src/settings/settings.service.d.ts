/** Provides the settings application capability. */
export declare class SettingsService {
    /** Returns a stable service health payload for this capability. */
    status(): {
        module: string;
        status: string;
    };
}
