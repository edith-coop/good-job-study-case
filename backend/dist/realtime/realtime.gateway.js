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
var RealtimeGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
let RealtimeGateway = RealtimeGateway_1 = class RealtimeGateway {
    constructor() {
        this.logger = new common_1.Logger(RealtimeGateway_1.name);
    }
    handleConnection(client) {
        const userId = client.handshake.auth?.userId ?? client.handshake.query?.userId;
        this.logger.log(`WebSocket connected: socketId=${client.id}, userId=${String(userId ?? 'unknown')}`);
        if (typeof userId === 'string' && userId.length > 0) {
            client.join(`user:${userId}`);
            client.data.userId = userId;
            this.logger.log(`Socket joined room: user:${userId}`);
        }
        else {
            this.logger.warn(`WebSocket connected without userId: socketId=${client.id}`);
        }
    }
    handleDisconnect(client) {
        const userId = client.data.userId;
        this.logger.log(`WebSocket disconnected: socketId=${client.id}, userId=${userId ?? 'unknown'}`);
        if (userId) {
            client.leave(`user:${userId}`);
        }
    }
    handlePing(payload, _client) {
        return { event: 'pong', data: payload };
    }
    emitNotification(userId, notification) {
        this.logger.log(`Emitting notification to user:${userId}`);
        this.server.to(`user:${userId}`).emit('notification', notification);
    }
    emitKudoCreated(userId, payload) {
        this.logger.log(`Emitting kudo.created to user:${userId}`);
        this.server.to(`user:${userId}`).emit('kudo.created', payload);
    }
    emitNotificationRead(userId, payload) {
        this.logger.log(`Emitting notification.read to user:${userId}`);
        this.server.to(`user:${userId}`).emit('notification.read', payload);
    }
};
exports.RealtimeGateway = RealtimeGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], RealtimeGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('ping'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "handlePing", null);
exports.RealtimeGateway = RealtimeGateway = RealtimeGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
            credentials: true,
        },
    })
], RealtimeGateway);
//# sourceMappingURL=realtime.gateway.js.map