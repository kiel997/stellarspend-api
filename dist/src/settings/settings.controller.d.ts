import { SettingsService } from './settings.service';
/** Exposes the settings API surface. */
export declare class SettingsController {
    private readonly service;
    constructor(service: SettingsService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
