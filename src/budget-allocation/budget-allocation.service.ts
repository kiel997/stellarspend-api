import { Injectable } from '@nestjs/common';
/** Provides the budget-allocation application capability. */
@Injectable()
export class BudgetAllocationService {
  /** Returns a stable service health payload for this capability. */
  status(): { module: string; status: string } { return { module: 'budget-allocation', status: 'ready' }; }
}
