import { BadRequestException, Injectable } from '@nestjs/common';
import { Horizon } from '@stellar/stellar-sdk';
/** Centralizes all Horizon interactions and prevents SDK leakage into feature modules. */
@Injectable()
export class BlockchainService {
  private readonly server = new Horizon.Server(process.env.HORIZON_URL ?? 'https://horizon-testnet.stellar.org');
  /** Fetches a Stellar account balance snapshot. */
  async getBalances(publicKey: string): Promise<unknown[]> {
    if (!/^G[A-Z2-7]{55}$/.test(publicKey)) throw new BadRequestException('Invalid Stellar public key');
    const account = await this.server.loadAccount(publicKey);
    return account.balances;
  }
  /** Validates a positive decimal amount before relay orchestration. */
  validatePositiveAmount(amount: string): string {
    if (!/^\d+(\.\d+)?$/.test(amount) || Number(amount) <= 0) throw new BadRequestException('Amount must be positive');
    return amount;
  }
}
