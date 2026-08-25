import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

/** Exposes the budgets API surface. */
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly service: BudgetsService) {}

  /** Reports module availability for operations and smoke tests. */
  @Get('status')
  status(): { module: string; status: string } {
    return this.service.status();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: any,
    @Body()
    body: {
      name: string;
      asset: string;
      amount: string;
      category: string;
      period?: string;
      startDate?: string;
      endDate?: string;
    },
  ) {
    const userId = req.user.sub;
    return this.service.create(userId, {
      name: body.name,
      asset: body.asset,
      amount: body.amount,
      category: body.category,
      period: body.period ?? 'monthly',
      startDate: body.startDate ?? null,
      endDate: body.endDate ?? null,
    } as any);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: any) {
    return this.service.findAll(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() req: any, @Param('id') id: string) {
    return this.service.findOne(req.user.sub, id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Req() req: any,
    @Param('id') id: string,
    @Body()
    body: Partial<{
      name: string;
      asset: string;
      amount: string;
      category: string;
      period: string;
      startDate: string | null;
      endDate: string | null;
    }>,
  ) {
    return this.service.update(req.user.sub, id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Req() req: any, @Param('id') id: string) {
    await this.service.remove(req.user.sub, id);
    return { deleted: true };
  }
}
