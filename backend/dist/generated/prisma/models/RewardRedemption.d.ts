import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type RewardRedemptionModel = runtime.Types.Result.DefaultSelection<Prisma.$RewardRedemptionPayload>;
export type AggregateRewardRedemption = {
    _count: RewardRedemptionCountAggregateOutputType | null;
    _avg: RewardRedemptionAvgAggregateOutputType | null;
    _sum: RewardRedemptionSumAggregateOutputType | null;
    _min: RewardRedemptionMinAggregateOutputType | null;
    _max: RewardRedemptionMaxAggregateOutputType | null;
};
export type RewardRedemptionAvgAggregateOutputType = {
    pointsSpent: number | null;
};
export type RewardRedemptionSumAggregateOutputType = {
    pointsSpent: number | null;
};
export type RewardRedemptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    rewardId: string | null;
    pointsSpent: number | null;
    status: $Enums.RedemptionStatus | null;
    redeemedAt: Date | null;
};
export type RewardRedemptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    rewardId: string | null;
    pointsSpent: number | null;
    status: $Enums.RedemptionStatus | null;
    redeemedAt: Date | null;
};
export type RewardRedemptionCountAggregateOutputType = {
    id: number;
    userId: number;
    rewardId: number;
    pointsSpent: number;
    status: number;
    redeemedAt: number;
    _all: number;
};
export type RewardRedemptionAvgAggregateInputType = {
    pointsSpent?: true;
};
export type RewardRedemptionSumAggregateInputType = {
    pointsSpent?: true;
};
export type RewardRedemptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    redeemedAt?: true;
};
export type RewardRedemptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    redeemedAt?: true;
};
export type RewardRedemptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    redeemedAt?: true;
    _all?: true;
};
export type RewardRedemptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewardRedemptionCountAggregateInputType;
    _avg?: RewardRedemptionAvgAggregateInputType;
    _sum?: RewardRedemptionSumAggregateInputType;
    _min?: RewardRedemptionMinAggregateInputType;
    _max?: RewardRedemptionMaxAggregateInputType;
};
export type GetRewardRedemptionAggregateType<T extends RewardRedemptionAggregateArgs> = {
    [P in keyof T & keyof AggregateRewardRedemption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewardRedemption[P]> : Prisma.GetScalarType<T[P], AggregateRewardRedemption[P]>;
};
export type RewardRedemptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithAggregationInput | Prisma.RewardRedemptionOrderByWithAggregationInput[];
    by: Prisma.RewardRedemptionScalarFieldEnum[] | Prisma.RewardRedemptionScalarFieldEnum;
    having?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewardRedemptionCountAggregateInputType | true;
    _avg?: RewardRedemptionAvgAggregateInputType;
    _sum?: RewardRedemptionSumAggregateInputType;
    _min?: RewardRedemptionMinAggregateInputType;
    _max?: RewardRedemptionMaxAggregateInputType;
};
export type RewardRedemptionGroupByOutputType = {
    id: string;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    status: $Enums.RedemptionStatus;
    redeemedAt: Date;
    _count: RewardRedemptionCountAggregateOutputType | null;
    _avg: RewardRedemptionAvgAggregateOutputType | null;
    _sum: RewardRedemptionSumAggregateOutputType | null;
    _min: RewardRedemptionMinAggregateOutputType | null;
    _max: RewardRedemptionMaxAggregateOutputType | null;
};
export type GetRewardRedemptionGroupByPayload<T extends RewardRedemptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewardRedemptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewardRedemptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>;
}>>;
export type RewardRedemptionWhereInput = {
    AND?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    OR?: Prisma.RewardRedemptionWhereInput[];
    NOT?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    id?: Prisma.StringFilter<"RewardRedemption"> | string;
    userId?: Prisma.StringFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.StringFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reward?: Prisma.XOR<Prisma.RewardCatalogScalarRelationFilter, Prisma.RewardCatalogWhereInput>;
};
export type RewardRedemptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    redeemedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    reward?: Prisma.RewardCatalogOrderByWithRelationInput;
};
export type RewardRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    OR?: Prisma.RewardRedemptionWhereInput[];
    NOT?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    userId?: Prisma.StringFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.StringFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reward?: Prisma.XOR<Prisma.RewardCatalogScalarRelationFilter, Prisma.RewardCatalogWhereInput>;
}, "id">;
export type RewardRedemptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    redeemedAt?: Prisma.SortOrder;
    _count?: Prisma.RewardRedemptionCountOrderByAggregateInput;
    _avg?: Prisma.RewardRedemptionAvgOrderByAggregateInput;
    _max?: Prisma.RewardRedemptionMaxOrderByAggregateInput;
    _min?: Prisma.RewardRedemptionMinOrderByAggregateInput;
    _sum?: Prisma.RewardRedemptionSumOrderByAggregateInput;
};
export type RewardRedemptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput | Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput | Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RewardRedemption"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.StringWithAggregatesFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntWithAggregatesFilter<"RewardRedemption"> | number;
    status?: Prisma.EnumRedemptionStatusWithAggregatesFilter<"RewardRedemption"> | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string;
};
export type RewardRedemptionCreateInput = {
    id?: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRewardRedemptionsInput;
    reward: Prisma.RewardCatalogCreateNestedOneWithoutRedemptionsInput;
};
export type RewardRedemptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRewardRedemptionsNestedInput;
    reward?: Prisma.RewardCatalogUpdateOneRequiredWithoutRedemptionsNestedInput;
};
export type RewardRedemptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionCreateManyInput = {
    id?: string;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionListRelationFilter = {
    every?: Prisma.RewardRedemptionWhereInput;
    some?: Prisma.RewardRedemptionWhereInput;
    none?: Prisma.RewardRedemptionWhereInput;
};
export type RewardRedemptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RewardRedemptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    redeemedAt?: Prisma.SortOrder;
};
export type RewardRedemptionAvgOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RewardRedemptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    redeemedAt?: Prisma.SortOrder;
};
export type RewardRedemptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    redeemedAt?: Prisma.SortOrder;
};
export type RewardRedemptionSumOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RewardRedemptionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput> | Prisma.RewardRedemptionCreateWithoutUserInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutUserInput | Prisma.RewardRedemptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RewardRedemptionCreateManyUserInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput> | Prisma.RewardRedemptionCreateWithoutUserInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutUserInput | Prisma.RewardRedemptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RewardRedemptionCreateManyUserInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput> | Prisma.RewardRedemptionCreateWithoutUserInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutUserInput | Prisma.RewardRedemptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutUserInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RewardRedemptionCreateManyUserInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutUserInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutUserInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput> | Prisma.RewardRedemptionCreateWithoutUserInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutUserInput | Prisma.RewardRedemptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutUserInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RewardRedemptionCreateManyUserInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutUserInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutUserInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionCreateNestedManyWithoutRewardInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput> | Prisma.RewardRedemptionCreateWithoutRewardInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput | Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput[];
    createMany?: Prisma.RewardRedemptionCreateManyRewardInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput> | Prisma.RewardRedemptionCreateWithoutRewardInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput | Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput[];
    createMany?: Prisma.RewardRedemptionCreateManyRewardInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUpdateManyWithoutRewardNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput> | Prisma.RewardRedemptionCreateWithoutRewardInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput | Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[];
    createMany?: Prisma.RewardRedemptionCreateManyRewardInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutRewardInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutRewardInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput> | Prisma.RewardRedemptionCreateWithoutRewardInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput | Prisma.RewardRedemptionCreateOrConnectWithoutRewardInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[];
    createMany?: Prisma.RewardRedemptionCreateManyRewardInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutRewardInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutRewardInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type EnumRedemptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.RedemptionStatus;
};
export type RewardRedemptionCreateWithoutUserInput = {
    id?: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
    reward: Prisma.RewardCatalogCreateNestedOneWithoutRedemptionsInput;
};
export type RewardRedemptionUncheckedCreateWithoutUserInput = {
    id?: string;
    rewardId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionCreateOrConnectWithoutUserInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput>;
};
export type RewardRedemptionCreateManyUserInputEnvelope = {
    data: Prisma.RewardRedemptionCreateManyUserInput | Prisma.RewardRedemptionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutUserInput, Prisma.RewardRedemptionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutUserInput, Prisma.RewardRedemptionUncheckedCreateWithoutUserInput>;
};
export type RewardRedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutUserInput, Prisma.RewardRedemptionUncheckedUpdateWithoutUserInput>;
};
export type RewardRedemptionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RewardRedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyWithoutUserInput>;
};
export type RewardRedemptionScalarWhereInput = {
    AND?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
    OR?: Prisma.RewardRedemptionScalarWhereInput[];
    NOT?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
    id?: Prisma.StringFilter<"RewardRedemption"> | string;
    userId?: Prisma.StringFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.StringFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
};
export type RewardRedemptionCreateWithoutRewardInput = {
    id?: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRewardRedemptionsInput;
};
export type RewardRedemptionUncheckedCreateWithoutRewardInput = {
    id?: string;
    userId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionCreateOrConnectWithoutRewardInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput>;
};
export type RewardRedemptionCreateManyRewardInputEnvelope = {
    data: Prisma.RewardRedemptionCreateManyRewardInput | Prisma.RewardRedemptionCreateManyRewardInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutRewardInput, Prisma.RewardRedemptionUncheckedUpdateWithoutRewardInput>;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutRewardInput, Prisma.RewardRedemptionUncheckedCreateWithoutRewardInput>;
};
export type RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutRewardInput, Prisma.RewardRedemptionUncheckedUpdateWithoutRewardInput>;
};
export type RewardRedemptionUpdateManyWithWhereWithoutRewardInput = {
    where: Prisma.RewardRedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyWithoutRewardInput>;
};
export type RewardRedemptionCreateManyUserInput = {
    id?: string;
    rewardId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reward?: Prisma.RewardCatalogUpdateOneRequiredWithoutRedemptionsNestedInput;
};
export type RewardRedemptionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionCreateManyRewardInput = {
    id?: string;
    userId: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    redeemedAt?: Date | string;
};
export type RewardRedemptionUpdateWithoutRewardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRewardRedemptionsNestedInput;
};
export type RewardRedemptionUncheckedUpdateWithoutRewardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyWithoutRewardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    redeemedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    redeemedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    redeemedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    redeemedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    redeemedAt?: boolean;
};
export type RewardRedemptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "rewardId" | "pointsSpent" | "status" | "redeemedAt", ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type RewardRedemptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reward?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type $RewardRedemptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RewardRedemption";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        reward: Prisma.$RewardCatalogPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        rewardId: string;
        pointsSpent: number;
        status: $Enums.RedemptionStatus;
        redeemedAt: Date;
    }, ExtArgs["result"]["rewardRedemption"]>;
    composites: {};
};
export type RewardRedemptionGetPayload<S extends boolean | null | undefined | RewardRedemptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload, S>;
export type RewardRedemptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewardRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewardRedemptionCountAggregateInputType | true;
};
export interface RewardRedemptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RewardRedemption'];
        meta: {
            name: 'RewardRedemption';
        };
    };
    findUnique<T extends RewardRedemptionFindUniqueArgs>(args: Prisma.SelectSubset<T, RewardRedemptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewardRedemptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewardRedemptionFindFirstArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewardRedemptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewardRedemptionFindManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewardRedemptionCreateArgs>(args: Prisma.SelectSubset<T, RewardRedemptionCreateArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewardRedemptionCreateManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewardRedemptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewardRedemptionDeleteArgs>(args: Prisma.SelectSubset<T, RewardRedemptionDeleteArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewardRedemptionUpdateArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewardRedemptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewardRedemptionUpdateManyArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewardRedemptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewardRedemptionUpsertArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpsertArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewardRedemptionCountArgs>(args?: Prisma.Subset<T, RewardRedemptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewardRedemptionCountAggregateOutputType> : number>;
    aggregate<T extends RewardRedemptionAggregateArgs>(args: Prisma.Subset<T, RewardRedemptionAggregateArgs>): Prisma.PrismaPromise<GetRewardRedemptionAggregateType<T>>;
    groupBy<T extends RewardRedemptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewardRedemptionGroupByArgs['orderBy'];
    } : {
        orderBy?: RewardRedemptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewardRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewardRedemptionFieldRefs;
}
export interface Prisma__RewardRedemptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reward<T extends Prisma.RewardCatalogDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RewardCatalogDefaultArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewardRedemptionFieldRefs {
    readonly id: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly userId: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly rewardId: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly pointsSpent: Prisma.FieldRef<"RewardRedemption", 'Int'>;
    readonly status: Prisma.FieldRef<"RewardRedemption", 'RedemptionStatus'>;
    readonly redeemedAt: Prisma.FieldRef<"RewardRedemption", 'DateTime'>;
}
export type RewardRedemptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RewardRedemptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RewardRedemptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RewardRedemptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionCreateInput, Prisma.RewardRedemptionUncheckedCreateInput>;
};
export type RewardRedemptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewardRedemptionCreateManyInput | Prisma.RewardRedemptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    data: Prisma.RewardRedemptionCreateManyInput | Prisma.RewardRedemptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RewardRedemptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RewardRedemptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateInput, Prisma.RewardRedemptionUncheckedUpdateInput>;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
};
export type RewardRedemptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
    include?: Prisma.RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RewardRedemptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateInput, Prisma.RewardRedemptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateInput, Prisma.RewardRedemptionUncheckedUpdateInput>;
};
export type RewardRedemptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
};
export type RewardRedemptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
};
