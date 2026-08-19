import { AccessibilityService } from './accessibility.service';
/** Exposes the accessibility API surface. */
export declare class AccessibilityController {
    private readonly service;
    constructor(service: AccessibilityService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
