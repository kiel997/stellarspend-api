import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
/** Registers the transactions feature. */
@Module({ controllers: [TransactionsController], providers: [TransactionsService], exports: [TransactionsService] })
export class TransactionsModule {}
