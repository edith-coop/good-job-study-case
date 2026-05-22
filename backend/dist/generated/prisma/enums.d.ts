export declare const Visibility: {
    readonly PUBLIC: "PUBLIC";
    readonly PRIVATE: "PRIVATE";
};
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
export declare const KudoType: {
    readonly LIVE_FEED: "LIVE_FEED";
    readonly PEER_RECOGNITION: "PEER_RECOGNITION";
};
export type KudoType = (typeof KudoType)[keyof typeof KudoType];
export declare const MediaType: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
};
export type MediaType = (typeof MediaType)[keyof typeof MediaType];
export declare const ReactionEmoji: {
    readonly LIKE: "LIKE";
    readonly LOVE: "LOVE";
    readonly FIRE: "FIRE";
    readonly CLAP: "CLAP";
    readonly PARTY: "PARTY";
};
export type ReactionEmoji = (typeof ReactionEmoji)[keyof typeof ReactionEmoji];
export declare const RedemptionStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type RedemptionStatus = (typeof RedemptionStatus)[keyof typeof RedemptionStatus];
export declare const LedgerType: {
    readonly GIVE: "GIVE";
    readonly RECEIVE: "RECEIVE";
    readonly REDEEM: "REDEEM";
    readonly MONTHLY_RESET: "MONTHLY_RESET";
    readonly ADMIN_ADJUST: "ADMIN_ADJUST";
};
export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType];
export declare const ReferenceType: {
    readonly KUDO: "KUDO";
    readonly REWARD: "REWARD";
};
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];
export declare const NotificationType: {
    readonly TAGGED: "TAGGED";
    readonly COMMENT: "COMMENT";
    readonly REACTION: "REACTION";
    readonly KUDO_RECEIVED: "KUDO_RECEIVED";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
