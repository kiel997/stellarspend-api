import { WalletService } from './wallet.service';
/** Exposes the wallet API surface. */
export declare class WalletController {
    private readonly service;
    constructor(service: WalletService);
    /** Reports module availability for operations and smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
