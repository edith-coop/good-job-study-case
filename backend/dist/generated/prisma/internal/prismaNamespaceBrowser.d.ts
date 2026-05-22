import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Kudo: "Kudo";
    readonly KudoTag: "KudoTag";
    readonly KudoMedia: "KudoMedia";
    readonly KudoReaction: "KudoReaction";
    readonly KudoComment: "KudoComment";
    readonly CommentMedia: "CommentMedia";
    readonly RewardCatalog: "RewardCatalog";
    readonly RewardRedemption: "RewardRedemption";
    readonly PointLedger: "PointLedger";
    readonly Notification: "Notification";
    readonly MonthlyGivingBudget: "MonthlyGivingBudget";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly avatarUrl: "avatarUrl";
    readonly department: "department";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const KudoScalarFieldEnum: {
    readonly id: "id";
    readonly senderId: "senderId";
    readonly receiverId: "receiverId";
    readonly type: "type";
    readonly points: "points";
    readonly coreValue: "coreValue";
    readonly message: "message";
    readonly visibility: "visibility";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type KudoScalarFieldEnum = (typeof KudoScalarFieldEnum)[keyof typeof KudoScalarFieldEnum];
export declare const KudoTagScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type KudoTagScalarFieldEnum = (typeof KudoTagScalarFieldEnum)[keyof typeof KudoTagScalarFieldEnum];
export declare const KudoMediaScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly mediaType: "mediaType";
    readonly mediaUrl: "mediaUrl";
    readonly durationSeconds: "durationSeconds";
    readonly createdAt: "createdAt";
};
export type KudoMediaScalarFieldEnum = (typeof KudoMediaScalarFieldEnum)[keyof typeof KudoMediaScalarFieldEnum];
export declare const KudoReactionScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly emoji: "emoji";
    readonly createdAt: "createdAt";
};
export type KudoReactionScalarFieldEnum = (typeof KudoReactionScalarFieldEnum)[keyof typeof KudoReactionScalarFieldEnum];
export declare const KudoCommentScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type KudoCommentScalarFieldEnum = (typeof KudoCommentScalarFieldEnum)[keyof typeof KudoCommentScalarFieldEnum];
export declare const CommentMediaScalarFieldEnum: {
    readonly id: "id";
    readonly commentId: "commentId";
    readonly mediaType: "mediaType";
    readonly mediaUrl: "mediaUrl";
    readonly createdAt: "createdAt";
};
export type CommentMediaScalarFieldEnum = (typeof CommentMediaScalarFieldEnum)[keyof typeof CommentMediaScalarFieldEnum];
export declare const RewardCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly costPoints: "costPoints";
    readonly stockQuantity: "stockQuantity";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RewardCatalogScalarFieldEnum = (typeof RewardCatalogScalarFieldEnum)[keyof typeof RewardCatalogScalarFieldEnum];
export declare const RewardRedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly rewardId: "rewardId";
    readonly pointsSpent: "pointsSpent";
    readonly status: "status";
    readonly redeemedAt: "redeemedAt";
};
export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum];
export declare const PointLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly amount: "amount";
    readonly referenceType: "referenceType";
    readonly referenceId: "referenceId";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type PointLedgerScalarFieldEnum = (typeof PointLedgerScalarFieldEnum)[keyof typeof PointLedgerScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly receiverId: "receiverId";
    readonly actorId: "actorId";
    readonly type: "type";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const MonthlyGivingBudgetScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly month: "month";
    readonly totalBudget: "totalBudget";
    readonly usedBudget: "usedBudget";
    readonly remainingBudget: "remainingBudget";
    readonly resetAt: "resetAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MonthlyGivingBudgetScalarFieldEnum = (typeof MonthlyGivingBudgetScalarFieldEnum)[keyof typeof MonthlyGivingBudgetScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
