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
exports.KudosPeerRecognitionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_kudo_dto_1 = require("./dtos/create-kudo.dto");
const list_kudos_query_1 = require("./dtos/list-kudos.query");
const kudos_service_1 = require("./kudos.service");
let KudosPeerRecognitionController = class KudosPeerRecognitionController {
    constructor(kudosService) {
        this.kudosService = kudosService;
    }
    create(req, dto) {
        return this.kudosService.create(req.user.sub, dto);
    }
    listSent(req, query) {
        return this.kudosService.listSent(req.user.sub, query);
    }
    listReceived(req, query) {
        return this.kudosService.listReceived(req.user.sub, query);
    }
};
exports.KudosPeerRecognitionController = KudosPeerRecognitionController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Create a new peer recognition kudo' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_kudo_dto_1.CreateKudoDto]),
    __metadata("design:returntype", void 0)
], KudosPeerRecognitionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List kudos sent by current user' }),
    (0, common_1.Get)('peer-recognition/sent'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, list_kudos_query_1.ListKudosQuery]),
    __metadata("design:returntype", void 0)
], KudosPeerRecognitionController.prototype, "listSent", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'List kudos received by current user' }),
    (0, common_1.Get)('peer-recognition/received'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, list_kudos_query_1.ListKudosQuery]),
    __metadata("design:returntype", void 0)
], KudosPeerRecognitionController.prototype, "listReceived", null);
exports.KudosPeerRecognitionController = KudosPeerRecognitionController = __decorate([
    (0, swagger_1.ApiTags)('Peer Recognition'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('kudos'),
    __metadata("design:paramtypes", [kudos_service_1.KudosService])
], KudosPeerRecognitionController);
//# sourceMappingURL=kudos-peer-recognition.controller.js.map