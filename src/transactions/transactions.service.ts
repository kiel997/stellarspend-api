import { Injectable } from '@nestjs/common';
/** Provides the transactions application capability. */
@Injectable()
export class TransactionsService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'transactions', status: 'ready' }; }
}
