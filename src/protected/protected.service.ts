import { Injectable } from '@nestjs/common';
/** Provides the protected application capability. */
@Injectable()
export class ProtectedService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'protected', status: 'ready' }; }
}
