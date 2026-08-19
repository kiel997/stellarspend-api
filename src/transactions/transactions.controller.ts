import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
/** Exposes the transactions API surface. */
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
