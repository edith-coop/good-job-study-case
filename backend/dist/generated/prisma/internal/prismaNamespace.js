"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.MonthlyGivingBudgetScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.PointLedgerScalarFieldEnum = exports.RewardRedemptionScalarFieldEnum = exports.RewardCatalogScalarFieldEnum = exports.CommentMediaScalarFieldEnum = exports.KudoCommentScalarFieldEnum = exports.KudoReactionScalarFieldEnum = exports.KudoMediaScalarFieldEnum = exports.KudoTagScalarFieldEnum = exports.KudoScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Kudo: 'Kudo',
    KudoTag: 'KudoTag',
    KudoMedia: 'KudoMedia',
    KudoReaction: 'KudoReaction',
    KudoComment: 'KudoComment',
    CommentMedia: 'CommentMedia',
    RewardCatalog: 'RewardCatalog',
    RewardRedemption: 'RewardRedemption',
    PointLedger: 'PointLedger',
    Notification: 'Notification',
    MonthlyGivingBudget: 'MonthlyGivingBudget'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.KudoScalarFieldEnum = {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    type: 'type',
    points: 'points',
    coreValue: 'coreValue',
    message: 'message',
    visibility: 'visibility',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.KudoTagScalarFieldEnum = {
    id: 'id',
    kudoId: 'kudoId',
    userId: 'userId',
    createdAt: 'createdAt'
};
exports.KudoMediaScalarFieldEnum = {
    id: 'id',
    kudoId: 'kudoId',
    mediaType: 'mediaType',
    mediaUrl: 'mediaUrl',
    durationSeconds: 'durationSeconds',
    createdAt: 'createdAt'
};
exports.KudoReactionScalarFieldEnum = {
    id: 'id',
    kudoId: 'kudoId',
    userId: 'userId',
    emoji: 'emoji',
    createdAt: 'createdAt'
};
exports.KudoCommentScalarFieldEnum = {
    id: 'id',
    kudoId: 'kudoId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CommentMediaScalarFieldEnum = {
    id: 'id',
    commentId: 'commentId',
    mediaType: 'mediaType',
    mediaUrl: 'mediaUrl',
    createdAt: 'createdAt'
};
exports.RewardCatalogScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    costPoints: 'costPoints',
    stockQuantity: 'stockQuantity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RewardRedemptionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    rewardId: 'rewardId',
    pointsSpent: 'pointsSpent',
    status: 'status',
    redeemedAt: 'redeemedAt'
};
exports.PointLedgerScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    referenceType: 'referenceType',
    referenceId: 'referenceId',
    description: 'description',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    receiverId: 'receiverId',
    actorId: 'actorId',
    type: 'type',
    entityType: 'entityType',
    entityId: 'entityId',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.MonthlyGivingBudgetScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    month: 'month',
    totalBudget: 'totalBudget',
    usedBudget: 'usedBudget',
    remainingBudget: 'remainingBudget',
    resetAt: 'resetAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map