import { Controller, Get } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
/** Exposes the budgets API surface. */
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly service: BudgetsService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
