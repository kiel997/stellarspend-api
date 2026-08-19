"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const blockchain_service_1 = require("./blockchain.service");
describe('BlockchainService', () => {
    it('accepts a positive decimal amount', () => expect(new blockchain_service_1.BlockchainService().validatePositiveAmount('1.25')).toBe('1.25'));
    it('rejects zero and malformed amounts', () => {
        const service = new blockchain_service_1.BlockchainService();
        expect(() => service.validatePositiveAmount('0')).toThrow(common_1.BadRequestException);
        expect(() => service.validatePositiveAmount('abc')).toThrow(common_1.BadRequestException);
    });
});
//# sourceMappingURL=blockchain.service.spec.js.map