import { BlockchainService } from './blockchain.service';
/** Exposes the blockchain API surface. */
export declare class BlockchainController {
    private readonly service;
    constructor(service: BlockchainService);
    /** Reports Stellar adapter availability for smoke tests. */
    status(): {
        module: string;
        status: string;
    };
}
