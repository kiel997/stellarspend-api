"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/** TypeORM CLI data source for additive PostgreSQL migrations. */
exports.default = new typeorm_1.DataSource({ type: 'postgres', host: process.env.DB_HOST ?? 'localhost', port: Number(process.env.DB_PORT ?? 5432), username: process.env.DB_USERNAME ?? 'postgres', password: process.env.DB_PASSWORD ?? 'postgres', database: process.env.DB_NAME ?? 'stellarspend', entities: ['src/**/*.entity.ts'], migrations: ['src/migrations/*.ts'], synchronize: false });
//# sourceMappingURL=ormconfig.js.map