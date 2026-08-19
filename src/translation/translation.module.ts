import { Module } from '@nestjs/common';
import { TranslationController } from './translation.controller';
import { TranslationService } from './translation.service';
/** Registers the translation feature. */
@Module({ controllers: [TranslationController], providers: [TranslationService], exports: [TranslationService] })
export class TranslationModule {}
