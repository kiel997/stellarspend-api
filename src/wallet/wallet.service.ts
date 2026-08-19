import { Injectable } from '@nestjs/common';
/** Provides the wallet application capability. */
@Injectable()
export class WalletService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'wallet', status: 'ready' }; }
}
