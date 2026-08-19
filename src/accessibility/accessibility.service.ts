import { Injectable } from '@nestjs/common';
/** Provides the accessibility application capability. */
@Injectable()
export class AccessibilityService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'accessibility', status: 'ready' }; }
}
