import { Injectable } from '@nestjs/common';
/** Provides the admin application capability. */
@Injectable()
export class AdminService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'admin', status: 'ready' }; }
}
