"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainService = void 0;
const common_1 = require("@nestjs/common");
const stellar_sdk_1 = require("@stellar/stellar-sdk");
/** Centralizes all Horizon interactions and prevents SDK leakage into feature modules. */
let BlockchainService = class BlockchainService {
    server = new stellar_sdk_1.Horizon.Server(process.env.HORIZON_URL ?? 'https://horizon-testnet.stellar.org');
    /** Fetches a Stellar account balance snapshot. */
    async getBalances(publicKey) {
        if (!/^G[A-Z2-7]{55}$/.test(publicKey))
            throw new common_1.BadRequestException('Invalid Stellar public key');
        const account = await this.server.loadAccount(publicKey);
        return account.balances;
    }
    /** Validates a positive decimal amount before relay orchestration. */
    validatePositiveAmount(amount) {
        if (!/^\d+(\.\d+)?$/.test(amount) || Number(amount) <= 0)
            throw new common_1.BadRequestException('Amount must be positive');
        return amount;
    }
};
exports.BlockchainService = BlockchainService;
exports.BlockchainService = BlockchainService = __decorate([
    (0, common_1.Injectable)()
], BlockchainService);
//# sourceMappingURL=blockchain.service.js.map