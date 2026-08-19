import { Test } from '@nestjs/testing';
import { HealthController } from '../src/health/health.controller';

describe('Health endpoint', () => {
  it('returns liveness status', async () => {
    const module = await Test.createTestingModule({ controllers: [HealthController] }).compile();
    expect(module.get(HealthController).live()).toEqual({ status: 'ok' });
  });
});
