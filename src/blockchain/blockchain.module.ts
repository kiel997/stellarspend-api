import { Module } from '@nestjs/common';
import { BlockchainController } from './blockchain.controller';
import { BlockchainService } from './blockchain.service';
/** Registers the Stellar Horizon and Soroban integration boundary. */
@Module({ controllers: [BlockchainController], providers: [BlockchainService], exports: [BlockchainService] })
export class BlockchainModule {}
