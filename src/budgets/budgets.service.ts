import { Injectable } from '@nestjs/common';
/** Provides the budgets application capability. */
@Injectable()
export class BudgetsService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'budgets', status: 'ready' }; }
}
