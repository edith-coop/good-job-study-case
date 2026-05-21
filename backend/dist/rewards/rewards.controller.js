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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const create_reward_dto_1 = require("./dtos/create-reward.dto");
const redeem_reward_dto_1 = require("./dtos/redeem-reward.dto");
const update_redemption_status_dto_1 = require("./dtos/update-redemption-status.dto");
const rewards_service_1 = require("./rewards.service");
let RewardsController = class RewardsController {
    constructor(rewardsService) {
        this.rewardsService = rewardsService;
    }
    create(dto) {
        return this.rewardsService.create(dto);
    }
    findAll() {
        return this.rewardsService.findAll();
    }
    findById(id) {
        return this.rewardsService.findById(id);
    }
    redeem(userId, dto) {
        return this.rewardsService.redeem(userId, dto.rewardId);
    }
    listRedemptions() {
        return this.rewardsService.listRedemptions();
    }
    getRedemptionById(id) {
        return this.rewardsService.getRedemptionById(id);
    }
    updateRedemptionStatus(id, dto) {
        return this.rewardsService.updateRedemptionStatus(id, dto.status);
    }
};
exports.RewardsController = RewardsController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Create reward catalog item' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reward_dto_1.CreateRewardDto]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List reward catalog items' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Get reward by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Redeem reward' }),
    (0, common_1.Post)('redeem'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, redeem_reward_dto_1.RedeemRewardDto]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "redeem", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List redemptions' }),
    (0, common_1.Get)('redemptions/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "listRedemptions", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Get redemption by id' }),
    (0, common_1.Get)('redemptions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "getRedemptionById", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Update redemption status' }),
    (0, common_1.Patch)('redemptions/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_redemption_status_dto_1.UpdateRedemptionStatusDto]),
    __metadata("design:returntype", void 0)
], RewardsController.prototype, "updateRedemptionStatus", null);
exports.RewardsController = RewardsController = __decorate([
    (0, swagger_1.ApiTags)('rewards'),
    (0, common_1.Controller)('rewards'),
    __metadata("design:paramtypes", [rewards_service_1.RewardsService])
], RewardsController);
//# sourceMappingURL=rewards.controller.js.map