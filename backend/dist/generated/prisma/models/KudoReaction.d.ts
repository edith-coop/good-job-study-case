import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type KudoReactionModel = runtime.Types.Result.DefaultSelection<Prisma.$KudoReactionPayload>;
export type AggregateKudoReaction = {
    _count: KudoReactionCountAggregateOutputType | null;
    _min: KudoReactionMinAggregateOutputType | null;
    _max: KudoReactionMaxAggregateOutputType | null;
};
export type KudoReactionMinAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    emoji: $Enums.ReactionEmoji | null;
    createdAt: Date | null;
};
export type KudoReactionMaxAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    userId: string | null;
    emoji: $Enums.ReactionEmoji | null;
    createdAt: Date | null;
};
export type KudoReactionCountAggregateOutputType = {
    id: number;
    kudoId: number;
    userId: number;
    emoji: number;
    createdAt: number;
    _all: number;
};
export type KudoReactionMinAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    emoji?: true;
    createdAt?: true;
};
export type KudoReactionMaxAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    emoji?: true;
    createdAt?: true;
};
export type KudoReactionCountAggregateInputType = {
    id?: true;
    kudoId?: true;
    userId?: true;
    emoji?: true;
    createdAt?: true;
    _all?: true;
};
export type KudoReactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoReactionWhereInput;
    orderBy?: Prisma.KudoReactionOrderByWithRelationInput | Prisma.KudoReactionOrderByWithRelationInput[];
    cursor?: Prisma.KudoReactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KudoReactionCountAggregateInputType;
    _min?: KudoReactionMinAggregateInputType;
    _max?: KudoReactionMaxAggregateInputType;
};
export type GetKudoReactionAggregateType<T extends KudoReactionAggregateArgs> = {
    [P in keyof T & keyof AggregateKudoReaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKudoReaction[P]> : Prisma.GetScalarType<T[P], AggregateKudoReaction[P]>;
};
export type KudoReactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoReactionWhereInput;
    orderBy?: Prisma.KudoReactionOrderByWithAggregationInput | Prisma.KudoReactionOrderByWithAggregationInput[];
    by: Prisma.KudoReactionScalarFieldEnum[] | Prisma.KudoReactionScalarFieldEnum;
    having?: Prisma.KudoReactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KudoReactionCountAggregateInputType | true;
    _min?: KudoReactionMinAggregateInputType;
    _max?: KudoReactionMaxAggregateInputType;
};
export type KudoReactionGroupByOutputType = {
    id: string;
    kudoId: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt: Date;
    _count: KudoReactionCountAggregateOutputType | null;
    _min: KudoReactionMinAggregateOutputType | null;
    _max: KudoReactionMaxAggregateOutputType | null;
};
export type GetKudoReactionGroupByPayload<T extends KudoReactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KudoReactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KudoReactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KudoReactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KudoReactionGroupByOutputType[P]>;
}>>;
export type KudoReactionWhereInput = {
    AND?: Prisma.KudoReactionWhereInput | Prisma.KudoReactionWhereInput[];
    OR?: Prisma.KudoReactionWhereInput[];
    NOT?: Prisma.KudoReactionWhereInput | Prisma.KudoReactionWhereInput[];
    id?: Prisma.StringFilter<"KudoReaction"> | string;
    kudoId?: Prisma.StringFilter<"KudoReaction"> | string;
    userId?: Prisma.StringFilter<"KudoReaction"> | string;
    emoji?: Prisma.EnumReactionEmojiFilter<"KudoReaction"> | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFilter<"KudoReaction"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type KudoReactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    kudo?: Prisma.KudoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type KudoReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    kudoId_userId_emoji?: Prisma.KudoReactionKudoIdUserIdEmojiCompoundUniqueInput;
    AND?: Prisma.KudoReactionWhereInput | Prisma.KudoReactionWhereInput[];
    OR?: Prisma.KudoReactionWhereInput[];
    NOT?: Prisma.KudoReactionWhereInput | Prisma.KudoReactionWhereInput[];
    kudoId?: Prisma.StringFilter<"KudoReaction"> | string;
    userId?: Prisma.StringFilter<"KudoReaction"> | string;
    emoji?: Prisma.EnumReactionEmojiFilter<"KudoReaction"> | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFilter<"KudoReaction"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "kudoId_userId_emoji">;
export type KudoReactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KudoReactionCountOrderByAggregateInput;
    _max?: Prisma.KudoReactionMaxOrderByAggregateInput;
    _min?: Prisma.KudoReactionMinOrderByAggregateInput;
};
export type KudoReactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.KudoReactionScalarWhereWithAggregatesInput | Prisma.KudoReactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.KudoReactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KudoReactionScalarWhereWithAggregatesInput | Prisma.KudoReactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KudoReaction"> | string;
    kudoId?: Prisma.StringWithAggregatesFilter<"KudoReaction"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"KudoReaction"> | string;
    emoji?: Prisma.EnumReactionEmojiWithAggregatesFilter<"KudoReaction"> | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KudoReaction"> | Date | string;
};
export type KudoReactionCreateInput = {
    id?: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutReactionsInput;
    user: Prisma.UserCreateNestedOneWithoutReactionsInput;
};
export type KudoReactionUncheckedCreateInput = {
    id?: string;
    kudoId: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutReactionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutReactionsNestedInput;
};
export type KudoReactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionCreateManyInput = {
    id?: string;
    kudoId: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionListRelationFilter = {
    every?: Prisma.KudoReactionWhereInput;
    some?: Prisma.KudoReactionWhereInput;
    none?: Prisma.KudoReactionWhereInput;
};
export type KudoReactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KudoReactionKudoIdUserIdEmojiCompoundUniqueInput = {
    kudoId: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
};
export type KudoReactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoReactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoReactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoReactionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput> | Prisma.KudoReactionCreateWithoutUserInput[] | Prisma.KudoReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutUserInput | Prisma.KudoReactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoReactionCreateManyUserInputEnvelope;
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
};
export type KudoReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput> | Prisma.KudoReactionCreateWithoutUserInput[] | Prisma.KudoReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutUserInput | Prisma.KudoReactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.KudoReactionCreateManyUserInputEnvelope;
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
};
export type KudoReactionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput> | Prisma.KudoReactionCreateWithoutUserInput[] | Prisma.KudoReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutUserInput | Prisma.KudoReactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoReactionUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoReactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoReactionCreateManyUserInputEnvelope;
    set?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    disconnect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    delete?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    update?: Prisma.KudoReactionUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoReactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoReactionUpdateManyWithWhereWithoutUserInput | Prisma.KudoReactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
};
export type KudoReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput> | Prisma.KudoReactionCreateWithoutUserInput[] | Prisma.KudoReactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutUserInput | Prisma.KudoReactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.KudoReactionUpsertWithWhereUniqueWithoutUserInput | Prisma.KudoReactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.KudoReactionCreateManyUserInputEnvelope;
    set?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    disconnect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    delete?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    update?: Prisma.KudoReactionUpdateWithWhereUniqueWithoutUserInput | Prisma.KudoReactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.KudoReactionUpdateManyWithWhereWithoutUserInput | Prisma.KudoReactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
};
export type KudoReactionCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput> | Prisma.KudoReactionCreateWithoutKudoInput[] | Prisma.KudoReactionUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutKudoInput | Prisma.KudoReactionCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoReactionCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
};
export type KudoReactionUncheckedCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput> | Prisma.KudoReactionCreateWithoutKudoInput[] | Prisma.KudoReactionUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutKudoInput | Prisma.KudoReactionCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoReactionCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
};
export type KudoReactionUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput> | Prisma.KudoReactionCreateWithoutKudoInput[] | Prisma.KudoReactionUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutKudoInput | Prisma.KudoReactionCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoReactionUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoReactionUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoReactionCreateManyKudoInputEnvelope;
    set?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    disconnect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    delete?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    update?: Prisma.KudoReactionUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoReactionUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoReactionUpdateManyWithWhereWithoutKudoInput | Prisma.KudoReactionUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
};
export type KudoReactionUncheckedUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput> | Prisma.KudoReactionCreateWithoutKudoInput[] | Prisma.KudoReactionUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoReactionCreateOrConnectWithoutKudoInput | Prisma.KudoReactionCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoReactionUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoReactionUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoReactionCreateManyKudoInputEnvelope;
    set?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    disconnect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    delete?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    connect?: Prisma.KudoReactionWhereUniqueInput | Prisma.KudoReactionWhereUniqueInput[];
    update?: Prisma.KudoReactionUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoReactionUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoReactionUpdateManyWithWhereWithoutKudoInput | Prisma.KudoReactionUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
};
export type EnumReactionEmojiFieldUpdateOperationsInput = {
    set?: $Enums.ReactionEmoji;
};
export type KudoReactionCreateWithoutUserInput = {
    id?: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutReactionsInput;
};
export type KudoReactionUncheckedCreateWithoutUserInput = {
    id?: string;
    kudoId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionCreateOrConnectWithoutUserInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput>;
};
export type KudoReactionCreateManyUserInputEnvelope = {
    data: Prisma.KudoReactionCreateManyUserInput | Prisma.KudoReactionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type KudoReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoReactionUpdateWithoutUserInput, Prisma.KudoReactionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.KudoReactionCreateWithoutUserInput, Prisma.KudoReactionUncheckedCreateWithoutUserInput>;
};
export type KudoReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoReactionUpdateWithoutUserInput, Prisma.KudoReactionUncheckedUpdateWithoutUserInput>;
};
export type KudoReactionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.KudoReactionScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoReactionUpdateManyMutationInput, Prisma.KudoReactionUncheckedUpdateManyWithoutUserInput>;
};
export type KudoReactionScalarWhereInput = {
    AND?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
    OR?: Prisma.KudoReactionScalarWhereInput[];
    NOT?: Prisma.KudoReactionScalarWhereInput | Prisma.KudoReactionScalarWhereInput[];
    id?: Prisma.StringFilter<"KudoReaction"> | string;
    kudoId?: Prisma.StringFilter<"KudoReaction"> | string;
    userId?: Prisma.StringFilter<"KudoReaction"> | string;
    emoji?: Prisma.EnumReactionEmojiFilter<"KudoReaction"> | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFilter<"KudoReaction"> | Date | string;
};
export type KudoReactionCreateWithoutKudoInput = {
    id?: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutReactionsInput;
};
export type KudoReactionUncheckedCreateWithoutKudoInput = {
    id?: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionCreateOrConnectWithoutKudoInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput>;
};
export type KudoReactionCreateManyKudoInputEnvelope = {
    data: Prisma.KudoReactionCreateManyKudoInput | Prisma.KudoReactionCreateManyKudoInput[];
    skipDuplicates?: boolean;
};
export type KudoReactionUpsertWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoReactionUpdateWithoutKudoInput, Prisma.KudoReactionUncheckedUpdateWithoutKudoInput>;
    create: Prisma.XOR<Prisma.KudoReactionCreateWithoutKudoInput, Prisma.KudoReactionUncheckedCreateWithoutKudoInput>;
};
export type KudoReactionUpdateWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoReactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoReactionUpdateWithoutKudoInput, Prisma.KudoReactionUncheckedUpdateWithoutKudoInput>;
};
export type KudoReactionUpdateManyWithWhereWithoutKudoInput = {
    where: Prisma.KudoReactionScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoReactionUpdateManyMutationInput, Prisma.KudoReactionUncheckedUpdateManyWithoutKudoInput>;
};
export type KudoReactionCreateManyUserInput = {
    id?: string;
    kudoId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutReactionsNestedInput;
};
export type KudoReactionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionCreateManyKudoInput = {
    id?: string;
    userId: string;
    emoji: $Enums.ReactionEmoji;
    createdAt?: Date | string;
};
export type KudoReactionUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutReactionsNestedInput;
};
export type KudoReactionUncheckedUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionUncheckedUpdateManyWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.EnumReactionEmojiFieldUpdateOperationsInput | $Enums.ReactionEmoji;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoReactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoReaction"]>;
export type KudoReactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoReaction"]>;
export type KudoReactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoReaction"]>;
export type KudoReactionSelectScalar = {
    id?: boolean;
    kudoId?: boolean;
    userId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
};
export type KudoReactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kudoId" | "userId" | "emoji" | "createdAt", ExtArgs["result"]["kudoReaction"]>;
export type KudoReactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoReactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoReactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $KudoReactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KudoReaction";
    objects: {
        kudo: Prisma.$KudoPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kudoId: string;
        userId: string;
        emoji: $Enums.ReactionEmoji;
        createdAt: Date;
    }, ExtArgs["result"]["kudoReaction"]>;
    composites: {};
};
export type KudoReactionGetPayload<S extends boolean | null | undefined | KudoReactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload, S>;
export type KudoReactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KudoReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KudoReactionCountAggregateInputType | true;
};
export interface KudoReactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KudoReaction'];
        meta: {
            name: 'KudoReaction';
        };
    };
    findUnique<T extends KudoReactionFindUniqueArgs>(args: Prisma.SelectSubset<T, KudoReactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KudoReactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KudoReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KudoReactionFindFirstArgs>(args?: Prisma.SelectSubset<T, KudoReactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KudoReactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KudoReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KudoReactionFindManyArgs>(args?: Prisma.SelectSubset<T, KudoReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KudoReactionCreateArgs>(args: Prisma.SelectSubset<T, KudoReactionCreateArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KudoReactionCreateManyArgs>(args?: Prisma.SelectSubset<T, KudoReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KudoReactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KudoReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KudoReactionDeleteArgs>(args: Prisma.SelectSubset<T, KudoReactionDeleteArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KudoReactionUpdateArgs>(args: Prisma.SelectSubset<T, KudoReactionUpdateArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KudoReactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, KudoReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KudoReactionUpdateManyArgs>(args: Prisma.SelectSubset<T, KudoReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KudoReactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KudoReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KudoReactionUpsertArgs>(args: Prisma.SelectSubset<T, KudoReactionUpsertArgs<ExtArgs>>): Prisma.Prisma__KudoReactionClient<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KudoReactionCountArgs>(args?: Prisma.Subset<T, KudoReactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KudoReactionCountAggregateOutputType> : number>;
    aggregate<T extends KudoReactionAggregateArgs>(args: Prisma.Subset<T, KudoReactionAggregateArgs>): Prisma.PrismaPromise<GetKudoReactionAggregateType<T>>;
    groupBy<T extends KudoReactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KudoReactionGroupByArgs['orderBy'];
    } : {
        orderBy?: KudoReactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KudoReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KudoReactionFieldRefs;
}
export interface Prisma__KudoReactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kudo<T extends Prisma.KudoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoDefaultArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KudoReactionFieldRefs {
    readonly id: Prisma.FieldRef<"KudoReaction", 'String'>;
    readonly kudoId: Prisma.FieldRef<"KudoReaction", 'String'>;
    readonly userId: Prisma.FieldRef<"KudoReaction", 'String'>;
    readonly emoji: Prisma.FieldRef<"KudoReaction", 'ReactionEmoji'>;
    readonly createdAt: Prisma.FieldRef<"KudoReaction", 'DateTime'>;
}
export type KudoReactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    where: Prisma.KudoReactionWhereUniqueInput;
};
export type KudoReactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    where: Prisma.KudoReactionWhereUniqueInput;
};
export type KudoReactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoReactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoReactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoReactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoReactionCreateInput, Prisma.KudoReactionUncheckedCreateInput>;
};
export type KudoReactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KudoReactionCreateManyInput | Prisma.KudoReactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KudoReactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    data: Prisma.KudoReactionCreateManyInput | Prisma.KudoReactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KudoReactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KudoReactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoReactionUpdateInput, Prisma.KudoReactionUncheckedUpdateInput>;
    where: Prisma.KudoReactionWhereUniqueInput;
};
export type KudoReactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KudoReactionUpdateManyMutationInput, Prisma.KudoReactionUncheckedUpdateManyInput>;
    where?: Prisma.KudoReactionWhereInput;
    limit?: number;
};
export type KudoReactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoReactionUpdateManyMutationInput, Prisma.KudoReactionUncheckedUpdateManyInput>;
    where?: Prisma.KudoReactionWhereInput;
    limit?: number;
    include?: Prisma.KudoReactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KudoReactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    where: Prisma.KudoReactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoReactionCreateInput, Prisma.KudoReactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KudoReactionUpdateInput, Prisma.KudoReactionUncheckedUpdateInput>;
};
export type KudoReactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
    where: Prisma.KudoReactionWhereUniqueInput;
};
export type KudoReactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoReactionWhereInput;
    limit?: number;
};
export type KudoReactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoReactionSelect<ExtArgs> | null;
    omit?: Prisma.KudoReactionOmit<ExtArgs> | null;
    include?: Prisma.KudoReactionInclude<ExtArgs> | null;
};
