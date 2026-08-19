import { Injectable } from '@nestjs/common';
/** Provides the users application capability. */
@Injectable()
export class UsersService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'users', status: 'ready' }; }
}
