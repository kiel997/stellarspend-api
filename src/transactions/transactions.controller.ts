import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

/** Exposes the transactions API surface. */
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly service: TransactionsService) {}

  /** Reports module availability for operations and smoke tests. */
  @Get('status')
  status(): { module: string; status: string } {
    return this.service.status();
  }

  @UseGuards(JwtAuthGuard)
  @Post('sync')
  async sync(@Req() req: any, @Body('publicKey') publicKey: string) {
    // ASSUMPTION: req.user.sub carries the userId — confirm against your
    // JwtStrategy's validate() return shape (could be req.user.userId, .id, etc.)
    const userId = req.user.sub;
    return this.service.syncTransactions(userId, publicKey);
  }

  @UseGuards(JwtAuthGuard)
  @Get('spending-by-category')
  async spendingByCategory(
    @Req() req: any,
    @Query('asset') asset: string,
    @Query('since') since: string,
  ) {
    const userId = req.user.sub;
    return this.service.getSpendingByCategory(userId, asset, new Date(since));
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getHistory(
    @Req() req: any,
    @Query('page') page = '1',
    @Query('limit') limit = '20',
    @Query('category') category?: string,
    @Query('asset') asset?: string,
  ) {
    const userId = req.user.sub;
    return this.service.getHistory(userId, {
      page: Number(page),
      limit: Number(limit),
      category,
      asset,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/category')
  async categorize(
    @Req() req: any,
    @Param('id') id: string,
    @Body('category') category: string,
  ) {
    const userId = req.user.sub;
    return this.service.categorize(userId, id, category);
  }
}