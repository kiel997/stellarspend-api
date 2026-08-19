import { Module } from '@nestjs/common';
import { SavingsController } from './savings.controller';
import { SavingsService } from './savings.service';
/** Registers the savings feature. */
@Module({ controllers: [SavingsController], providers: [SavingsService], exports: [SavingsService] })
export class SavingsModule {}
