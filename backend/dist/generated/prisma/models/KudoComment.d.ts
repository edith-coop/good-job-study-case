import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type KudoCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$KudoCommentPayload>;
export type AggregateKudoComment = {
    _count: KudoCommentCountAggregateOutputType | null;
    _min: KudoCommentMinAggregateOutputType | null;
    _max: KudoCommentMaxAggregateOutputType | null;
};
export type KudoCommentMinAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type KudoCommentMaxAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type KudoCommentCountAggregateOutputType = {
    id: number;
    kudoId: number;
    userId: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type KudoCommentMinAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type KudoCommentMaxAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type KudoCommentCountAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type KudoCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoCommentWhereInput;
    orderBy?: Prisma.KudoCommentOrderByWithRelationInput | Prisma.KudoCommentOrderByWithRelationInput[];
    cursor?: Prisma.KudoCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KudoCommentCountAggregateInputType;
    _min?: KudoCommentMinAggregateInputType;
    _max?: KudoCommentMaxAggregateInputType;
};
export type GetKudoCommentAggregateType<T extends KudoCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateKudoComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKudoComment[P]> : Prisma.GetScalarType<T[P], AggregateKudoComment[P]>;
};
export type KudoCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoCommentWhereInput;
    orderBy?: Prisma.KudoCommentOrderByWithAggregationInput | Prisma.KudoCommentOrderByWithAggregationInput[];
    by: Prisma.KudoCommentScalarFieldEnum[] | Prisma.KudoCommentScalarFieldEnum;
    having?: Prisma.KudoCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KudoCommentCountAggregateInputType | true;
    _min?: KudoCommentMinAggregateInputType;
    _max?: KudoCommentMaxAggregateInputType;
};
export type KudoCommentGroupByOutputType = {
    id: string;
    kudoId: string;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    _count: KudoCommentCountAggregateOutputType | null;
    _min: KudoCommentMinAggregateOutputType | null;
    _max: KudoCommentMaxAggregateOutputType | null;
};
export type GetKudoCommentGroupByPayload<T extends KudoCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KudoCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KudoCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KudoCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KudoCommentGroupByOutputType[P]>;
}>>;
export type KudoCommentWhereInput = {
    AND?: Prisma.KudoCommentWhereInput | Prisma.KudoCommentWhereInput[];
    OR?: Prisma.KudoCommentWhereInput[];
    NOT?: Prisma.KudoCommentWhereInput | Prisma.KudoCommentWhereInput[];
    id?: Prisma.StringFilter<"KudoComment"> | string;
    kudoId?: Prisma.StringFilter<"KudoComment"> | string;
    userId?: Prisma.StringFilter<"KudoComment"> | string;
    content?: Prisma.StringFilter<"KudoComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    media?: Prisma.CommentMediaListRelationFilter;
};
export type KudoCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    kudo?: Prisma.KudoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    media?: Prisma.CommentMediaOrderByRelationAggregateInput;
};
export type KudoCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KudoCommentWhereInput | Prisma.KudoCommentWhereInput[];
    OR?: Prisma.KudoCommentWhereInput[];
    NOT?: Prisma.KudoCommentWhereInput | Prisma.KudoCommentWhereInput[];
    kudoId?: Prisma.StringFilter<"KudoComment"> | string;
    userId?: Prisma.StringFilter<"KudoComment"> | string;
    content?: Prisma.StringFilter<"KudoComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    media?: Prisma.CommentMediaListRelationFilter;
}, "id">;
export type KudoCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.KudoCommentCountOrderByAggregateInput;
    _max?: Prisma.KudoCommentMaxOrderByAggregateInput;
    _min?: Prisma.KudoCommentMinOrderByAggregateInput;
};
export type KudoCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.KudoCommentScalarWhereWithAggregatesInput | Prisma.KudoCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.KudoCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KudoCommentScalarWhereWithAggregatesInput | Prisma.KudoCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KudoComment"> | string;
    kudoId?: Prisma.StringWithAggregatesFilter<"KudoComment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"KudoComment"> | string;
    content?: Prisma.StringWithAggregatesFilter<"KudoComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KudoComment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"KudoComment"> | Date | string;
};
export type KudoCommentCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutCommentsInput;
    user: Prisma.UserCreateNestedOneWithoutCommentsInput;
    media?: Prisma.CommentMediaCreateNestedManyWithoutCommentInput;
};
export type KudoCommentUncheckedCreateInput = {
    id?: string;
    kudoId: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.CommentMediaUncheckedCreateNestedManyWithoutCommentInput;
};
export type KudoCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutCommentsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    media?: Prisma.CommentMediaUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.CommentMediaUncheckedUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentCreateManyInput = {
    id?: string;
    kudoId: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCommentListRelationFilter = {
    every?: Prisma.KudoCommentWhereInput;
    some?: Prisma.KudoCommentWhereInput;
    none?: Prisma.KudoCommentWhereInput;
};
export type KudoCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KudoCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoCommentScalarRelationFilter = {
    is?: Prisma.KudoCommentWhereInput;
    isNot?: Prisma.KudoCommentWhereInput;
};
export type KudoCommentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput> | Prisma.KudoCommentCreateWithoutUserInput[] | Prisma.KudoCommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutUserInput | Prisma.KudoCommentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoCommentCreateManyUserInputEnvelope;
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
};
export type KudoCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput> | Prisma.KudoCommentCreateWithoutUserInput[] | Prisma.KudoCommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutUserInput | Prisma.KudoCommentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoCommentCreateManyUserInputEnvelope;
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
};
export type KudoCommentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput> | Prisma.KudoCommentCreateWithoutUserInput[] | Prisma.KudoCommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutUserInput | Prisma.KudoCommentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoCommentUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoCommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoCommentCreateManyUserInputEnvelope;
    set?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    disconnect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    delete?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    update?: Prisma.KudoCommentUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoCommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoCommentUpdateManyWithWhereWithoutUserInput | Prisma.KudoCommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
};
export type KudoCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput> | Prisma.KudoCommentCreateWithoutUserInput[] | Prisma.KudoCommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutUserInput | Prisma.KudoCommentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoCommentUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoCommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoCommentCreateManyUserInputEnvelope;
    set?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    disconnect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    delete?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    update?: Prisma.KudoCommentUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoCommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoCommentUpdateManyWithWhereWithoutUserInput | Prisma.KudoCommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
};
export type KudoCommentCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput> | Prisma.KudoCommentCreateWithoutKudoInput[] | Prisma.KudoCommentUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutKudoInput | Prisma.KudoCommentCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoCommentCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
};
export type KudoCommentUncheckedCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput> | Prisma.KudoCommentCreateWithoutKudoInput[] | Prisma.KudoCommentUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutKudoInput | Prisma.KudoCommentCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoCommentCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
};
export type KudoCommentUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput> | Prisma.KudoCommentCreateWithoutKudoInput[] | Prisma.KudoCommentUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutKudoInput | Prisma.KudoCommentCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoCommentUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoCommentUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoCommentCreateManyKudoInputEnvelope;
    set?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    disconnect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    delete?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    update?: Prisma.KudoCommentUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoCommentUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoCommentUpdateManyWithWhereWithoutKudoInput | Prisma.KudoCommentUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
};
export type KudoCommentUncheckedUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput> | Prisma.KudoCommentCreateWithoutKudoInput[] | Prisma.KudoCommentUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutKudoInput | Prisma.KudoCommentCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoCommentUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoCommentUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoCommentCreateManyKudoInputEnvelope;
    set?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    disconnect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    delete?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    connect?: Prisma.KudoCommentWhereUniqueInput | Prisma.KudoCommentWhereUniqueInput[];
    update?: Prisma.KudoCommentUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoCommentUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoCommentUpdateManyWithWhereWithoutKudoInput | Prisma.KudoCommentUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
};
export type KudoCommentCreateNestedOneWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutMediaInput, Prisma.KudoCommentUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutMediaInput;
    connect?: Prisma.KudoCommentWhereUniqueInput;
};
export type KudoCommentUpdateOneRequiredWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCommentCreateWithoutMediaInput, Prisma.KudoCommentUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.KudoCommentCreateOrConnectWithoutMediaInput;
    upsert?: Prisma.KudoCommentUpsertWithoutMediaInput;
    connect?: Prisma.KudoCommentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KudoCommentUpdateToOneWithWhereWithoutMediaInput, Prisma.KudoCommentUpdateWithoutMediaInput>, Prisma.KudoCommentUncheckedUpdateWithoutMediaInput>;
};
export type KudoCommentCreateWithoutUserInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutCommentsInput;
    media?: Prisma.CommentMediaCreateNestedManyWithoutCommentInput;
};
export type KudoCommentUncheckedCreateWithoutUserInput = {
    id?: string;
    kudoId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.CommentMediaUncheckedCreateNestedManyWithoutCommentInput;
};
export type KudoCommentCreateOrConnectWithoutUserInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput>;
};
export type KudoCommentCreateManyUserInputEnvelope = {
    data: Prisma.KudoCommentCreateManyUserInput | Prisma.KudoCommentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type KudoCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoCommentUpdateWithoutUserInput, Prisma.KudoCommentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutUserInput, Prisma.KudoCommentUncheckedCreateWithoutUserInput>;
};
export type KudoCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoCommentUpdateWithoutUserInput, Prisma.KudoCommentUncheckedUpdateWithoutUserInput>;
};
export type KudoCommentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.KudoCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoCommentUpdateManyMutationInput, Prisma.KudoCommentUncheckedUpdateManyWithoutUserInput>;
};
export type KudoCommentScalarWhereInput = {
    AND?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
    OR?: Prisma.KudoCommentScalarWhereInput[];
    NOT?: Prisma.KudoCommentScalarWhereInput | Prisma.KudoCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"KudoComment"> | string;
    kudoId?: Prisma.StringFilter<"KudoComment"> | string;
    userId?: Prisma.StringFilter<"KudoComment"> | string;
    content?: Prisma.StringFilter<"KudoComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KudoComment"> | Date | string;
};
export type KudoCommentCreateWithoutKudoInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCommentsInput;
    media?: Prisma.CommentMediaCreateNestedManyWithoutCommentInput;
};
export type KudoCommentUncheckedCreateWithoutKudoInput = {
    id?: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.CommentMediaUncheckedCreateNestedManyWithoutCommentInput;
};
export type KudoCommentCreateOrConnectWithoutKudoInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput>;
};
export type KudoCommentCreateManyKudoInputEnvelope = {
    data: Prisma.KudoCommentCreateManyKudoInput | Prisma.KudoCommentCreateManyKudoInput[];
    skipDuplicates?: boolean;
};
export type KudoCommentUpsertWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoCommentUpdateWithoutKudoInput, Prisma.KudoCommentUncheckedUpdateWithoutKudoInput>;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutKudoInput, Prisma.KudoCommentUncheckedCreateWithoutKudoInput>;
};
export type KudoCommentUpdateWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoCommentUpdateWithoutKudoInput, Prisma.KudoCommentUncheckedUpdateWithoutKudoInput>;
};
export type KudoCommentUpdateManyWithWhereWithoutKudoInput = {
    where: Prisma.KudoCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoCommentUpdateManyMutationInput, Prisma.KudoCommentUncheckedUpdateManyWithoutKudoInput>;
};
export type KudoCommentCreateWithoutMediaInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutCommentsInput;
    user: Prisma.UserCreateNestedOneWithoutCommentsInput;
};
export type KudoCommentUncheckedCreateWithoutMediaInput = {
    id?: string;
    kudoId: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoCommentCreateOrConnectWithoutMediaInput = {
    where: Prisma.KudoCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutMediaInput, Prisma.KudoCommentUncheckedCreateWithoutMediaInput>;
};
export type KudoCommentUpsertWithoutMediaInput = {
    update: Prisma.XOR<Prisma.KudoCommentUpdateWithoutMediaInput, Prisma.KudoCommentUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.KudoCommentCreateWithoutMediaInput, Prisma.KudoCommentUncheckedCreateWithoutMediaInput>;
    where?: Prisma.KudoCommentWhereInput;
};
export type KudoCommentUpdateToOneWithWhereWithoutMediaInput = {
    where?: Prisma.KudoCommentWhereInput;
    data: Prisma.XOR<Prisma.KudoCommentUpdateWithoutMediaInput, Prisma.KudoCommentUncheckedUpdateWithoutMediaInput>;
};
export type KudoCommentUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutCommentsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
};
export type KudoCommentUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCommentCreateManyUserInput = {
    id?: string;
    kudoId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoCommentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutCommentsNestedInput;
    media?: Prisma.CommentMediaUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.CommentMediaUncheckedUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCommentCreateManyKudoInput = {
    id?: string;
    userId: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoCommentUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput;
    media?: Prisma.CommentMediaUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentUncheckedUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.CommentMediaUncheckedUpdateManyWithoutCommentNestedInput;
};
export type KudoCommentUncheckedUpdateManyWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCommentCountOutputType = {
    media: number;
};
export type KudoCommentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    media?: boolean | KudoCommentCountOutputTypeCountMediaArgs;
};
export type KudoCommentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentCountOutputTypeSelect<ExtArgs> | null;
};
export type KudoCommentCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentMediaWhereInput;
};
export type KudoCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.KudoComment$mediaArgs<ExtArgs>;
    _count?: boolean | Prisma.KudoCommentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoComment"]>;
export type KudoCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoComment"]>;
export type KudoCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoComment"]>;
export type KudoCommentSelectScalar = {
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type KudoCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kudoId" | "userId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["kudoComment"]>;
export type KudoCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.KudoComment$mediaArgs<ExtArgs>;
    _count?: boolean | Prisma.KudoCommentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KudoCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $KudoCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KudoComment";
    objects: {
        kudo: Prisma.$KudoPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        media: Prisma.$CommentMediaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kudoId: string;
        userId: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["kudoComment"]>;
    composites: {};
};
export type KudoCommentGetPayload<S extends boolean | null | undefined | KudoCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload, S>;
export type KudoCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KudoCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KudoCommentCountAggregateInputType | true;
};
export interface KudoCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KudoComment'];
        meta: {
            name: 'KudoComment';
        };
    };
    findUnique<T extends KudoCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, KudoCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KudoCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KudoCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KudoCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, KudoCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KudoCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KudoCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KudoCommentFindManyArgs>(args?: Prisma.SelectSubset<T, KudoCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KudoCommentCreateArgs>(args: Prisma.SelectSubset<T, KudoCommentCreateArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KudoCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, KudoCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KudoCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KudoCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KudoCommentDeleteArgs>(args: Prisma.SelectSubset<T, KudoCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KudoCommentUpdateArgs>(args: Prisma.SelectSubset<T, KudoCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KudoCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, KudoCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KudoCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, KudoCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KudoCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KudoCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KudoCommentUpsertArgs>(args: Prisma.SelectSubset<T, KudoCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KudoCommentCountArgs>(args?: Prisma.Subset<T, KudoCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KudoCommentCountAggregateOutputType> : number>;
    aggregate<T extends KudoCommentAggregateArgs>(args: Prisma.Subset<T, KudoCommentAggregateArgs>): Prisma.PrismaPromise<GetKudoCommentAggregateType<T>>;
    groupBy<T extends KudoCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KudoCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: KudoCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KudoCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KudoCommentFieldRefs;
}
export interface Prisma__KudoCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kudo<T extends Prisma.KudoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoDefaultArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    media<T extends Prisma.KudoComment$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoComment$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KudoCommentFieldRefs {
    readonly id: Prisma.FieldRef<"KudoComment", 'String'>;
    readonly kudoId: Prisma.FieldRef<"KudoComment", 'String'>;
    readonly userId: Prisma.FieldRef<"KudoComment", 'String'>;
    readonly content: Prisma.FieldRef<"KudoComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KudoComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"KudoComment", 'DateTime'>;
}
export type KudoCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    where: Prisma.KudoCommentWhereUniqueInput;
};
export type KudoCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    where: Prisma.KudoCommentWhereUniqueInput;
};
export type KudoCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoCommentCreateInput, Prisma.KudoCommentUncheckedCreateInput>;
};
export type KudoCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KudoCommentCreateManyInput | Prisma.KudoCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KudoCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    data: Prisma.KudoCommentCreateManyInput | Prisma.KudoCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KudoCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KudoCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoCommentUpdateInput, Prisma.KudoCommentUncheckedUpdateInput>;
    where: Prisma.KudoCommentWhereUniqueInput;
};
export type KudoCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KudoCommentUpdateManyMutationInput, Prisma.KudoCommentUncheckedUpdateManyInput>;
    where?: Prisma.KudoCommentWhereInput;
    limit?: number;
};
export type KudoCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoCommentUpdateManyMutationInput, Prisma.KudoCommentUncheckedUpdateManyInput>;
    where?: Prisma.KudoCommentWhereInput;
    limit?: number;
    include?: Prisma.KudoCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KudoCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    where: Prisma.KudoCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCommentCreateInput, Prisma.KudoCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KudoCommentUpdateInput, Prisma.KudoCommentUncheckedUpdateInput>;
};
export type KudoCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
    where: Prisma.KudoCommentWhereUniqueInput;
};
export type KudoCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoCommentWhereInput;
    limit?: number;
};
export type KudoComment$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    where?: Prisma.CommentMediaWhereInput;
    orderBy?: Prisma.CommentMediaOrderByWithRelationInput | Prisma.CommentMediaOrderByWithRelationInput[];
    cursor?: Prisma.CommentMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentMediaScalarFieldEnum | Prisma.CommentMediaScalarFieldEnum[];
};
export type KudoCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCommentSelect<ExtArgs> | null;
    omit?: Prisma.KudoCommentOmit<ExtArgs> | null;
    include?: Prisma.KudoCommentInclude<ExtArgs> | null;
};
