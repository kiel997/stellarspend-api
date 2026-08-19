import { UsersService } from './users.service';
/** Exposes the users API surface. */
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
