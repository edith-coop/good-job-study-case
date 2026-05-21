import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    avatarUrl: string | null;
    department: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    avatarUrl: string | null;
    department: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    fullName: number;
    avatarUrl: number;
    department: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    avatarUrl?: true;
    department?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    avatarUrl?: true;
    department?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    avatarUrl?: true;
    department?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl: string | null;
    department: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    department?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    sentKudos?: Prisma.KudoListRelationFilter;
    receivedKudos?: Prisma.KudoListRelationFilter;
    comments?: Prisma.KudoCommentListRelationFilter;
    reactions?: Prisma.KudoReactionListRelationFilter;
    ledgers?: Prisma.PointLedgerListRelationFilter;
    notificationsReceived?: Prisma.NotificationListRelationFilter;
    notificationsSent?: Prisma.NotificationListRelationFilter;
    rewardRedemptions?: Prisma.RewardRedemptionListRelationFilter;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sentKudos?: Prisma.KudoOrderByRelationAggregateInput;
    receivedKudos?: Prisma.KudoOrderByRelationAggregateInput;
    comments?: Prisma.KudoCommentOrderByRelationAggregateInput;
    reactions?: Prisma.KudoReactionOrderByRelationAggregateInput;
    ledgers?: Prisma.PointLedgerOrderByRelationAggregateInput;
    notificationsReceived?: Prisma.NotificationOrderByRelationAggregateInput;
    notificationsSent?: Prisma.NotificationOrderByRelationAggregateInput;
    rewardRedemptions?: Prisma.RewardRedemptionOrderByRelationAggregateInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    department?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    sentKudos?: Prisma.KudoListRelationFilter;
    receivedKudos?: Prisma.KudoListRelationFilter;
    comments?: Prisma.KudoCommentListRelationFilter;
    reactions?: Prisma.KudoReactionListRelationFilter;
    ledgers?: Prisma.PointLedgerListRelationFilter;
    notificationsReceived?: Prisma.NotificationListRelationFilter;
    notificationsSent?: Prisma.NotificationListRelationFilter;
    rewardRedemptions?: Prisma.RewardRedemptionListRelationFilter;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    department?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutSentKudosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentKudosInput, Prisma.UserUncheckedCreateWithoutSentKudosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentKudosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReceivedKudosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedKudosInput, Prisma.UserUncheckedCreateWithoutReceivedKudosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedKudosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSentKudosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentKudosInput, Prisma.UserUncheckedCreateWithoutSentKudosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentKudosInput;
    upsert?: Prisma.UserUpsertWithoutSentKudosInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSentKudosInput, Prisma.UserUpdateWithoutSentKudosInput>, Prisma.UserUncheckedUpdateWithoutSentKudosInput>;
};
export type UserUpdateOneRequiredWithoutReceivedKudosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedKudosInput, Prisma.UserUncheckedCreateWithoutReceivedKudosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedKudosInput;
    upsert?: Prisma.UserUpsertWithoutReceivedKudosInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReceivedKudosInput, Prisma.UserUpdateWithoutReceivedKudosInput>, Prisma.UserUncheckedUpdateWithoutReceivedKudosInput>;
};
export type UserCreateNestedOneWithoutReactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReactionsInput, Prisma.UserUncheckedCreateWithoutReactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReactionsInput, Prisma.UserUncheckedCreateWithoutReactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReactionsInput;
    upsert?: Prisma.UserUpsertWithoutReactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReactionsInput, Prisma.UserUpdateWithoutReactionsInput>, Prisma.UserUncheckedUpdateWithoutReactionsInput>;
};
export type UserCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.UserUpsertWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput, Prisma.UserUpdateWithoutCommentsInput>, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserCreateNestedOneWithoutRewardRedemptionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRewardRedemptionsInput, Prisma.UserUncheckedCreateWithoutRewardRedemptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRewardRedemptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRewardRedemptionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRewardRedemptionsInput, Prisma.UserUncheckedCreateWithoutRewardRedemptionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRewardRedemptionsInput;
    upsert?: Prisma.UserUpsertWithoutRewardRedemptionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRewardRedemptionsInput, Prisma.UserUpdateWithoutRewardRedemptionsInput>, Prisma.UserUncheckedUpdateWithoutRewardRedemptionsInput>;
};
export type UserCreateNestedOneWithoutLedgersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgersInput, Prisma.UserUncheckedCreateWithoutLedgersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLedgersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgersInput, Prisma.UserUncheckedCreateWithoutLedgersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgersInput;
    upsert?: Prisma.UserUpsertWithoutLedgersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLedgersInput, Prisma.UserUpdateWithoutLedgersInput>, Prisma.UserUncheckedUpdateWithoutLedgersInput>;
};
export type UserCreateNestedOneWithoutNotificationsReceivedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsReceivedInput, Prisma.UserUncheckedCreateWithoutNotificationsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutNotificationsSentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsSentInput, Prisma.UserUncheckedCreateWithoutNotificationsSentInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsSentInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsReceivedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsReceivedInput, Prisma.UserUncheckedCreateWithoutNotificationsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsReceivedInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsReceivedInput, Prisma.UserUpdateWithoutNotificationsReceivedInput>, Prisma.UserUncheckedUpdateWithoutNotificationsReceivedInput>;
};
export type UserUpdateOneWithoutNotificationsSentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsSentInput, Prisma.UserUncheckedCreateWithoutNotificationsSentInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsSentInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsSentInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsSentInput, Prisma.UserUpdateWithoutNotificationsSentInput>, Prisma.UserUncheckedUpdateWithoutNotificationsSentInput>;
};
export type UserCreateNestedOneWithoutMonthlyBudgetsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedCreateWithoutMonthlyBudgetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMonthlyBudgetsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMonthlyBudgetsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedCreateWithoutMonthlyBudgetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMonthlyBudgetsInput;
    upsert?: Prisma.UserUpsertWithoutMonthlyBudgetsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMonthlyBudgetsInput, Prisma.UserUpdateWithoutMonthlyBudgetsInput>, Prisma.UserUncheckedUpdateWithoutMonthlyBudgetsInput>;
};
export type UserCreateWithoutSentKudosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSentKudosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSentKudosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentKudosInput, Prisma.UserUncheckedCreateWithoutSentKudosInput>;
};
export type UserCreateWithoutReceivedKudosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReceivedKudosInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReceivedKudosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedKudosInput, Prisma.UserUncheckedCreateWithoutReceivedKudosInput>;
};
export type UserUpsertWithoutSentKudosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSentKudosInput, Prisma.UserUncheckedUpdateWithoutSentKudosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentKudosInput, Prisma.UserUncheckedCreateWithoutSentKudosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSentKudosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSentKudosInput, Prisma.UserUncheckedUpdateWithoutSentKudosInput>;
};
export type UserUpdateWithoutSentKudosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSentKudosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutReceivedKudosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReceivedKudosInput, Prisma.UserUncheckedUpdateWithoutReceivedKudosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedKudosInput, Prisma.UserUncheckedCreateWithoutReceivedKudosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReceivedKudosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReceivedKudosInput, Prisma.UserUncheckedUpdateWithoutReceivedKudosInput>;
};
export type UserUpdateWithoutReceivedKudosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReceivedKudosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReactionsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReactionsInput, Prisma.UserUncheckedCreateWithoutReactionsInput>;
};
export type UserUpsertWithoutReactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReactionsInput, Prisma.UserUncheckedUpdateWithoutReactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReactionsInput, Prisma.UserUncheckedCreateWithoutReactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReactionsInput, Prisma.UserUncheckedUpdateWithoutReactionsInput>;
};
export type UserUpdateWithoutReactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
};
export type UserUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutRewardRedemptionsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRewardRedemptionsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRewardRedemptionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRewardRedemptionsInput, Prisma.UserUncheckedCreateWithoutRewardRedemptionsInput>;
};
export type UserUpsertWithoutRewardRedemptionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRewardRedemptionsInput, Prisma.UserUncheckedUpdateWithoutRewardRedemptionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRewardRedemptionsInput, Prisma.UserUncheckedCreateWithoutRewardRedemptionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRewardRedemptionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRewardRedemptionsInput, Prisma.UserUncheckedUpdateWithoutRewardRedemptionsInput>;
};
export type UserUpdateWithoutRewardRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRewardRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLedgersInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLedgersInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLedgersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgersInput, Prisma.UserUncheckedCreateWithoutLedgersInput>;
};
export type UserUpsertWithoutLedgersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLedgersInput, Prisma.UserUncheckedUpdateWithoutLedgersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgersInput, Prisma.UserUncheckedCreateWithoutLedgersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLedgersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLedgersInput, Prisma.UserUncheckedUpdateWithoutLedgersInput>;
};
export type UserUpdateWithoutLedgersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLedgersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsReceivedInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsReceivedInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsReceivedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsReceivedInput, Prisma.UserUncheckedCreateWithoutNotificationsReceivedInput>;
};
export type UserCreateWithoutNotificationsSentInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsSentInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsSentInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsSentInput, Prisma.UserUncheckedCreateWithoutNotificationsSentInput>;
};
export type UserUpsertWithoutNotificationsReceivedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsReceivedInput, Prisma.UserUncheckedUpdateWithoutNotificationsReceivedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsReceivedInput, Prisma.UserUncheckedCreateWithoutNotificationsReceivedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsReceivedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsReceivedInput, Prisma.UserUncheckedUpdateWithoutNotificationsReceivedInput>;
};
export type UserUpdateWithoutNotificationsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutNotificationsSentInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsSentInput, Prisma.UserUncheckedUpdateWithoutNotificationsSentInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsSentInput, Prisma.UserUncheckedCreateWithoutNotificationsSentInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsSentInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsSentInput, Prisma.UserUncheckedUpdateWithoutNotificationsSentInput>;
};
export type UserUpdateWithoutNotificationsSentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsSentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
    monthlyBudgets?: Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMonthlyBudgetsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMonthlyBudgetsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    avatarUrl?: string | null;
    department?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sentKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutSenderInput;
    receivedKudos?: Prisma.KudoUncheckedCreateNestedManyWithoutReceiverInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutUserInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutUserInput;
    ledgers?: Prisma.PointLedgerUncheckedCreateNestedManyWithoutUserInput;
    notificationsReceived?: Prisma.NotificationUncheckedCreateNestedManyWithoutReceiverInput;
    notificationsSent?: Prisma.NotificationUncheckedCreateNestedManyWithoutActorInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMonthlyBudgetsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedCreateWithoutMonthlyBudgetsInput>;
};
export type UserUpsertWithoutMonthlyBudgetsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedUpdateWithoutMonthlyBudgetsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedCreateWithoutMonthlyBudgetsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMonthlyBudgetsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMonthlyBudgetsInput, Prisma.UserUncheckedUpdateWithoutMonthlyBudgetsInput>;
};
export type UserUpdateWithoutMonthlyBudgetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMonthlyBudgetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentKudos?: Prisma.KudoUncheckedUpdateManyWithoutSenderNestedInput;
    receivedKudos?: Prisma.KudoUncheckedUpdateManyWithoutReceiverNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutUserNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutUserNestedInput;
    ledgers?: Prisma.PointLedgerUncheckedUpdateManyWithoutUserNestedInput;
    notificationsReceived?: Prisma.NotificationUncheckedUpdateManyWithoutReceiverNestedInput;
    notificationsSent?: Prisma.NotificationUncheckedUpdateManyWithoutActorNestedInput;
    rewardRedemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    sentKudos: number;
    receivedKudos: number;
    comments: number;
    reactions: number;
    ledgers: number;
    notificationsReceived: number;
    notificationsSent: number;
    rewardRedemptions: number;
    monthlyBudgets: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sentKudos?: boolean | UserCountOutputTypeCountSentKudosArgs;
    receivedKudos?: boolean | UserCountOutputTypeCountReceivedKudosArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs;
    ledgers?: boolean | UserCountOutputTypeCountLedgersArgs;
    notificationsReceived?: boolean | UserCountOutputTypeCountNotificationsReceivedArgs;
    notificationsSent?: boolean | UserCountOutputTypeCountNotificationsSentArgs;
    rewardRedemptions?: boolean | UserCountOutputTypeCountRewardRedemptionsArgs;
    monthlyBudgets?: boolean | UserCountOutputTypeCountMonthlyBudgetsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountSentKudosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoWhereInput;
};
export type UserCountOutputTypeCountReceivedKudosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoWhereInput;
};
export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoCommentWhereInput;
};
export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoReactionWhereInput;
};
export type UserCountOutputTypeCountLedgersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointLedgerWhereInput;
};
export type UserCountOutputTypeCountNotificationsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountNotificationsSentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountRewardRedemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
};
export type UserCountOutputTypeCountMonthlyBudgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonthlyGivingBudgetWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    department?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sentKudos?: boolean | Prisma.User$sentKudosArgs<ExtArgs>;
    receivedKudos?: boolean | Prisma.User$receivedKudosArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    reactions?: boolean | Prisma.User$reactionsArgs<ExtArgs>;
    ledgers?: boolean | Prisma.User$ledgersArgs<ExtArgs>;
    notificationsReceived?: boolean | Prisma.User$notificationsReceivedArgs<ExtArgs>;
    notificationsSent?: boolean | Prisma.User$notificationsSentArgs<ExtArgs>;
    rewardRedemptions?: boolean | Prisma.User$rewardRedemptionsArgs<ExtArgs>;
    monthlyBudgets?: boolean | Prisma.User$monthlyBudgetsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    department?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    department?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    avatarUrl?: boolean;
    department?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "avatarUrl" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sentKudos?: boolean | Prisma.User$sentKudosArgs<ExtArgs>;
    receivedKudos?: boolean | Prisma.User$receivedKudosArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    reactions?: boolean | Prisma.User$reactionsArgs<ExtArgs>;
    ledgers?: boolean | Prisma.User$ledgersArgs<ExtArgs>;
    notificationsReceived?: boolean | Prisma.User$notificationsReceivedArgs<ExtArgs>;
    notificationsSent?: boolean | Prisma.User$notificationsSentArgs<ExtArgs>;
    rewardRedemptions?: boolean | Prisma.User$rewardRedemptionsArgs<ExtArgs>;
    monthlyBudgets?: boolean | Prisma.User$monthlyBudgetsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        sentKudos: Prisma.$KudoPayload<ExtArgs>[];
        receivedKudos: Prisma.$KudoPayload<ExtArgs>[];
        comments: Prisma.$KudoCommentPayload<ExtArgs>[];
        reactions: Prisma.$KudoReactionPayload<ExtArgs>[];
        ledgers: Prisma.$PointLedgerPayload<ExtArgs>[];
        notificationsReceived: Prisma.$NotificationPayload<ExtArgs>[];
        notificationsSent: Prisma.$NotificationPayload<ExtArgs>[];
        rewardRedemptions: Prisma.$RewardRedemptionPayload<ExtArgs>[];
        monthlyBudgets: Prisma.$MonthlyGivingBudgetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        fullName: string;
        avatarUrl: string | null;
        department: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sentKudos<T extends Prisma.User$sentKudosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sentKudosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receivedKudos<T extends Prisma.User$receivedKudosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$receivedKudosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.User$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reactions<T extends Prisma.User$reactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ledgers<T extends Prisma.User$ledgersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notificationsReceived<T extends Prisma.User$notificationsReceivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notificationsSent<T extends Prisma.User$notificationsSentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rewardRedemptions<T extends Prisma.User$rewardRedemptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rewardRedemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    monthlyBudgets<T extends Prisma.User$monthlyBudgetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$monthlyBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly department: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$sentKudosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where?: Prisma.KudoWhereInput;
    orderBy?: Prisma.KudoOrderByWithRelationInput | Prisma.KudoOrderByWithRelationInput[];
    cursor?: Prisma.KudoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoScalarFieldEnum | Prisma.KudoScalarFieldEnum[];
};
export type User$receivedKudosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where?: Prisma.KudoWhereInput;
    orderBy?: Prisma.KudoOrderByWithRelationInput | Prisma.KudoOrderByWithRelationInput[];
    cursor?: Prisma.KudoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoScalarFieldEnum | Prisma.KudoScalarFieldEnum[];
};
export type User$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    where?: Prisma.KudoCommentWhereInput;
    orderBy?: Prisma.KudoCommentOrderByWithRelationInput | Prisma.KudoCommentOrderByWithRelationInput[];
    cursor?: Prisma.KudoCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoCommentScalarFieldEnum | Prisma.KudoCommentScalarFieldEnum[];
};
export type User$reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    where?: Prisma.KudoReactionWhereInput;
    orderBy?: Prisma.KudoReactionOrderByWithRelationInput | Prisma.KudoReactionOrderByWithRelationInput[];
    cursor?: Prisma.KudoReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoReactionScalarFieldEnum | Prisma.KudoReactionScalarFieldEnum[];
};
export type User$ledgersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    where?: Prisma.PointLedgerWhereInput;
    orderBy?: Prisma.PointLedgerOrderByWithRelationInput | Prisma.PointLedgerOrderByWithRelationInput[];
    cursor?: Prisma.PointLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PointLedgerScalarFieldEnum | Prisma.PointLedgerScalarFieldEnum[];
};
export type User$notificationsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$notificationsSentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$rewardRedemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardRedemptionScalarFieldEnum | Prisma.RewardRedemptionScalarFieldEnum[];
};
export type User$monthlyBudgetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    orderBy?: Prisma.MonthlyGivingBudgetOrderByWithRelationInput | Prisma.MonthlyGivingBudgetOrderByWithRelationInput[];
    cursor?: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MonthlyGivingBudgetScalarFieldEnum | Prisma.MonthlyGivingBudgetScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
