import { BadRequestException } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

describe('BlockchainService', () => {
  it('accepts a positive decimal amount', () => expect(new BlockchainService().validatePositiveAmount('1.25')).toBe('1.25'));
  it('rejects zero and malformed amounts', () => {
    const service = new BlockchainService();
    expect(() => service.validatePositiveAmount('0')).toThrow(BadRequestException);
    expect(() => service.validatePositiveAmount('abc')).toThrow(BadRequestException);
  });
});
