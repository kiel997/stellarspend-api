import { Injectable } from '@nestjs/common';
/** Provides the audit application capability. */
@Injectable()
export class AuditService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'audit', status: 'ready' }; }
}
