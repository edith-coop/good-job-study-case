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
exports.KudosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_comment_dto_1 = require("./dtos/create-comment.dto");
const create_kudo_dto_1 = require("./dtos/create-kudo.dto");
const create_reaction_dto_1 = require("./dtos/create-reaction.dto");
const list_kudos_query_1 = require("./dtos/list-kudos.query");
const kudos_service_1 = require("./kudos.service");
let KudosController = class KudosController {
    constructor(kudosService) {
        this.kudosService = kudosService;
    }
    create(req, dto) {
        return this.kudosService.create(req.user.sub, dto);
    }
    list(query) {
        return this.kudosService.list(query);
    }
    getById(id) {
        return this.kudosService.getById(id);
    }
    addComment(req, id, dto) {
        return this.kudosService.addComment(req.user.sub, id, dto);
    }
    addReaction(req, id, dto) {
        return this.kudosService.addReaction(req.user.sub, id, dto);
    }
};
exports.KudosController = KudosController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Create a new kudo' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_kudo_dto_1.CreateKudoDto]),
    __metadata("design:returntype", void 0)
], KudosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List kudos feed' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_kudos_query_1.ListKudosQuery]),
    __metadata("design:returntype", void 0)
], KudosController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Get kudo detail' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KudosController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Add comment to kudo' }),
    (0, common_1.Post)(':id/comments'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], KudosController.prototype, "addComment", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Add reaction to kudo' }),
    (0, common_1.Post)(':id/reactions'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_reaction_dto_1.CreateReactionDto]),
    __metadata("design:returntype", void 0)
], KudosController.prototype, "addReaction", null);
exports.KudosController = KudosController = __decorate([
    (0, swagger_1.ApiTags)('kudos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('kudos'),
    __metadata("design:paramtypes", [kudos_service_1.KudosService])
], KudosController);
//# sourceMappingURL=kudos.controller.js.map