"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationController = void 0;
const common_1 = require("@nestjs/common");
const translation_service_1 = require("./translation.service");
/** Exposes the translation API surface. */
let TranslationController = class TranslationController {
    service;
    constructor(service) {
        this.service = service;
    }
    /** Reports module availability for operations and smoke tests. */
    status() { return this.service.status(); }
};
exports.TranslationController = TranslationController;
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TranslationController.prototype, "status", null);
exports.TranslationController = TranslationController = __decorate([
    (0, common_1.Controller)('translation'),
    __metadata("design:paramtypes", [translation_service_1.TranslationService])
], TranslationController);
//# sourceMappingURL=translation.controller.js.map