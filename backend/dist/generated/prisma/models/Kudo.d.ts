import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type KudoModel = runtime.Types.Result.DefaultSelection<Prisma.$KudoPayload>;
export type AggregateKudo = {
    _count: KudoCountAggregateOutputType | null;
    _avg: KudoAvgAggregateOutputType | null;
    _sum: KudoSumAggregateOutputType | null;
    _min: KudoMinAggregateOutputType | null;
    _max: KudoMaxAggregateOutputType | null;
};
export type KudoAvgAggregateOutputType = {
    points: number | null;
};
export type KudoSumAggregateOutputType = {
    points: number | null;
};
export type KudoMinAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    points: number | null;
    coreValue: string | null;
    message: string | null;
    visibility: $Enums.Visibility | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type KudoMaxAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    receiverId: string | null;
    points: number | null;
    coreValue: string | null;
    message: string | null;
    visibility: $Enums.Visibility | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type KudoCountAggregateOutputType = {
    id: number;
    senderId: number;
    receiverId: number;
    points: number;
    coreValue: number;
    message: number;
    visibility: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type KudoAvgAggregateInputType = {
    points?: true;
};
export type KudoSumAggregateInputType = {
    points?: true;
};
export type KudoMinAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    points?: true;
    coreValue?: true;
    message?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type KudoMaxAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    points?: true;
    coreValue?: true;
    message?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type KudoCountAggregateInputType = {
    id?: true;
    senderId?: true;
    receiverId?: true;
    points?: true;
    coreValue?: true;
    message?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type KudoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoWhereInput;
    orderBy?: Prisma.KudoOrderByWithRelationInput | Prisma.KudoOrderByWithRelationInput[];
    cursor?: Prisma.KudoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KudoCountAggregateInputType;
    _avg?: KudoAvgAggregateInputType;
    _sum?: KudoSumAggregateInputType;
    _min?: KudoMinAggregateInputType;
    _max?: KudoMaxAggregateInputType;
};
export type GetKudoAggregateType<T extends KudoAggregateArgs> = {
    [P in keyof T & keyof AggregateKudo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKudo[P]> : Prisma.GetScalarType<T[P], AggregateKudo[P]>;
};
export type KudoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoWhereInput;
    orderBy?: Prisma.KudoOrderByWithAggregationInput | Prisma.KudoOrderByWithAggregationInput[];
    by: Prisma.KudoScalarFieldEnum[] | Prisma.KudoScalarFieldEnum;
    having?: Prisma.KudoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KudoCountAggregateInputType | true;
    _avg?: KudoAvgAggregateInputType;
    _sum?: KudoSumAggregateInputType;
    _min?: KudoMinAggregateInputType;
    _max?: KudoMaxAggregateInputType;
};
export type KudoGroupByOutputType = {
    id: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility: $Enums.Visibility;
    createdAt: Date;
    updatedAt: Date;
    _count: KudoCountAggregateOutputType | null;
    _avg: KudoAvgAggregateOutputType | null;
    _sum: KudoSumAggregateOutputType | null;
    _min: KudoMinAggregateOutputType | null;
    _max: KudoMaxAggregateOutputType | null;
};
export type GetKudoGroupByPayload<T extends KudoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KudoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KudoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KudoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KudoGroupByOutputType[P]>;
}>>;
export type KudoWhereInput = {
    AND?: Prisma.KudoWhereInput | Prisma.KudoWhereInput[];
    OR?: Prisma.KudoWhereInput[];
    NOT?: Prisma.KudoWhereInput | Prisma.KudoWhereInput[];
    id?: Prisma.StringFilter<"Kudo"> | string;
    senderId?: Prisma.StringFilter<"Kudo"> | string;
    receiverId?: Prisma.StringFilter<"Kudo"> | string;
    points?: Prisma.IntFilter<"Kudo"> | number;
    coreValue?: Prisma.StringFilter<"Kudo"> | string;
    message?: Prisma.StringFilter<"Kudo"> | string;
    visibility?: Prisma.EnumVisibilityFilter<"Kudo"> | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    media?: Prisma.KudoMediaListRelationFilter;
    comments?: Prisma.KudoCommentListRelationFilter;
    reactions?: Prisma.KudoReactionListRelationFilter;
};
export type KudoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    coreValue?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sender?: Prisma.UserOrderByWithRelationInput;
    receiver?: Prisma.UserOrderByWithRelationInput;
    media?: Prisma.KudoMediaOrderByRelationAggregateInput;
    comments?: Prisma.KudoCommentOrderByRelationAggregateInput;
    reactions?: Prisma.KudoReactionOrderByRelationAggregateInput;
};
export type KudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KudoWhereInput | Prisma.KudoWhereInput[];
    OR?: Prisma.KudoWhereInput[];
    NOT?: Prisma.KudoWhereInput | Prisma.KudoWhereInput[];
    senderId?: Prisma.StringFilter<"Kudo"> | string;
    receiverId?: Prisma.StringFilter<"Kudo"> | string;
    points?: Prisma.IntFilter<"Kudo"> | number;
    coreValue?: Prisma.StringFilter<"Kudo"> | string;
    message?: Prisma.StringFilter<"Kudo"> | string;
    visibility?: Prisma.EnumVisibilityFilter<"Kudo"> | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    receiver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    media?: Prisma.KudoMediaListRelationFilter;
    comments?: Prisma.KudoCommentListRelationFilter;
    reactions?: Prisma.KudoReactionListRelationFilter;
}, "id">;
export type KudoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    coreValue?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.KudoCountOrderByAggregateInput;
    _avg?: Prisma.KudoAvgOrderByAggregateInput;
    _max?: Prisma.KudoMaxOrderByAggregateInput;
    _min?: Prisma.KudoMinOrderByAggregateInput;
    _sum?: Prisma.KudoSumOrderByAggregateInput;
};
export type KudoScalarWhereWithAggregatesInput = {
    AND?: Prisma.KudoScalarWhereWithAggregatesInput | Prisma.KudoScalarWhereWithAggregatesInput[];
    OR?: Prisma.KudoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KudoScalarWhereWithAggregatesInput | Prisma.KudoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Kudo"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"Kudo"> | string;
    receiverId?: Prisma.StringWithAggregatesFilter<"Kudo"> | string;
    points?: Prisma.IntWithAggregatesFilter<"Kudo"> | number;
    coreValue?: Prisma.StringWithAggregatesFilter<"Kudo"> | string;
    message?: Prisma.StringWithAggregatesFilter<"Kudo"> | string;
    visibility?: Prisma.EnumVisibilityWithAggregatesFilter<"Kudo"> | $Enums.Visibility;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Kudo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Kudo"> | Date | string;
};
export type KudoCreateInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentKudosInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedKudosInput;
    media?: Prisma.KudoMediaCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.KudoMediaUncheckedCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentKudosNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedKudosNestedInput;
    media?: Prisma.KudoMediaUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.KudoMediaUncheckedUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoCreateManyInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoListRelationFilter = {
    every?: Prisma.KudoWhereInput;
    some?: Prisma.KudoWhereInput;
    none?: Prisma.KudoWhereInput;
};
export type KudoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KudoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    coreValue?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
};
export type KudoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    coreValue?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    coreValue?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type KudoSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
};
export type KudoScalarRelationFilter = {
    is?: Prisma.KudoWhereInput;
    isNot?: Prisma.KudoWhereInput;
};
export type KudoCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput> | Prisma.KudoCreateWithoutSenderInput[] | Prisma.KudoUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutSenderInput | Prisma.KudoCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.KudoCreateManySenderInputEnvelope;
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
};
export type KudoCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput> | Prisma.KudoCreateWithoutReceiverInput[] | Prisma.KudoUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReceiverInput | Prisma.KudoCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.KudoCreateManyReceiverInputEnvelope;
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
};
export type KudoUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput> | Prisma.KudoCreateWithoutSenderInput[] | Prisma.KudoUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutSenderInput | Prisma.KudoCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.KudoCreateManySenderInputEnvelope;
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
};
export type KudoUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput> | Prisma.KudoCreateWithoutReceiverInput[] | Prisma.KudoUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReceiverInput | Prisma.KudoCreateOrConnectWithoutReceiverInput[];
    createMany?: Prisma.KudoCreateManyReceiverInputEnvelope;
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
};
export type KudoUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput> | Prisma.KudoCreateWithoutSenderInput[] | Prisma.KudoUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutSenderInput | Prisma.KudoCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.KudoUpsertWithWhereUniqueWithoutSenderInput | Prisma.KudoUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.KudoCreateManySenderInputEnvelope;
    set?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    disconnect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    delete?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    update?: Prisma.KudoUpdateWithWhereUniqueWithoutSenderInput | Prisma.KudoUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.KudoUpdateManyWithWhereWithoutSenderInput | Prisma.KudoUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
};
export type KudoUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput> | Prisma.KudoCreateWithoutReceiverInput[] | Prisma.KudoUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReceiverInput | Prisma.KudoCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.KudoUpsertWithWhereUniqueWithoutReceiverInput | Prisma.KudoUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.KudoCreateManyReceiverInputEnvelope;
    set?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    disconnect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    delete?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    update?: Prisma.KudoUpdateWithWhereUniqueWithoutReceiverInput | Prisma.KudoUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.KudoUpdateManyWithWhereWithoutReceiverInput | Prisma.KudoUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
};
export type KudoUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput> | Prisma.KudoCreateWithoutSenderInput[] | Prisma.KudoUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutSenderInput | Prisma.KudoCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.KudoUpsertWithWhereUniqueWithoutSenderInput | Prisma.KudoUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.KudoCreateManySenderInputEnvelope;
    set?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    disconnect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    delete?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    update?: Prisma.KudoUpdateWithWhereUniqueWithoutSenderInput | Prisma.KudoUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.KudoUpdateManyWithWhereWithoutSenderInput | Prisma.KudoUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
};
export type KudoUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput> | Prisma.KudoCreateWithoutReceiverInput[] | Prisma.KudoUncheckedCreateWithoutReceiverInput[];
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReceiverInput | Prisma.KudoCreateOrConnectWithoutReceiverInput[];
    upsert?: Prisma.KudoUpsertWithWhereUniqueWithoutReceiverInput | Prisma.KudoUpsertWithWhereUniqueWithoutReceiverInput[];
    createMany?: Prisma.KudoCreateManyReceiverInputEnvelope;
    set?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    disconnect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    delete?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    connect?: Prisma.KudoWhereUniqueInput | Prisma.KudoWhereUniqueInput[];
    update?: Prisma.KudoUpdateWithWhereUniqueWithoutReceiverInput | Prisma.KudoUpdateWithWhereUniqueWithoutReceiverInput[];
    updateMany?: Prisma.KudoUpdateManyWithWhereWithoutReceiverInput | Prisma.KudoUpdateManyWithWhereWithoutReceiverInput[];
    deleteMany?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility;
};
export type KudoCreateNestedOneWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutMediaInput, Prisma.KudoUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutMediaInput;
    connect?: Prisma.KudoWhereUniqueInput;
};
export type KudoUpdateOneRequiredWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutMediaInput, Prisma.KudoUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutMediaInput;
    upsert?: Prisma.KudoUpsertWithoutMediaInput;
    connect?: Prisma.KudoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KudoUpdateToOneWithWhereWithoutMediaInput, Prisma.KudoUpdateWithoutMediaInput>, Prisma.KudoUncheckedUpdateWithoutMediaInput>;
};
export type KudoCreateNestedOneWithoutReactionsInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReactionsInput, Prisma.KudoUncheckedCreateWithoutReactionsInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReactionsInput;
    connect?: Prisma.KudoWhereUniqueInput;
};
export type KudoUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutReactionsInput, Prisma.KudoUncheckedCreateWithoutReactionsInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutReactionsInput;
    upsert?: Prisma.KudoUpsertWithoutReactionsInput;
    connect?: Prisma.KudoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KudoUpdateToOneWithWhereWithoutReactionsInput, Prisma.KudoUpdateWithoutReactionsInput>, Prisma.KudoUncheckedUpdateWithoutReactionsInput>;
};
export type KudoCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutCommentsInput, Prisma.KudoUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.KudoWhereUniqueInput;
};
export type KudoUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.KudoCreateWithoutCommentsInput, Prisma.KudoUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.KudoCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.KudoUpsertWithoutCommentsInput;
    connect?: Prisma.KudoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KudoUpdateToOneWithWhereWithoutCommentsInput, Prisma.KudoUpdateWithoutCommentsInput>, Prisma.KudoUncheckedUpdateWithoutCommentsInput>;
};
export type KudoCreateWithoutSenderInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedKudosInput;
    media?: Prisma.KudoMediaCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateWithoutSenderInput = {
    id?: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.KudoMediaUncheckedCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoCreateOrConnectWithoutSenderInput = {
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput>;
};
export type KudoCreateManySenderInputEnvelope = {
    data: Prisma.KudoCreateManySenderInput | Prisma.KudoCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type KudoCreateWithoutReceiverInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentKudosInput;
    media?: Prisma.KudoMediaCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateWithoutReceiverInput = {
    id?: string;
    senderId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.KudoMediaUncheckedCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoCreateOrConnectWithoutReceiverInput = {
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput>;
};
export type KudoCreateManyReceiverInputEnvelope = {
    data: Prisma.KudoCreateManyReceiverInput | Prisma.KudoCreateManyReceiverInput[];
    skipDuplicates?: boolean;
};
export type KudoUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.KudoWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoUpdateWithoutSenderInput, Prisma.KudoUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.KudoCreateWithoutSenderInput, Prisma.KudoUncheckedCreateWithoutSenderInput>;
};
export type KudoUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.KudoWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoUpdateWithoutSenderInput, Prisma.KudoUncheckedUpdateWithoutSenderInput>;
};
export type KudoUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.KudoScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoUpdateManyMutationInput, Prisma.KudoUncheckedUpdateManyWithoutSenderInput>;
};
export type KudoScalarWhereInput = {
    AND?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
    OR?: Prisma.KudoScalarWhereInput[];
    NOT?: Prisma.KudoScalarWhereInput | Prisma.KudoScalarWhereInput[];
    id?: Prisma.StringFilter<"Kudo"> | string;
    senderId?: Prisma.StringFilter<"Kudo"> | string;
    receiverId?: Prisma.StringFilter<"Kudo"> | string;
    points?: Prisma.IntFilter<"Kudo"> | number;
    coreValue?: Prisma.StringFilter<"Kudo"> | string;
    message?: Prisma.StringFilter<"Kudo"> | string;
    visibility?: Prisma.EnumVisibilityFilter<"Kudo"> | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Kudo"> | Date | string;
};
export type KudoUpsertWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.KudoWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoUpdateWithoutReceiverInput, Prisma.KudoUncheckedUpdateWithoutReceiverInput>;
    create: Prisma.XOR<Prisma.KudoCreateWithoutReceiverInput, Prisma.KudoUncheckedCreateWithoutReceiverInput>;
};
export type KudoUpdateWithWhereUniqueWithoutReceiverInput = {
    where: Prisma.KudoWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoUpdateWithoutReceiverInput, Prisma.KudoUncheckedUpdateWithoutReceiverInput>;
};
export type KudoUpdateManyWithWhereWithoutReceiverInput = {
    where: Prisma.KudoScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoUpdateManyMutationInput, Prisma.KudoUncheckedUpdateManyWithoutReceiverInput>;
};
export type KudoCreateWithoutMediaInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentKudosInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedKudosInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateWithoutMediaInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoCreateOrConnectWithoutMediaInput = {
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateWithoutMediaInput, Prisma.KudoUncheckedCreateWithoutMediaInput>;
};
export type KudoUpsertWithoutMediaInput = {
    update: Prisma.XOR<Prisma.KudoUpdateWithoutMediaInput, Prisma.KudoUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.KudoCreateWithoutMediaInput, Prisma.KudoUncheckedCreateWithoutMediaInput>;
    where?: Prisma.KudoWhereInput;
};
export type KudoUpdateToOneWithWhereWithoutMediaInput = {
    where?: Prisma.KudoWhereInput;
    data: Prisma.XOR<Prisma.KudoUpdateWithoutMediaInput, Prisma.KudoUncheckedUpdateWithoutMediaInput>;
};
export type KudoUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentKudosNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedKudosNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoCreateWithoutReactionsInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentKudosInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedKudosInput;
    media?: Prisma.KudoMediaCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateWithoutReactionsInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.KudoMediaUncheckedCreateNestedManyWithoutKudoInput;
    comments?: Prisma.KudoCommentUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoCreateOrConnectWithoutReactionsInput = {
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateWithoutReactionsInput, Prisma.KudoUncheckedCreateWithoutReactionsInput>;
};
export type KudoUpsertWithoutReactionsInput = {
    update: Prisma.XOR<Prisma.KudoUpdateWithoutReactionsInput, Prisma.KudoUncheckedUpdateWithoutReactionsInput>;
    create: Prisma.XOR<Prisma.KudoCreateWithoutReactionsInput, Prisma.KudoUncheckedCreateWithoutReactionsInput>;
    where?: Prisma.KudoWhereInput;
};
export type KudoUpdateToOneWithWhereWithoutReactionsInput = {
    where?: Prisma.KudoWhereInput;
    data: Prisma.XOR<Prisma.KudoUpdateWithoutReactionsInput, Prisma.KudoUncheckedUpdateWithoutReactionsInput>;
};
export type KudoUpdateWithoutReactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentKudosNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedKudosNestedInput;
    media?: Prisma.KudoMediaUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateWithoutReactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.KudoMediaUncheckedUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoCreateWithoutCommentsInput = {
    id?: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sender: Prisma.UserCreateNestedOneWithoutSentKudosInput;
    receiver: Prisma.UserCreateNestedOneWithoutReceivedKudosInput;
    media?: Prisma.KudoMediaCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionCreateNestedManyWithoutKudoInput;
};
export type KudoUncheckedCreateWithoutCommentsInput = {
    id?: string;
    senderId: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    media?: Prisma.KudoMediaUncheckedCreateNestedManyWithoutKudoInput;
    reactions?: Prisma.KudoReactionUncheckedCreateNestedManyWithoutKudoInput;
};
export type KudoCreateOrConnectWithoutCommentsInput = {
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateWithoutCommentsInput, Prisma.KudoUncheckedCreateWithoutCommentsInput>;
};
export type KudoUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.KudoUpdateWithoutCommentsInput, Prisma.KudoUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.KudoCreateWithoutCommentsInput, Prisma.KudoUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.KudoWhereInput;
};
export type KudoUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.KudoWhereInput;
    data: Prisma.XOR<Prisma.KudoUpdateWithoutCommentsInput, Prisma.KudoUncheckedUpdateWithoutCommentsInput>;
};
export type KudoUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentKudosNestedInput;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedKudosNestedInput;
    media?: Prisma.KudoMediaUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.KudoMediaUncheckedUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoCreateManySenderInput = {
    id?: string;
    receiverId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoCreateManyReceiverInput = {
    id?: string;
    senderId: string;
    points: number;
    coreValue: string;
    message: string;
    visibility?: $Enums.Visibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type KudoUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receiver?: Prisma.UserUpdateOneRequiredWithoutReceivedKudosNestedInput;
    media?: Prisma.KudoMediaUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.KudoMediaUncheckedUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateManyWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoUpdateWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sender?: Prisma.UserUpdateOneRequiredWithoutSentKudosNestedInput;
    media?: Prisma.KudoMediaUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    media?: Prisma.KudoMediaUncheckedUpdateManyWithoutKudoNestedInput;
    comments?: Prisma.KudoCommentUncheckedUpdateManyWithoutKudoNestedInput;
    reactions?: Prisma.KudoReactionUncheckedUpdateManyWithoutKudoNestedInput;
};
export type KudoUncheckedUpdateManyWithoutReceiverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    coreValue?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoCountOutputType = {
    media: number;
    comments: number;
    reactions: number;
};
export type KudoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    media?: boolean | KudoCountOutputTypeCountMediaArgs;
    comments?: boolean | KudoCountOutputTypeCountCommentsArgs;
    reactions?: boolean | KudoCountOutputTypeCountReactionsArgs;
};
export type KudoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoCountOutputTypeSelect<ExtArgs> | null;
};
export type KudoCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoMediaWhereInput;
};
export type KudoCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoCommentWhereInput;
};
export type KudoCountOutputTypeCountReactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoReactionWhereInput;
};
export type KudoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    points?: boolean;
    coreValue?: boolean;
    message?: boolean;
    visibility?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.Kudo$mediaArgs<ExtArgs>;
    comments?: boolean | Prisma.Kudo$commentsArgs<ExtArgs>;
    reactions?: boolean | Prisma.Kudo$reactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.KudoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudo"]>;
export type KudoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    points?: boolean;
    coreValue?: boolean;
    message?: boolean;
    visibility?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudo"]>;
export type KudoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    points?: boolean;
    coreValue?: boolean;
    message?: boolean;
    visibility?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudo"]>;
export type KudoSelectScalar = {
    id?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    points?: boolean;
    coreValue?: boolean;
    message?: boolean;
    visibility?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type KudoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "senderId" | "receiverId" | "points" | "coreValue" | "message" | "visibility" | "createdAt" | "updatedAt", ExtArgs["result"]["kudo"]>;
export type KudoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.Kudo$mediaArgs<ExtArgs>;
    comments?: boolean | Prisma.Kudo$commentsArgs<ExtArgs>;
    reactions?: boolean | Prisma.Kudo$reactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.KudoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KudoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type KudoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    receiver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $KudoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Kudo";
    objects: {
        sender: Prisma.$UserPayload<ExtArgs>;
        receiver: Prisma.$UserPayload<ExtArgs>;
        media: Prisma.$KudoMediaPayload<ExtArgs>[];
        comments: Prisma.$KudoCommentPayload<ExtArgs>[];
        reactions: Prisma.$KudoReactionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        senderId: string;
        receiverId: string;
        points: number;
        coreValue: string;
        message: string;
        visibility: $Enums.Visibility;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["kudo"]>;
    composites: {};
};
export type KudoGetPayload<S extends boolean | null | undefined | KudoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KudoPayload, S>;
export type KudoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KudoCountAggregateInputType | true;
};
export interface KudoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Kudo'];
        meta: {
            name: 'Kudo';
        };
    };
    findUnique<T extends KudoFindUniqueArgs>(args: Prisma.SelectSubset<T, KudoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KudoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KudoFindFirstArgs>(args?: Prisma.SelectSubset<T, KudoFindFirstArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KudoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KudoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KudoFindManyArgs>(args?: Prisma.SelectSubset<T, KudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KudoCreateArgs>(args: Prisma.SelectSubset<T, KudoCreateArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KudoCreateManyArgs>(args?: Prisma.SelectSubset<T, KudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KudoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KudoDeleteArgs>(args: Prisma.SelectSubset<T, KudoDeleteArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KudoUpdateArgs>(args: Prisma.SelectSubset<T, KudoUpdateArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KudoDeleteManyArgs>(args?: Prisma.SelectSubset<T, KudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KudoUpdateManyArgs>(args: Prisma.SelectSubset<T, KudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KudoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KudoUpsertArgs>(args: Prisma.SelectSubset<T, KudoUpsertArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KudoCountArgs>(args?: Prisma.Subset<T, KudoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KudoCountAggregateOutputType> : number>;
    aggregate<T extends KudoAggregateArgs>(args: Prisma.Subset<T, KudoAggregateArgs>): Prisma.PrismaPromise<GetKudoAggregateType<T>>;
    groupBy<T extends KudoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KudoGroupByArgs['orderBy'];
    } : {
        orderBy?: KudoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KudoFieldRefs;
}
export interface Prisma__KudoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sender<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receiver<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    media<T extends Prisma.Kudo$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kudo$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.Kudo$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kudo$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reactions<T extends Prisma.Kudo$reactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Kudo$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KudoFieldRefs {
    readonly id: Prisma.FieldRef<"Kudo", 'String'>;
    readonly senderId: Prisma.FieldRef<"Kudo", 'String'>;
    readonly receiverId: Prisma.FieldRef<"Kudo", 'String'>;
    readonly points: Prisma.FieldRef<"Kudo", 'Int'>;
    readonly coreValue: Prisma.FieldRef<"Kudo", 'String'>;
    readonly message: Prisma.FieldRef<"Kudo", 'String'>;
    readonly visibility: Prisma.FieldRef<"Kudo", 'Visibility'>;
    readonly createdAt: Prisma.FieldRef<"Kudo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Kudo", 'DateTime'>;
}
export type KudoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where: Prisma.KudoWhereUniqueInput;
};
export type KudoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where: Prisma.KudoWhereUniqueInput;
};
export type KudoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoCreateInput, Prisma.KudoUncheckedCreateInput>;
};
export type KudoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KudoCreateManyInput | Prisma.KudoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KudoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    data: Prisma.KudoCreateManyInput | Prisma.KudoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KudoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KudoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoUpdateInput, Prisma.KudoUncheckedUpdateInput>;
    where: Prisma.KudoWhereUniqueInput;
};
export type KudoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KudoUpdateManyMutationInput, Prisma.KudoUncheckedUpdateManyInput>;
    where?: Prisma.KudoWhereInput;
    limit?: number;
};
export type KudoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoUpdateManyMutationInput, Prisma.KudoUncheckedUpdateManyInput>;
    where?: Prisma.KudoWhereInput;
    limit?: number;
    include?: Prisma.KudoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KudoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where: Prisma.KudoWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoCreateInput, Prisma.KudoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KudoUpdateInput, Prisma.KudoUncheckedUpdateInput>;
};
export type KudoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
    where: Prisma.KudoWhereUniqueInput;
};
export type KudoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoWhereInput;
    limit?: number;
};
export type Kudo$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    where?: Prisma.KudoMediaWhereInput;
    orderBy?: Prisma.KudoMediaOrderByWithRelationInput | Prisma.KudoMediaOrderByWithRelationInput[];
    cursor?: Prisma.KudoMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KudoMediaScalarFieldEnum | Prisma.KudoMediaScalarFieldEnum[];
};
export type Kudo$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Kudo$reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoSelect<ExtArgs> | null;
    omit?: Prisma.KudoOmit<ExtArgs> | null;
    include?: Prisma.KudoInclude<ExtArgs> | null;
};
