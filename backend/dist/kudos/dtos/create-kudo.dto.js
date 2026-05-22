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
exports.CreateKudoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../generated/prisma/enums");
class KudoMediaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.MediaType }),
    (0, class_validator_1.IsEnum)(enums_1.MediaType),
    __metadata("design:type", String)
], KudoMediaDto.prototype, "mediaType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KudoMediaDto.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], KudoMediaDto.prototype, "durationSeconds", void 0);
class CreateKudoDto {
}
exports.CreateKudoDto = CreateKudoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKudoDto.prototype, "receiverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, minimum: 10, maximum: 50 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(10),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], CreateKudoDto.prototype, "points", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKudoDto.prototype, "coreValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKudoDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.Visibility, default: enums_1.Visibility.PUBLIC }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.Visibility),
    __metadata("design:type", String)
], CreateKudoDto.prototype, "visibility", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [KudoMediaDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(0),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => KudoMediaDto),
    __metadata("design:type", Array)
], CreateKudoDto.prototype, "media", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String], example: ['user-id-1', 'user-id-2'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateKudoDto.prototype, "taggedUserIds", void 0);
//# sourceMappingURL=create-kudo.dto.js.map