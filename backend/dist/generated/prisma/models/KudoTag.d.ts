import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type KudoTagModel = runtime.Types.Result.DefaultSelection<Prisma.$KudoTagPayload>;
export type AggregateKudoTag = {
    _count: KudoTagCountAggregateOutputType | null;
    _min: KudoTagMinAggregateOutputType | null;
    _max: KudoTagMaxAggregateOutputType | null;
};
export type KudoTagMinAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type KudoTagMaxAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    createdAt: Date | null;
};
export type KudoTagCountAggregateOutputType = {
    id: number;
    kudoId: number;
    userId: number;
    createdAt: number;
    _all: number;
};
export type KudoTagMinAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    createdAt?: true;
};
export type KudoTagMaxAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    createdAt?: true;
};
export type KudoTagCountAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
};
export type KudoTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoTagWhereInput;
    orderBy?: Prisma.KudoTagOrderByWithRelationInput | Prisma.KudoTagOrderByWithRelationInput[];
    cursor?: Prisma.KudoTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KudoTagCountAggregateInputType;
    _min?: KudoTagMinAggregateInputType;
    _max?: KudoTagMaxAggregateInputType;
};
export type GetKudoTagAggregateType<T extends KudoTagAggregateArgs> = {
    [P in keyof T & keyof AggregateKudoTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKudoTag[P]> : Prisma.GetScalarType<T[P], AggregateKudoTag[P]>;
};
export type KudoTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoTagWhereInput;
    orderBy?: Prisma.KudoTagOrderByWithAggregationInput | Prisma.KudoTagOrderByWithAggregationInput[];
    by: Prisma.KudoTagScalarFieldEnum[] | Prisma.KudoTagScalarFieldEnum;
    having?: Prisma.KudoTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KudoTagCountAggregateInputType | true;
    _min?: KudoTagMinAggregateInputType;
    _max?: KudoTagMaxAggregateInputType;
};
export type KudoTagGroupByOutputType = {
    id: string;
    kudoId: string;
    userId: string;
    createdAt: Date;
    _count: KudoTagCountAggregateOutputType | null;
    _min: KudoTagMinAggregateOutputType | null;
    _max: KudoTagMaxAggregateOutputType | null;
};
export type GetKudoTagGroupByPayload<T extends KudoTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KudoTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KudoTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KudoTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KudoTagGroupByOutputType[P]>;
}>>;
export type KudoTagWhereInput = {
    AND?: Prisma.KudoTagWhereInput | Prisma.KudoTagWhereInput[];
    OR?: Prisma.KudoTagWhereInput[];
    NOT?: Prisma.KudoTagWhereInput | Prisma.KudoTagWhereInput[];
    id?: Prisma.StringFilter<"KudoTag"> | string;
    kudoId?: Prisma.StringFilter<"KudoTag"> | string;
    userId?: Prisma.StringFilter<"KudoTag"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoTag"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type KudoTagOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    kudo?: Prisma.KudoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type KudoTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    kudoId_userId?: Prisma.KudoTagKudoIdUserIdCompoundUniqueInput;
    AND?: Prisma.KudoTagWhereInput | Prisma.KudoTagWhereInput[];
    OR?: Prisma.KudoTagWhereInput[];
    NOT?: Prisma.KudoTagWhereInput | Prisma.KudoTagWhereInput[];
    kudoId?: Prisma.StringFilter<"KudoTag"> | string;
    userId?: Prisma.StringFilter<"KudoTag"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoTag"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "kudoId_userId">;
export type KudoTagOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KudoTagCountOrderByAggregateInput;
    _max?: Prisma.KudoTagMaxOrderByAggregateInput;
    _min?: Prisma.KudoTagMinOrderByAggregateInput;
};
export type KudoTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.KudoTagScalarWhereWithAggregatesInput | Prisma.KudoTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.KudoTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KudoTagScalarWhereWithAggregatesInput | Prisma.KudoTagScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KudoTag"> | string;
    kudoId?: Prisma.StringWithAggregatesFilter<"KudoTag"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"KudoTag"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KudoTag"> | Date | string;
};
export type KudoTagCreateInput = {
    id?: string;
    createdAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutTagsInput;
    user: Prisma.UserCreateNestedOneWithoutTaggedKudosInput;
};
export type KudoTagUncheckedCreateInput = {
    id?: string;
    kudoId: string;
    userId: string;
    createdAt?: Date | string;
};
export type KudoTagUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutTagsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTaggedKudosNestedInput;
};
export type KudoTagUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagCreateManyInput = {
    id?: string;
    kudoId: string;
    userId: string;
    createdAt?: Date | string;
};
export type KudoTagUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagListRelationFilter = {
    every?: Prisma.KudoTagWhereInput;
    some?: Prisma.KudoTagWhereInput;
    none?: Prisma.KudoTagWhereInput;
};
export type KudoTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KudoTagKudoIdUserIdCompoundUniqueInput = {
    kudoId: string;
    userId: string;
};
export type KudoTagCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoTagMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoTagMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoTagCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput> | Prisma.KudoTagCreateWithoutUserInput[] | Prisma.KudoTagUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutUserInput | Prisma.KudoTagCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoTagCreateManyUserInputEnvelope;
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
};
export type KudoTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput> | Prisma.KudoTagCreateWithoutUserInput[] | Prisma.KudoTagUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutUserInput | Prisma.KudoTagCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoTagCreateManyUserInputEnvelope;
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
};
export type KudoTagUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput> | Prisma.KudoTagCreateWithoutUserInput[] | Prisma.KudoTagUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutUserInput | Prisma.KudoTagCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoTagUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoTagUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoTagCreateManyUserInputEnvelope;
    set?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    disconnect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    delete?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    update?: Prisma.KudoTagUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoTagUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoTagUpdateManyWithWhereWithoutUserInput | Prisma.KudoTagUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
};
export type KudoTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput> | Prisma.KudoTagCreateWithoutUserInput[] | Prisma.KudoTagUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutUserInput | Prisma.KudoTagCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoTagUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoTagUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoTagCreateManyUserInputEnvelope;
    set?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    disconnect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    delete?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    update?: Prisma.KudoTagUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoTagUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoTagUpdateManyWithWhereWithoutUserInput | Prisma.KudoTagUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
};
export type KudoTagCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput> | Prisma.KudoTagCreateWithoutKudoInput[] | Prisma.KudoTagUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutKudoInput | Prisma.KudoTagCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoTagCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
};
export type KudoTagUncheckedCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput> | Prisma.KudoTagCreateWithoutKudoInput[] | Prisma.KudoTagUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutKudoInput | Prisma.KudoTagCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoTagCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
};
export type KudoTagUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput> | Prisma.KudoTagCreateWithoutKudoInput[] | Prisma.KudoTagUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutKudoInput | Prisma.KudoTagCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoTagUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoTagUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoTagCreateManyKudoInputEnvelope;
    set?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    disconnect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    delete?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    update?: Prisma.KudoTagUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoTagUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoTagUpdateManyWithWhereWithoutKudoInput | Prisma.KudoTagUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
};
export type KudoTagUncheckedUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput> | Prisma.KudoTagCreateWithoutKudoInput[] | Prisma.KudoTagUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoTagCreateOrConnectWithoutKudoInput | Prisma.KudoTagCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoTagUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoTagUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoTagCreateManyKudoInputEnvelope;
    set?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    disconnect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    delete?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    connect?: Prisma.KudoTagWhereUniqueInput | Prisma.KudoTagWhereUniqueInput[];
    update?: Prisma.KudoTagUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoTagUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoTagUpdateManyWithWhereWithoutKudoInput | Prisma.KudoTagUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
};
export type KudoTagCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutTagsInput;
};
export type KudoTagUncheckedCreateWithoutUserInput = {
    id?: string;
    kudoId: string;
    createdAt?: Date | string;
};
export type KudoTagCreateOrConnectWithoutUserInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput>;
};
export type KudoTagCreateManyUserInputEnvelope = {
    data: Prisma.KudoTagCreateManyUserInput | Prisma.KudoTagCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type KudoTagUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoTagUpdateWithoutUserInput, Prisma.KudoTagUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.KudoTagCreateWithoutUserInput, Prisma.KudoTagUncheckedCreateWithoutUserInput>;
};
export type KudoTagUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoTagUpdateWithoutUserInput, Prisma.KudoTagUncheckedUpdateWithoutUserInput>;
};
export type KudoTagUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.KudoTagScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoTagUpdateManyMutationInput, Prisma.KudoTagUncheckedUpdateManyWithoutUserInput>;
};
export type KudoTagScalarWhereInput = {
    AND?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
    OR?: Prisma.KudoTagScalarWhereInput[];
    NOT?: Prisma.KudoTagScalarWhereInput | Prisma.KudoTagScalarWhereInput[];
    id?: Prisma.StringFilter<"KudoTag"> | string;
    kudoId?: Prisma.StringFilter<"KudoTag"> | string;
    userId?: Prisma.StringFilter<"KudoTag"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoTag"> | Date | string;
};
export type KudoTagCreateWithoutKudoInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTaggedKudosInput;
};
export type KudoTagUncheckedCreateWithoutKudoInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type KudoTagCreateOrConnectWithoutKudoInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput>;
};
export type KudoTagCreateManyKudoInputEnvelope = {
    data: Prisma.KudoTagCreateManyKudoInput | Prisma.KudoTagCreateManyKudoInput[];
    skipDuplicates?: boolean;
};
export type KudoTagUpsertWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoTagUpdateWithoutKudoInput, Prisma.KudoTagUncheckedUpdateWithoutKudoInput>;
    create: Prisma.XOR<Prisma.KudoTagCreateWithoutKudoInput, Prisma.KudoTagUncheckedCreateWithoutKudoInput>;
};
export type KudoTagUpdateWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoTagUpdateWithoutKudoInput, Prisma.KudoTagUncheckedUpdateWithoutKudoInput>;
};
export type KudoTagUpdateManyWithWhereWithoutKudoInput = {
    where: Prisma.KudoTagScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoTagUpdateManyMutationInput, Prisma.KudoTagUncheckedUpdateManyWithoutKudoInput>;
};
export type KudoTagCreateManyUserInput = {
    id?: string;
    kudoId: string;
    createdAt?: Date | string;
};
export type KudoTagUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutTagsNestedInput;
};
export type KudoTagUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagCreateManyKudoInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
};
export type KudoTagUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTaggedKudosNestedInput;
};
export type KudoTagUncheckedUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagUncheckedUpdateManyWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoTag"]>;
export type KudoTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoTag"]>;
export type KudoTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoTag"]>;
export type KudoTagSelectScalar = {
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
};
export type KudoTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kudoId" | "userId" | "createdAt", ExtArgs["result"]["kudoTag"]>;
export type KudoTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $KudoTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KudoTag";
    objects: {
        kudo: Prisma.$KudoPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kudoId: string;
        userId: string;
        createdAt: Date;
    }, ExtArgs["result"]["kudoTag"]>;
    composites: {};
};
export type KudoTagGetPayload<S extends boolean | null | undefined | KudoTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KudoTagPayload, S>;
export type KudoTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KudoTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KudoTagCountAggregateInputType | true;
};
export interface KudoTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KudoTag'];
        meta: {
            name: 'KudoTag';
        };
    };
    findUnique<T extends KudoTagFindUniqueArgs>(args: Prisma.SelectSubset<T, KudoTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KudoTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KudoTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KudoTagFindFirstArgs>(args?: Prisma.SelectSubset<T, KudoTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KudoTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KudoTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KudoTagFindManyArgs>(args?: Prisma.SelectSubset<T, KudoTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KudoTagCreateArgs>(args: Prisma.SelectSubset<T, KudoTagCreateArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KudoTagCreateManyArgs>(args?: Prisma.SelectSubset<T, KudoTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KudoTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KudoTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KudoTagDeleteArgs>(args: Prisma.SelectSubset<T, KudoTagDeleteArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KudoTagUpdateArgs>(args: Prisma.SelectSubset<T, KudoTagUpdateArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KudoTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, KudoTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KudoTagUpdateManyArgs>(args: Prisma.SelectSubset<T, KudoTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KudoTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KudoTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KudoTagUpsertArgs>(args: Prisma.SelectSubset<T, KudoTagUpsertArgs<ExtArgs>>): Prisma.Prisma__KudoTagClient<runtime.Types.Result.GetResult<Prisma.$KudoTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KudoTagCountArgs>(args?: Prisma.Subset<T, KudoTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KudoTagCountAggregateOutputType> : number>;
    aggregate<T extends KudoTagAggregateArgs>(args: Prisma.Subset<T, KudoTagAggregateArgs>): Prisma.PrismaPromise<GetKudoTagAggregateType<T>>;
    groupBy<T extends KudoTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KudoTagGroupByArgs['orderBy'];
    } : {
        orderBy?: KudoTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KudoTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KudoTagFieldRefs;
}
export interface Prisma__KudoTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kudo<T extends Prisma.KudoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoDefaultArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KudoTagFieldRefs {
    readonly id: Prisma.FieldRef<"KudoTag", 'String'>;
    readonly kudoId: Prisma.FieldRef<"KudoTag", 'String'>;
    readonly userId: Prisma.FieldRef<"KudoTag", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KudoTag", 'DateTime'>;
}
export type KudoTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where: Prisma.KudoTagWhereUniqueInput;
};
export type KudoTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where: Prisma.KudoTagWhereUniqueInput;
};
export type KudoTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where?: Prisma.KudoTagWhereInput;
    orderBy?: Prisma.KudoTagOrderByWithRelationInput | Prisma.KudoTagOrderByWithRelationInput[];
    cursor?: Prisma.KudoTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoTagScalarFieldEnum | Prisma.KudoTagScalarFieldEnum[];
};
export type KudoTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where?: Prisma.KudoTagWhereInput;
    orderBy?: Prisma.KudoTagOrderByWithRelationInput | Prisma.KudoTagOrderByWithRelationInput[];
    cursor?: Prisma.KudoTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoTagScalarFieldEnum | Prisma.KudoTagScalarFieldEnum[];
};
export type KudoTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where?: Prisma.KudoTagWhereInput;
    orderBy?: Prisma.KudoTagOrderByWithRelationInput | Prisma.KudoTagOrderByWithRelationInput[];
    cursor?: Prisma.KudoTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoTagScalarFieldEnum | Prisma.KudoTagScalarFieldEnum[];
};
export type KudoTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoTagCreateInput, Prisma.KudoTagUncheckedCreateInput>;
};
export type KudoTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KudoTagCreateManyInput | Prisma.KudoTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KudoTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    data: Prisma.KudoTagCreateManyInput | Prisma.KudoTagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KudoTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KudoTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoTagUpdateInput, Prisma.KudoTagUncheckedUpdateInput>;
    where: Prisma.KudoTagWhereUniqueInput;
};
export type KudoTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KudoTagUpdateManyMutationInput, Prisma.KudoTagUncheckedUpdateManyInput>;
    where?: Prisma.KudoTagWhereInput;
    limit?: number;
};
export type KudoTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoTagUpdateManyMutationInput, Prisma.KudoTagUncheckedUpdateManyInput>;
    where?: Prisma.KudoTagWhereInput;
    limit?: number;
    include?: Prisma.KudoTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KudoTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where: Prisma.KudoTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoTagCreateInput, Prisma.KudoTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KudoTagUpdateInput, Prisma.KudoTagUncheckedUpdateInput>;
};
export type KudoTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
    where: Prisma.KudoTagWhereUniqueInput;
};
export type KudoTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoTagWhereInput;
    limit?: number;
};
export type KudoTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoTagSelect<ExtArgs> | null;
    omit?: Prisma.KudoTagOmit<ExtArgs> | null;
    include?: Prisma.KudoTagInclude<ExtArgs> | null;
};
