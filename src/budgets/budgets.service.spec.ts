import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetEntity } from './entities/budget.entity';

describe('BudgetsService', () => {
  let service: BudgetsService;
  let repo: any;

  const mockBudget: BudgetEntity = {
    id: 'budget-1',
    userId: 'user-1',
    name: 'Groceries',
    asset: 'USDC',
    amount: '200.000000000000',
    category: 'groceries',
    period: 'monthly',
    startDate: '2026-01-01',
    endDate: null,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  };

  beforeEach(async () => {
    repo = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BudgetsService,
        { provide: getRepositoryToken(BudgetEntity), useValue: repo },
      ],
    }).compile();

    service = module.get<BudgetsService>(BudgetsService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('status', () => {
    it('returns ready status', () => {
      expect(service.status()).toEqual({ module: 'budgets', status: 'ready' });
    });
  });

  describe('create', () => {
    it('creates and saves a new budget', async () => {
      repo.create.mockReturnValue({ ...mockBudget });
      repo.save.mockResolvedValue({ ...mockBudget });

      const result = await service.create('user-1', {
        name: 'Groceries',
        asset: 'USDC',
        amount: '200.000000000000',
        category: 'groceries',
        period: 'monthly',
        startDate: '2026-01-01',
        endDate: null,
      } as any);

      expect(result.name).toBe('Groceries');
      expect(repo.create).toHaveBeenCalledWith(
        expect.objectContaining({ userId: 'user-1', name: 'Groceries' }),
      );
      expect(repo.save).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('returns all budgets for the user ordered by createdAt DESC', async () => {
      repo.find.mockResolvedValue([mockBudget]);

      const result = await service.findAll('user-1');

      expect(result).toEqual([mockBudget]);
      expect(repo.find).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        order: { createdAt: 'DESC' },
      });
    });

    it('returns empty array when user has no budgets', async () => {
      repo.find.mockResolvedValue([]);
      expect(await service.findAll('user-2')).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('returns the budget when it belongs to the user', async () => {
      repo.findOne.mockResolvedValue({ ...mockBudget });

      const result = await service.findOne('user-1', 'budget-1');

      expect(result).toEqual(mockBudget);
    });

    it('throws NotFoundException when budget does not exist', async () => {
      repo.findOne.mockResolvedValue(null);

      await expect(service.findOne('user-1', 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('throws ForbiddenException when budget belongs to another user', async () => {
      repo.findOne.mockResolvedValue({ ...mockBudget, userId: 'user-999' });

      await expect(service.findOne('user-1', 'budget-1')).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('update', () => {
    it('updates and saves the budget when ownership is valid', async () => {
      repo.findOne.mockResolvedValue({ ...mockBudget });
      repo.save.mockImplementation(async (b: any) => b);

      const result = await service.update('user-1', 'budget-1', {
        name: 'Rent',
      });

      expect(result.name).toBe('Rent');
      expect(repo.save).toHaveBeenCalled();
    });

    it('propagates NotFoundException from findOne', async () => {
      repo.findOne.mockResolvedValue(null);

      await expect(
        service.update('user-1', 'missing', { name: 'X' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('propagates ForbiddenException from findOne', async () => {
      repo.findOne.mockResolvedValue({ ...mockBudget, userId: 'user-999' });

      await expect(
        service.update('user-1', 'budget-1', { name: 'X' }),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('remove', () => {
    it('removes the budget when ownership is valid', async () => {
      repo.findOne.mockResolvedValue({ ...mockBudget });
      repo.remove.mockResolvedValue(undefined);

      await service.remove('user-1', 'budget-1');

      expect(repo.remove).toHaveBeenCalledWith(mockBudget);
    });

    it('propagates NotFoundException from findOne', async () => {
      repo.findOne.mockResolvedValue(null);

      await expect(service.remove('user-1', 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
