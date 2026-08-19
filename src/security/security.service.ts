import { Injectable } from '@nestjs/common';
/** Provides the security application capability. */
@Injectable()
export class SecurityService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'security', status: 'ready' }; }
}
