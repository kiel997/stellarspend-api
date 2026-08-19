import { Controller, Get } from '@nestjs/common';
import { WalletService } from './wallet.service';
/** Exposes the wallet API surface. */
@Controller('wallet')
export class WalletController {
  constructor(private readonly service: WalletService) {}
  /** Reports module availability for operations and smoke tests. */
  @Get('status') status(): { module: string; status: string } { return this.service.status(); }
}
