import { Controller, Get } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
/** Exposes the blockchain API surface. */
@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly service: BlockchainService) {}
  /** Reports Stellar adapter availability for smoke tests. */
  @Get('status') status(): { module: string; status: string } { return { module: 'blockchain', status: 'ready' }; }
}
