import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MonthlyGivingBudgetModel = runtime.Types.Result.DefaultSelection<Prisma.$MonthlyGivingBudgetPayload>;
export type AggregateMonthlyGivingBudget = {
    _count: MonthlyGivingBudgetCountAggregateOutputType | null;
    _avg: MonthlyGivingBudgetAvgAggregateOutputType | null;
    _sum: MonthlyGivingBudgetSumAggregateOutputType | null;
    _min: MonthlyGivingBudgetMinAggregateOutputType | null;
    _max: MonthlyGivingBudgetMaxAggregateOutputType | null;
};
export type MonthlyGivingBudgetAvgAggregateOutputType = {
    totalBudget: number | null;
    usedBudget: number | null;
    remainingBudget: number | null;
};
export type MonthlyGivingBudgetSumAggregateOutputType = {
    totalBudget: number | null;
    usedBudget: number | null;
    remainingBudget: number | null;
};
export type MonthlyGivingBudgetMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    month: string | null;
    totalBudget: number | null;
    usedBudget: number | null;
    remainingBudget: number | null;
    resetAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MonthlyGivingBudgetMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    month: string | null;
    totalBudget: number | null;
    usedBudget: number | null;
    remainingBudget: number | null;
    resetAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MonthlyGivingBudgetCountAggregateOutputType = {
    id: number;
    userId: number;
    month: number;
    totalBudget: number;
    usedBudget: number;
    remainingBudget: number;
    resetAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MonthlyGivingBudgetAvgAggregateInputType = {
    totalBudget?: true;
    usedBudget?: true;
    remainingBudget?: true;
};
export type MonthlyGivingBudgetSumAggregateInputType = {
    totalBudget?: true;
    usedBudget?: true;
    remainingBudget?: true;
};
export type MonthlyGivingBudgetMinAggregateInputType = {
    id?: true;
    userId?: true;
    month?: true;
    totalBudget?: true;
    usedBudget?: true;
    remainingBudget?: true;
    resetAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MonthlyGivingBudgetMaxAggregateInputType = {
    id?: true;
    userId?: true;
    month?: true;
    totalBudget?: true;
    usedBudget?: true;
    remainingBudget?: true;
    resetAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MonthlyGivingBudgetCountAggregateInputType = {
    id?: true;
    userId?: true;
    month?: true;
    totalBudget?: true;
    usedBudget?: true;
    remainingBudget?: true;
    resetAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MonthlyGivingBudgetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    orderBy?: Prisma.MonthlyGivingBudgetOrderByWithRelationInput | Prisma.MonthlyGivingBudgetOrderByWithRelationInput[];
    cursor?: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MonthlyGivingBudgetCountAggregateInputType;
    _avg?: MonthlyGivingBudgetAvgAggregateInputType;
    _sum?: MonthlyGivingBudgetSumAggregateInputType;
    _min?: MonthlyGivingBudgetMinAggregateInputType;
    _max?: MonthlyGivingBudgetMaxAggregateInputType;
};
export type GetMonthlyGivingBudgetAggregateType<T extends MonthlyGivingBudgetAggregateArgs> = {
    [P in keyof T & keyof AggregateMonthlyGivingBudget]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMonthlyGivingBudget[P]> : Prisma.GetScalarType<T[P], AggregateMonthlyGivingBudget[P]>;
};
export type MonthlyGivingBudgetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    orderBy?: Prisma.MonthlyGivingBudgetOrderByWithAggregationInput | Prisma.MonthlyGivingBudgetOrderByWithAggregationInput[];
    by: Prisma.MonthlyGivingBudgetScalarFieldEnum[] | Prisma.MonthlyGivingBudgetScalarFieldEnum;
    having?: Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MonthlyGivingBudgetCountAggregateInputType | true;
    _avg?: MonthlyGivingBudgetAvgAggregateInputType;
    _sum?: MonthlyGivingBudgetSumAggregateInputType;
    _min?: MonthlyGivingBudgetMinAggregateInputType;
    _max?: MonthlyGivingBudgetMaxAggregateInputType;
};
export type MonthlyGivingBudgetGroupByOutputType = {
    id: string;
    userId: string;
    month: string;
    totalBudget: number;
    usedBudget: number;
    remainingBudget: number;
    resetAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MonthlyGivingBudgetCountAggregateOutputType | null;
    _avg: MonthlyGivingBudgetAvgAggregateOutputType | null;
    _sum: MonthlyGivingBudgetSumAggregateOutputType | null;
    _min: MonthlyGivingBudgetMinAggregateOutputType | null;
    _max: MonthlyGivingBudgetMaxAggregateOutputType | null;
};
export type GetMonthlyGivingBudgetGroupByPayload<T extends MonthlyGivingBudgetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MonthlyGivingBudgetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MonthlyGivingBudgetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MonthlyGivingBudgetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MonthlyGivingBudgetGroupByOutputType[P]>;
}>>;
export type MonthlyGivingBudgetWhereInput = {
    AND?: Prisma.MonthlyGivingBudgetWhereInput | Prisma.MonthlyGivingBudgetWhereInput[];
    OR?: Prisma.MonthlyGivingBudgetWhereInput[];
    NOT?: Prisma.MonthlyGivingBudgetWhereInput | Prisma.MonthlyGivingBudgetWhereInput[];
    id?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    userId?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    month?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    totalBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    usedBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    remainingBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    resetAt?: Prisma.DateTimeNullableFilter<"MonthlyGivingBudget"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MonthlyGivingBudgetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    resetAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MonthlyGivingBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_month?: Prisma.MonthlyGivingBudgetUserIdMonthCompoundUniqueInput;
    AND?: Prisma.MonthlyGivingBudgetWhereInput | Prisma.MonthlyGivingBudgetWhereInput[];
    OR?: Prisma.MonthlyGivingBudgetWhereInput[];
    NOT?: Prisma.MonthlyGivingBudgetWhereInput | Prisma.MonthlyGivingBudgetWhereInput[];
    userId?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    month?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    totalBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    usedBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    remainingBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    resetAt?: Prisma.DateTimeNullableFilter<"MonthlyGivingBudget"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_month">;
export type MonthlyGivingBudgetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    resetAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MonthlyGivingBudgetCountOrderByAggregateInput;
    _avg?: Prisma.MonthlyGivingBudgetAvgOrderByAggregateInput;
    _max?: Prisma.MonthlyGivingBudgetMaxOrderByAggregateInput;
    _min?: Prisma.MonthlyGivingBudgetMinOrderByAggregateInput;
    _sum?: Prisma.MonthlyGivingBudgetSumOrderByAggregateInput;
};
export type MonthlyGivingBudgetScalarWhereWithAggregatesInput = {
    AND?: Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput | Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput[];
    OR?: Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput | Prisma.MonthlyGivingBudgetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MonthlyGivingBudget"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"MonthlyGivingBudget"> | string;
    month?: Prisma.StringWithAggregatesFilter<"MonthlyGivingBudget"> | string;
    totalBudget?: Prisma.IntWithAggregatesFilter<"MonthlyGivingBudget"> | number;
    usedBudget?: Prisma.IntWithAggregatesFilter<"MonthlyGivingBudget"> | number;
    remainingBudget?: Prisma.IntWithAggregatesFilter<"MonthlyGivingBudget"> | number;
    resetAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MonthlyGivingBudget"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MonthlyGivingBudget"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MonthlyGivingBudget"> | Date | string;
};
export type MonthlyGivingBudgetCreateInput = {
    id?: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMonthlyBudgetsInput;
};
export type MonthlyGivingBudgetUncheckedCreateInput = {
    id?: string;
    userId: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MonthlyGivingBudgetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMonthlyBudgetsNestedInput;
};
export type MonthlyGivingBudgetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetCreateManyInput = {
    id?: string;
    userId: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MonthlyGivingBudgetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetListRelationFilter = {
    every?: Prisma.MonthlyGivingBudgetWhereInput;
    some?: Prisma.MonthlyGivingBudgetWhereInput;
    none?: Prisma.MonthlyGivingBudgetWhereInput;
};
export type MonthlyGivingBudgetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetUserIdMonthCompoundUniqueInput = {
    userId: string;
    month: string;
};
export type MonthlyGivingBudgetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    resetAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetAvgOrderByAggregateInput = {
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    resetAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
    resetAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetSumOrderByAggregateInput = {
    totalBudget?: Prisma.SortOrder;
    usedBudget?: Prisma.SortOrder;
    remainingBudget?: Prisma.SortOrder;
};
export type MonthlyGivingBudgetCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput> | Prisma.MonthlyGivingBudgetCreateWithoutUserInput[] | Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput | Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MonthlyGivingBudgetCreateManyUserInputEnvelope;
    connect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
};
export type MonthlyGivingBudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput> | Prisma.MonthlyGivingBudgetCreateWithoutUserInput[] | Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput | Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MonthlyGivingBudgetCreateManyUserInputEnvelope;
    connect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
};
export type MonthlyGivingBudgetUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput> | Prisma.MonthlyGivingBudgetCreateWithoutUserInput[] | Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput | Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MonthlyGivingBudgetUpsertWithWhereUniqueWithoutUserInput | Prisma.MonthlyGivingBudgetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MonthlyGivingBudgetCreateManyUserInputEnvelope;
    set?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    disconnect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    delete?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    connect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    update?: Prisma.MonthlyGivingBudgetUpdateWithWhereUniqueWithoutUserInput | Prisma.MonthlyGivingBudgetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MonthlyGivingBudgetUpdateManyWithWhereWithoutUserInput | Prisma.MonthlyGivingBudgetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MonthlyGivingBudgetScalarWhereInput | Prisma.MonthlyGivingBudgetScalarWhereInput[];
};
export type MonthlyGivingBudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput> | Prisma.MonthlyGivingBudgetCreateWithoutUserInput[] | Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput | Prisma.MonthlyGivingBudgetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MonthlyGivingBudgetUpsertWithWhereUniqueWithoutUserInput | Prisma.MonthlyGivingBudgetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MonthlyGivingBudgetCreateManyUserInputEnvelope;
    set?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    disconnect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    delete?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    connect?: Prisma.MonthlyGivingBudgetWhereUniqueInput | Prisma.MonthlyGivingBudgetWhereUniqueInput[];
    update?: Prisma.MonthlyGivingBudgetUpdateWithWhereUniqueWithoutUserInput | Prisma.MonthlyGivingBudgetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MonthlyGivingBudgetUpdateManyWithWhereWithoutUserInput | Prisma.MonthlyGivingBudgetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MonthlyGivingBudgetScalarWhereInput | Prisma.MonthlyGivingBudgetScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type MonthlyGivingBudgetCreateWithoutUserInput = {
    id?: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MonthlyGivingBudgetUncheckedCreateWithoutUserInput = {
    id?: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MonthlyGivingBudgetCreateOrConnectWithoutUserInput = {
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput>;
};
export type MonthlyGivingBudgetCreateManyUserInputEnvelope = {
    data: Prisma.MonthlyGivingBudgetCreateManyUserInput | Prisma.MonthlyGivingBudgetCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MonthlyGivingBudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    update: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedCreateWithoutUserInput>;
};
export type MonthlyGivingBudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateWithoutUserInput, Prisma.MonthlyGivingBudgetUncheckedUpdateWithoutUserInput>;
};
export type MonthlyGivingBudgetUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MonthlyGivingBudgetScalarWhereInput;
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateManyMutationInput, Prisma.MonthlyGivingBudgetUncheckedUpdateManyWithoutUserInput>;
};
export type MonthlyGivingBudgetScalarWhereInput = {
    AND?: Prisma.MonthlyGivingBudgetScalarWhereInput | Prisma.MonthlyGivingBudgetScalarWhereInput[];
    OR?: Prisma.MonthlyGivingBudgetScalarWhereInput[];
    NOT?: Prisma.MonthlyGivingBudgetScalarWhereInput | Prisma.MonthlyGivingBudgetScalarWhereInput[];
    id?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    userId?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    month?: Prisma.StringFilter<"MonthlyGivingBudget"> | string;
    totalBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    usedBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    remainingBudget?: Prisma.IntFilter<"MonthlyGivingBudget"> | number;
    resetAt?: Prisma.DateTimeNullableFilter<"MonthlyGivingBudget"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MonthlyGivingBudget"> | Date | string;
};
export type MonthlyGivingBudgetCreateManyUserInput = {
    id?: string;
    month: string;
    totalBudget?: number;
    usedBudget?: number;
    remainingBudget?: number;
    resetAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MonthlyGivingBudgetUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    month?: Prisma.StringFieldUpdateOperationsInput | string;
    totalBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    usedBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    remainingBudget?: Prisma.IntFieldUpdateOperationsInput | number;
    resetAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyGivingBudgetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    month?: boolean;
    totalBudget?: boolean;
    usedBudget?: boolean;
    remainingBudget?: boolean;
    resetAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monthlyGivingBudget"]>;
export type MonthlyGivingBudgetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    month?: boolean;
    totalBudget?: boolean;
    usedBudget?: boolean;
    remainingBudget?: boolean;
    resetAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monthlyGivingBudget"]>;
export type MonthlyGivingBudgetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    month?: boolean;
    totalBudget?: boolean;
    usedBudget?: boolean;
    remainingBudget?: boolean;
    resetAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monthlyGivingBudget"]>;
export type MonthlyGivingBudgetSelectScalar = {
    id?: boolean;
    userId?: boolean;
    month?: boolean;
    totalBudget?: boolean;
    usedBudget?: boolean;
    remainingBudget?: boolean;
    resetAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MonthlyGivingBudgetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "month" | "totalBudget" | "usedBudget" | "remainingBudget" | "resetAt" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyGivingBudget"]>;
export type MonthlyGivingBudgetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MonthlyGivingBudgetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MonthlyGivingBudgetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MonthlyGivingBudgetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MonthlyGivingBudget";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        month: string;
        totalBudget: number;
        usedBudget: number;
        remainingBudget: number;
        resetAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["monthlyGivingBudget"]>;
    composites: {};
};
export type MonthlyGivingBudgetGetPayload<S extends boolean | null | undefined | MonthlyGivingBudgetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload, S>;
export type MonthlyGivingBudgetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MonthlyGivingBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MonthlyGivingBudgetCountAggregateInputType | true;
};
export interface MonthlyGivingBudgetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MonthlyGivingBudget'];
        meta: {
            name: 'MonthlyGivingBudget';
        };
    };
    findUnique<T extends MonthlyGivingBudgetFindUniqueArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MonthlyGivingBudgetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MonthlyGivingBudgetFindFirstArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetFindFirstArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MonthlyGivingBudgetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MonthlyGivingBudgetFindManyArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MonthlyGivingBudgetCreateArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetCreateArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MonthlyGivingBudgetCreateManyArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MonthlyGivingBudgetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MonthlyGivingBudgetDeleteArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetDeleteArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MonthlyGivingBudgetUpdateArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetUpdateArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MonthlyGivingBudgetDeleteManyArgs>(args?: Prisma.SelectSubset<T, MonthlyGivingBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MonthlyGivingBudgetUpdateManyArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MonthlyGivingBudgetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MonthlyGivingBudgetUpsertArgs>(args: Prisma.SelectSubset<T, MonthlyGivingBudgetUpsertArgs<ExtArgs>>): Prisma.Prisma__MonthlyGivingBudgetClient<runtime.Types.Result.GetResult<Prisma.$MonthlyGivingBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MonthlyGivingBudgetCountArgs>(args?: Prisma.Subset<T, MonthlyGivingBudgetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MonthlyGivingBudgetCountAggregateOutputType> : number>;
    aggregate<T extends MonthlyGivingBudgetAggregateArgs>(args: Prisma.Subset<T, MonthlyGivingBudgetAggregateArgs>): Prisma.PrismaPromise<GetMonthlyGivingBudgetAggregateType<T>>;
    groupBy<T extends MonthlyGivingBudgetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MonthlyGivingBudgetGroupByArgs['orderBy'];
    } : {
        orderBy?: MonthlyGivingBudgetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MonthlyGivingBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyGivingBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MonthlyGivingBudgetFieldRefs;
}
export interface Prisma__MonthlyGivingBudgetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MonthlyGivingBudgetFieldRefs {
    readonly id: Prisma.FieldRef<"MonthlyGivingBudget", 'String'>;
    readonly userId: Prisma.FieldRef<"MonthlyGivingBudget", 'String'>;
    readonly month: Prisma.FieldRef<"MonthlyGivingBudget", 'String'>;
    readonly totalBudget: Prisma.FieldRef<"MonthlyGivingBudget", 'Int'>;
    readonly usedBudget: Prisma.FieldRef<"MonthlyGivingBudget", 'Int'>;
    readonly remainingBudget: Prisma.FieldRef<"MonthlyGivingBudget", 'Int'>;
    readonly resetAt: Prisma.FieldRef<"MonthlyGivingBudget", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MonthlyGivingBudget", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MonthlyGivingBudget", 'DateTime'>;
}
export type MonthlyGivingBudgetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
};
export type MonthlyGivingBudgetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
};
export type MonthlyGivingBudgetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonthlyGivingBudgetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonthlyGivingBudgetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonthlyGivingBudgetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateInput, Prisma.MonthlyGivingBudgetUncheckedCreateInput>;
};
export type MonthlyGivingBudgetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MonthlyGivingBudgetCreateManyInput | Prisma.MonthlyGivingBudgetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MonthlyGivingBudgetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    data: Prisma.MonthlyGivingBudgetCreateManyInput | Prisma.MonthlyGivingBudgetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MonthlyGivingBudgetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MonthlyGivingBudgetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateInput, Prisma.MonthlyGivingBudgetUncheckedUpdateInput>;
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
};
export type MonthlyGivingBudgetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateManyMutationInput, Prisma.MonthlyGivingBudgetUncheckedUpdateManyInput>;
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    limit?: number;
};
export type MonthlyGivingBudgetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateManyMutationInput, Prisma.MonthlyGivingBudgetUncheckedUpdateManyInput>;
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    limit?: number;
    include?: Prisma.MonthlyGivingBudgetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MonthlyGivingBudgetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.MonthlyGivingBudgetCreateInput, Prisma.MonthlyGivingBudgetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MonthlyGivingBudgetUpdateInput, Prisma.MonthlyGivingBudgetUncheckedUpdateInput>;
};
export type MonthlyGivingBudgetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
    where: Prisma.MonthlyGivingBudgetWhereUniqueInput;
};
export type MonthlyGivingBudgetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonthlyGivingBudgetWhereInput;
    limit?: number;
};
export type MonthlyGivingBudgetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonthlyGivingBudgetSelect<ExtArgs> | null;
    omit?: Prisma.MonthlyGivingBudgetOmit<ExtArgs> | null;
    include?: Prisma.MonthlyGivingBudgetInclude<ExtArgs> | null;
};
