"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsSystemModule = void 0;
const common_1 = require("@nestjs/common");
const analytics_system_controller_1 = require("./analytics-system.controller");
const analytics_system_service_1 = require("./analytics-system.service");
/** Registers the analytics-system feature. */
let AnalyticsSystemModule = class AnalyticsSystemModule {
};
exports.AnalyticsSystemModule = AnalyticsSystemModule;
exports.AnalyticsSystemModule = AnalyticsSystemModule = __decorate([
    (0, common_1.Module)({ controllers: [analytics_system_controller_1.AnalyticsSystemController], providers: [analytics_system_service_1.AnalyticsSystemService], exports: [analytics_system_service_1.AnalyticsSystemService] })
], AnalyticsSystemModule);
//# sourceMappingURL=analytics-system.module.js.map