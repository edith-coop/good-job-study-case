import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PointLedgerModel = runtime.Types.Result.DefaultSelection<Prisma.$PointLedgerPayload>;
export type AggregatePointLedger = {
    _count: PointLedgerCountAggregateOutputType | null;
    _avg: PointLedgerAvgAggregateOutputType | null;
    _sum: PointLedgerSumAggregateOutputType | null;
    _min: PointLedgerMinAggregateOutputType | null;
    _max: PointLedgerMaxAggregateOutputType | null;
};
export type PointLedgerAvgAggregateOutputType = {
    amount: number | null;
};
export type PointLedgerSumAggregateOutputType = {
    amount: number | null;
};
export type PointLedgerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.LedgerType | null;
    amount: number | null;
    referenceType: $Enums.ReferenceType | null;
    referenceId: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type PointLedgerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: $Enums.LedgerType | null;
    amount: number | null;
    referenceType: $Enums.ReferenceType | null;
    referenceId: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type PointLedgerCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    amount: number;
    referenceType: number;
    referenceId: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type PointLedgerAvgAggregateInputType = {
    amount?: true;
};
export type PointLedgerSumAggregateInputType = {
    amount?: true;
};
export type PointLedgerMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    createdAt?: true;
};
export type PointLedgerMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    createdAt?: true;
};
export type PointLedgerCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    amount?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type PointLedgerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointLedgerWhereInput;
    orderBy?: Prisma.PointLedgerOrderByWithRelationInput | Prisma.PointLedgerOrderByWithRelationInput[];
    cursor?: Prisma.PointLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PointLedgerCountAggregateInputType;
    _avg?: PointLedgerAvgAggregateInputType;
    _sum?: PointLedgerSumAggregateInputType;
    _min?: PointLedgerMinAggregateInputType;
    _max?: PointLedgerMaxAggregateInputType;
};
export type GetPointLedgerAggregateType<T extends PointLedgerAggregateArgs> = {
    [P in keyof T & keyof AggregatePointLedger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePointLedger[P]> : Prisma.GetScalarType<T[P], AggregatePointLedger[P]>;
};
export type PointLedgerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointLedgerWhereInput;
    orderBy?: Prisma.PointLedgerOrderByWithAggregationInput | Prisma.PointLedgerOrderByWithAggregationInput[];
    by: Prisma.PointLedgerScalarFieldEnum[] | Prisma.PointLedgerScalarFieldEnum;
    having?: Prisma.PointLedgerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PointLedgerCountAggregateInputType | true;
    _avg?: PointLedgerAvgAggregateInputType;
    _sum?: PointLedgerSumAggregateInputType;
    _min?: PointLedgerMinAggregateInputType;
    _max?: PointLedgerMaxAggregateInputType;
};
export type PointLedgerGroupByOutputType = {
    id: string;
    userId: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description: string | null;
    createdAt: Date;
    _count: PointLedgerCountAggregateOutputType | null;
    _avg: PointLedgerAvgAggregateOutputType | null;
    _sum: PointLedgerSumAggregateOutputType | null;
    _min: PointLedgerMinAggregateOutputType | null;
    _max: PointLedgerMaxAggregateOutputType | null;
};
export type GetPointLedgerGroupByPayload<T extends PointLedgerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PointLedgerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PointLedgerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PointLedgerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PointLedgerGroupByOutputType[P]>;
}>>;
export type PointLedgerWhereInput = {
    AND?: Prisma.PointLedgerWhereInput | Prisma.PointLedgerWhereInput[];
    OR?: Prisma.PointLedgerWhereInput[];
    NOT?: Prisma.PointLedgerWhereInput | Prisma.PointLedgerWhereInput[];
    id?: Prisma.StringFilter<"PointLedger"> | string;
    userId?: Prisma.StringFilter<"PointLedger"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"PointLedger"> | $Enums.LedgerType;
    amount?: Prisma.IntFilter<"PointLedger"> | number;
    referenceType?: Prisma.EnumReferenceTypeFilter<"PointLedger"> | $Enums.ReferenceType;
    referenceId?: Prisma.StringFilter<"PointLedger"> | string;
    description?: Prisma.StringNullableFilter<"PointLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointLedger"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PointLedgerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PointLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PointLedgerWhereInput | Prisma.PointLedgerWhereInput[];
    OR?: Prisma.PointLedgerWhereInput[];
    NOT?: Prisma.PointLedgerWhereInput | Prisma.PointLedgerWhereInput[];
    userId?: Prisma.StringFilter<"PointLedger"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"PointLedger"> | $Enums.LedgerType;
    amount?: Prisma.IntFilter<"PointLedger"> | number;
    referenceType?: Prisma.EnumReferenceTypeFilter<"PointLedger"> | $Enums.ReferenceType;
    referenceId?: Prisma.StringFilter<"PointLedger"> | string;
    description?: Prisma.StringNullableFilter<"PointLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointLedger"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PointLedgerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PointLedgerCountOrderByAggregateInput;
    _avg?: Prisma.PointLedgerAvgOrderByAggregateInput;
    _max?: Prisma.PointLedgerMaxOrderByAggregateInput;
    _min?: Prisma.PointLedgerMinOrderByAggregateInput;
    _sum?: Prisma.PointLedgerSumOrderByAggregateInput;
};
export type PointLedgerScalarWhereWithAggregatesInput = {
    AND?: Prisma.PointLedgerScalarWhereWithAggregatesInput | Prisma.PointLedgerScalarWhereWithAggregatesInput[];
    OR?: Prisma.PointLedgerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PointLedgerScalarWhereWithAggregatesInput | Prisma.PointLedgerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PointLedger"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PointLedger"> | string;
    type?: Prisma.EnumLedgerTypeWithAggregatesFilter<"PointLedger"> | $Enums.LedgerType;
    amount?: Prisma.IntWithAggregatesFilter<"PointLedger"> | number;
    referenceType?: Prisma.EnumReferenceTypeWithAggregatesFilter<"PointLedger"> | $Enums.ReferenceType;
    referenceId?: Prisma.StringWithAggregatesFilter<"PointLedger"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PointLedger"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PointLedger"> | Date | string;
};
export type PointLedgerCreateInput = {
    id?: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLedgersInput;
};
export type PointLedgerUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type PointLedgerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLedgersNestedInput;
};
export type PointLedgerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerCreateManyInput = {
    id?: string;
    userId: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type PointLedgerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerListRelationFilter = {
    every?: Prisma.PointLedgerWhereInput;
    some?: Prisma.PointLedgerWhereInput;
    none?: Prisma.PointLedgerWhereInput;
};
export type PointLedgerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PointLedgerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointLedgerAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PointLedgerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointLedgerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PointLedgerSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PointLedgerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput> | Prisma.PointLedgerCreateWithoutUserInput[] | Prisma.PointLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PointLedgerCreateOrConnectWithoutUserInput | Prisma.PointLedgerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PointLedgerCreateManyUserInputEnvelope;
    connect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
};
export type PointLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput> | Prisma.PointLedgerCreateWithoutUserInput[] | Prisma.PointLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PointLedgerCreateOrConnectWithoutUserInput | Prisma.PointLedgerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PointLedgerCreateManyUserInputEnvelope;
    connect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
};
export type PointLedgerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput> | Prisma.PointLedgerCreateWithoutUserInput[] | Prisma.PointLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PointLedgerCreateOrConnectWithoutUserInput | Prisma.PointLedgerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PointLedgerUpsertWithWhereUniqueWithoutUserInput | Prisma.PointLedgerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PointLedgerCreateManyUserInputEnvelope;
    set?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    disconnect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    delete?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    connect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    update?: Prisma.PointLedgerUpdateWithWhereUniqueWithoutUserInput | Prisma.PointLedgerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PointLedgerUpdateManyWithWhereWithoutUserInput | Prisma.PointLedgerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PointLedgerScalarWhereInput | Prisma.PointLedgerScalarWhereInput[];
};
export type PointLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput> | Prisma.PointLedgerCreateWithoutUserInput[] | Prisma.PointLedgerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PointLedgerCreateOrConnectWithoutUserInput | Prisma.PointLedgerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PointLedgerUpsertWithWhereUniqueWithoutUserInput | Prisma.PointLedgerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PointLedgerCreateManyUserInputEnvelope;
    set?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    disconnect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    delete?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    connect?: Prisma.PointLedgerWhereUniqueInput | Prisma.PointLedgerWhereUniqueInput[];
    update?: Prisma.PointLedgerUpdateWithWhereUniqueWithoutUserInput | Prisma.PointLedgerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PointLedgerUpdateManyWithWhereWithoutUserInput | Prisma.PointLedgerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PointLedgerScalarWhereInput | Prisma.PointLedgerScalarWhereInput[];
};
export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType;
};
export type EnumReferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReferenceType;
};
export type PointLedgerCreateWithoutUserInput = {
    id?: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type PointLedgerUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type PointLedgerCreateOrConnectWithoutUserInput = {
    where: Prisma.PointLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput>;
};
export type PointLedgerCreateManyUserInputEnvelope = {
    data: Prisma.PointLedgerCreateManyUserInput | Prisma.PointLedgerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PointLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PointLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.PointLedgerUpdateWithoutUserInput, Prisma.PointLedgerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PointLedgerCreateWithoutUserInput, Prisma.PointLedgerUncheckedCreateWithoutUserInput>;
};
export type PointLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PointLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.PointLedgerUpdateWithoutUserInput, Prisma.PointLedgerUncheckedUpdateWithoutUserInput>;
};
export type PointLedgerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PointLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.PointLedgerUpdateManyMutationInput, Prisma.PointLedgerUncheckedUpdateManyWithoutUserInput>;
};
export type PointLedgerScalarWhereInput = {
    AND?: Prisma.PointLedgerScalarWhereInput | Prisma.PointLedgerScalarWhereInput[];
    OR?: Prisma.PointLedgerScalarWhereInput[];
    NOT?: Prisma.PointLedgerScalarWhereInput | Prisma.PointLedgerScalarWhereInput[];
    id?: Prisma.StringFilter<"PointLedger"> | string;
    userId?: Prisma.StringFilter<"PointLedger"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"PointLedger"> | $Enums.LedgerType;
    amount?: Prisma.IntFilter<"PointLedger"> | number;
    referenceType?: Prisma.EnumReferenceTypeFilter<"PointLedger"> | $Enums.ReferenceType;
    referenceId?: Prisma.StringFilter<"PointLedger"> | string;
    description?: Prisma.StringNullableFilter<"PointLedger"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PointLedger"> | Date | string;
};
export type PointLedgerCreateManyUserInput = {
    id?: string;
    type: $Enums.LedgerType;
    amount: number;
    referenceType: $Enums.ReferenceType;
    referenceId: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type PointLedgerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amount?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType;
    referenceId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PointLedgerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointLedger"]>;
export type PointLedgerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointLedger"]>;
export type PointLedgerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pointLedger"]>;
export type PointLedgerSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    amount?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type PointLedgerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "referenceType" | "referenceId" | "description" | "createdAt", ExtArgs["result"]["pointLedger"]>;
export type PointLedgerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PointLedgerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PointLedgerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PointLedgerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PointLedger";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        type: $Enums.LedgerType;
        amount: number;
        referenceType: $Enums.ReferenceType;
        referenceId: string;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["pointLedger"]>;
    composites: {};
};
export type PointLedgerGetPayload<S extends boolean | null | undefined | PointLedgerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload, S>;
export type PointLedgerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PointLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PointLedgerCountAggregateInputType | true;
};
export interface PointLedgerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PointLedger'];
        meta: {
            name: 'PointLedger';
        };
    };
    findUnique<T extends PointLedgerFindUniqueArgs>(args: Prisma.SelectSubset<T, PointLedgerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PointLedgerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PointLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PointLedgerFindFirstArgs>(args?: Prisma.SelectSubset<T, PointLedgerFindFirstArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PointLedgerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PointLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PointLedgerFindManyArgs>(args?: Prisma.SelectSubset<T, PointLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PointLedgerCreateArgs>(args: Prisma.SelectSubset<T, PointLedgerCreateArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PointLedgerCreateManyArgs>(args?: Prisma.SelectSubset<T, PointLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PointLedgerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PointLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PointLedgerDeleteArgs>(args: Prisma.SelectSubset<T, PointLedgerDeleteArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PointLedgerUpdateArgs>(args: Prisma.SelectSubset<T, PointLedgerUpdateArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PointLedgerDeleteManyArgs>(args?: Prisma.SelectSubset<T, PointLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PointLedgerUpdateManyArgs>(args: Prisma.SelectSubset<T, PointLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PointLedgerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PointLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PointLedgerUpsertArgs>(args: Prisma.SelectSubset<T, PointLedgerUpsertArgs<ExtArgs>>): Prisma.Prisma__PointLedgerClient<runtime.Types.Result.GetResult<Prisma.$PointLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PointLedgerCountArgs>(args?: Prisma.Subset<T, PointLedgerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PointLedgerCountAggregateOutputType> : number>;
    aggregate<T extends PointLedgerAggregateArgs>(args: Prisma.Subset<T, PointLedgerAggregateArgs>): Prisma.PrismaPromise<GetPointLedgerAggregateType<T>>;
    groupBy<T extends PointLedgerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PointLedgerGroupByArgs['orderBy'];
    } : {
        orderBy?: PointLedgerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PointLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PointLedgerFieldRefs;
}
export interface Prisma__PointLedgerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PointLedgerFieldRefs {
    readonly id: Prisma.FieldRef<"PointLedger", 'String'>;
    readonly userId: Prisma.FieldRef<"PointLedger", 'String'>;
    readonly type: Prisma.FieldRef<"PointLedger", 'LedgerType'>;
    readonly amount: Prisma.FieldRef<"PointLedger", 'Int'>;
    readonly referenceType: Prisma.FieldRef<"PointLedger", 'ReferenceType'>;
    readonly referenceId: Prisma.FieldRef<"PointLedger", 'String'>;
    readonly description: Prisma.FieldRef<"PointLedger", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PointLedger", 'DateTime'>;
}
export type PointLedgerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    where: Prisma.PointLedgerWhereUniqueInput;
};
export type PointLedgerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    where: Prisma.PointLedgerWhereUniqueInput;
};
export type PointLedgerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PointLedgerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PointLedgerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PointLedgerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PointLedgerCreateInput, Prisma.PointLedgerUncheckedCreateInput>;
};
export type PointLedgerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PointLedgerCreateManyInput | Prisma.PointLedgerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PointLedgerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    data: Prisma.PointLedgerCreateManyInput | Prisma.PointLedgerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PointLedgerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PointLedgerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PointLedgerUpdateInput, Prisma.PointLedgerUncheckedUpdateInput>;
    where: Prisma.PointLedgerWhereUniqueInput;
};
export type PointLedgerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PointLedgerUpdateManyMutationInput, Prisma.PointLedgerUncheckedUpdateManyInput>;
    where?: Prisma.PointLedgerWhereInput;
    limit?: number;
};
export type PointLedgerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PointLedgerUpdateManyMutationInput, Prisma.PointLedgerUncheckedUpdateManyInput>;
    where?: Prisma.PointLedgerWhereInput;
    limit?: number;
    include?: Prisma.PointLedgerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PointLedgerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    where: Prisma.PointLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.PointLedgerCreateInput, Prisma.PointLedgerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PointLedgerUpdateInput, Prisma.PointLedgerUncheckedUpdateInput>;
};
export type PointLedgerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
    where: Prisma.PointLedgerWhereUniqueInput;
};
export type PointLedgerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PointLedgerWhereInput;
    limit?: number;
};
export type PointLedgerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PointLedgerSelect<ExtArgs> | null;
    omit?: Prisma.PointLedgerOmit<ExtArgs> | null;
    include?: Prisma.PointLedgerInclude<ExtArgs> | null;
};
