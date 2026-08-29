import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetEntity } from './entities/budget.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(BudgetEntity)
    private readonly budgetsRepository: Repository<BudgetEntity>,
  ) {}

  /** Reports module availability for operations and smoke tests. */
  status(): { module: string; status: string } {
    return { module: 'budgets', status: 'ready' };
  }

  /**
   * Creates a new budget for the authenticated user.
   */
  async create(
    userId: string,
    dto: Omit<BudgetEntity, 'id' | 'userId' | 'createdAt' | 'updatedAt'>,
  ): Promise<BudgetEntity> {
    const budget = this.budgetsRepository.create({ ...dto, userId });
    return this.budgetsRepository.save(budget);
  }

  /**
   * Returns all budgets belonging to the authenticated user.
   */
  async findAll(userId: string): Promise<BudgetEntity[]> {
    return this.budgetsRepository.find({ where: { userId }, order: { createdAt: 'DESC' } });
  }

  /**
   * Returns a single budget by ID with ownership validation.
   */
  async findOne(userId: string, id: string): Promise<BudgetEntity> {
    const budget = await this.budgetsRepository.findOne({ where: { id } });
    if (!budget) throw new NotFoundException('Budget not found');
    if (budget.userId !== userId) {
      throw new ForbiddenException('Budget does not belong to this user');
    }
    return budget;
  }

  /**
   * Updates a budget by ID with ownership validation.
   */
  async update(
    userId: string,
    id: string,
    dto: Partial<Omit<BudgetEntity, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>,
  ): Promise<BudgetEntity> {
    const budget = await this.findOne(userId, id);
    Object.assign(budget, dto);
    return this.budgetsRepository.save(budget);
  }

  /**
   * Removes a budget by ID with ownership validation.
   */
  async remove(userId: string, id: string): Promise<void> {
    const budget = await this.findOne(userId, id);
    await this.budgetsRepository.remove(budget);
  }
}
