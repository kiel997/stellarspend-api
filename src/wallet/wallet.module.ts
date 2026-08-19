import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
/** Registers the wallet feature. */
@Module({ controllers: [WalletController], providers: [WalletService], exports: [WalletService] })
export class WalletModule {}
