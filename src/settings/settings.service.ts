import { Injectable } from '@nestjs/common';
/** Provides the settings application capability. */
@Injectable()
export class SettingsService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'settings', status: 'ready' }; }
}
