import { Injectable } from '@nestjs/common';
/** Provides the translation application capability. */
@Injectable()
export class TranslationService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'translation', status: 'ready' }; }
}
