"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KudosModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const kudos_controller_1 = require("./kudos.controller");
const kudos_service_1 = require("./kudos.service");
const notifications_module_1 = require("../notifications/notifications.module");
let KudosModule = class KudosModule {
};
exports.KudosModule = KudosModule;
exports.KudosModule = KudosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => prisma_module_1.PrismaModule),
            (0, common_1.forwardRef)(() => notifications_module_1.NotificationsModule)
        ],
        controllers: [kudos_controller_1.KudosController],
        providers: [kudos_service_1.KudosService],
    })
], KudosModule);
//# sourceMappingURL=kudos.module.js.map