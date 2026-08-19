import { Controller, Get } from '@nestjs/common';
import { BudgetAllocationService } from './budget-allocation.service';
/** Exposes the budget-allocation API surface. */
@Controller('budget-allocation')
export class BudgetAllocationController {
  constructor(private readonly service: BudgetAllocationService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
