import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type KudoMediaModel = runtime.Types.Result.DefaultSelection<Prisma.$KudoMediaPayload>;
export type AggregateKudoMedia = {
    _count: KudoMediaCountAggregateOutputType | null;
    _avg: KudoMediaAvgAggregateOutputType | null;
    _sum: KudoMediaSumAggregateOutputType | null;
    _min: KudoMediaMinAggregateOutputType | null;
    _max: KudoMediaMaxAggregateOutputType | null;
};
export type KudoMediaAvgAggregateOutputType = {
    durationSeconds: number | null;
};
export type KudoMediaSumAggregateOutputType = {
    durationSeconds: number | null;
};
export type KudoMediaMinAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    mediaType: $Enums.MediaType | null;
    mediaUrl: string | null;
    durationSeconds: number | null;
    createdAt: Date | null;
};
export type KudoMediaMaxAggregateOutputType = {
    id: string | null;
    kudoId: string | null;
    mediaType: $Enums.MediaType | null;
    mediaUrl: string | null;
    durationSeconds: number | null;
    createdAt: Date | null;
};
export type KudoMediaCountAggregateOutputType = {
    id: number;
    kudoId: number;
    mediaType: number;
    mediaUrl: number;
    durationSeconds: number;
    createdAt: number;
    _all: number;
};
export type KudoMediaAvgAggregateInputType = {
    durationSeconds?: true;
};
export type KudoMediaSumAggregateInputType = {
    durationSeconds?: true;
};
export type KudoMediaMinAggregateInputType = {
    id?: true;
    kudoId?: true;
    mediaType?: true;
    mediaUrl?: true;
    durationSeconds?: true;
    createdAt?: true;
};
export type KudoMediaMaxAggregateInputType = {
    id?: true;
    kudoId?: true;
    mediaType?: true;
    mediaUrl?: true;
    durationSeconds?: true;
    createdAt?: true;
};
export type KudoMediaCountAggregateInputType = {
    id?: true;
    kudoId?: true;
    mediaType?: true;
    mediaUrl?: true;
    durationSeconds?: true;
    createdAt?: true;
    _all?: true;
};
export type KudoMediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoMediaWhereInput;
    orderBy?: Prisma.KudoMediaOrderByWithRelationInput | Prisma.KudoMediaOrderByWithRelationInput[];
    cursor?: Prisma.KudoMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KudoMediaCountAggregateInputType;
    _avg?: KudoMediaAvgAggregateInputType;
    _sum?: KudoMediaSumAggregateInputType;
    _min?: KudoMediaMinAggregateInputType;
    _max?: KudoMediaMaxAggregateInputType;
};
export type GetKudoMediaAggregateType<T extends KudoMediaAggregateArgs> = {
    [P in keyof T & keyof AggregateKudoMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKudoMedia[P]> : Prisma.GetScalarType<T[P], AggregateKudoMedia[P]>;
};
export type KudoMediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoMediaWhereInput;
    orderBy?: Prisma.KudoMediaOrderByWithAggregationInput | Prisma.KudoMediaOrderByWithAggregationInput[];
    by: Prisma.KudoMediaScalarFieldEnum[] | Prisma.KudoMediaScalarFieldEnum;
    having?: Prisma.KudoMediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KudoMediaCountAggregateInputType | true;
    _avg?: KudoMediaAvgAggregateInputType;
    _sum?: KudoMediaSumAggregateInputType;
    _min?: KudoMediaMinAggregateInputType;
    _max?: KudoMediaMaxAggregateInputType;
};
export type KudoMediaGroupByOutputType = {
    id: string;
    kudoId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds: number | null;
    createdAt: Date;
    _count: KudoMediaCountAggregateOutputType | null;
    _avg: KudoMediaAvgAggregateOutputType | null;
    _sum: KudoMediaSumAggregateOutputType | null;
    _min: KudoMediaMinAggregateOutputType | null;
    _max: KudoMediaMaxAggregateOutputType | null;
};
export type GetKudoMediaGroupByPayload<T extends KudoMediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KudoMediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KudoMediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KudoMediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KudoMediaGroupByOutputType[P]>;
}>>;
export type KudoMediaWhereInput = {
    AND?: Prisma.KudoMediaWhereInput | Prisma.KudoMediaWhereInput[];
    OR?: Prisma.KudoMediaWhereInput[];
    NOT?: Prisma.KudoMediaWhereInput | Prisma.KudoMediaWhereInput[];
    id?: Prisma.StringFilter<"KudoMedia"> | string;
    kudoId?: Prisma.StringFilter<"KudoMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"KudoMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"KudoMedia"> | string;
    durationSeconds?: Prisma.IntNullableFilter<"KudoMedia"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"KudoMedia"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
};
export type KudoMediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    kudo?: Prisma.KudoOrderByWithRelationInput;
};
export type KudoMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.KudoMediaWhereInput | Prisma.KudoMediaWhereInput[];
    OR?: Prisma.KudoMediaWhereInput[];
    NOT?: Prisma.KudoMediaWhereInput | Prisma.KudoMediaWhereInput[];
    kudoId?: Prisma.StringFilter<"KudoMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"KudoMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"KudoMedia"> | string;
    durationSeconds?: Prisma.IntNullableFilter<"KudoMedia"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"KudoMedia"> | Date | string;
    kudo?: Prisma.XOR<Prisma.KudoScalarRelationFilter, Prisma.KudoWhereInput>;
}, "id">;
export type KudoMediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KudoMediaCountOrderByAggregateInput;
    _avg?: Prisma.KudoMediaAvgOrderByAggregateInput;
    _max?: Prisma.KudoMediaMaxOrderByAggregateInput;
    _min?: Prisma.KudoMediaMinOrderByAggregateInput;
    _sum?: Prisma.KudoMediaSumOrderByAggregateInput;
};
export type KudoMediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.KudoMediaScalarWhereWithAggregatesInput | Prisma.KudoMediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.KudoMediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KudoMediaScalarWhereWithAggregatesInput | Prisma.KudoMediaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"KudoMedia"> | string;
    kudoId?: Prisma.StringWithAggregatesFilter<"KudoMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeWithAggregatesFilter<"KudoMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringWithAggregatesFilter<"KudoMedia"> | string;
    durationSeconds?: Prisma.IntNullableWithAggregatesFilter<"KudoMedia"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KudoMedia"> | Date | string;
};
export type KudoMediaCreateInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
    kudo: Prisma.KudoCreateNestedOneWithoutMediaInput;
};
export type KudoMediaUncheckedCreateInput = {
    id?: string;
    kudoId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
};
export type KudoMediaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kudo?: Prisma.KudoUpdateOneRequiredWithoutMediaNestedInput;
};
export type KudoMediaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaCreateManyInput = {
    id?: string;
    kudoId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
};
export type KudoMediaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kudoId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaListRelationFilter = {
    every?: Prisma.KudoMediaWhereInput;
    some?: Prisma.KudoMediaWhereInput;
    none?: Prisma.KudoMediaWhereInput;
};
export type KudoMediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KudoMediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoMediaAvgOrderByAggregateInput = {
    durationSeconds?: Prisma.SortOrder;
};
export type KudoMediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoMediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kudoId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KudoMediaSumOrderByAggregateInput = {
    durationSeconds?: Prisma.SortOrder;
};
export type KudoMediaCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput> | Prisma.KudoMediaCreateWithoutKudoInput[] | Prisma.KudoMediaUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoMediaCreateOrConnectWithoutKudoInput | Prisma.KudoMediaCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoMediaCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
};
export type KudoMediaUncheckedCreateNestedManyWithoutKudoInput = {
    create?: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput> | Prisma.KudoMediaCreateWithoutKudoInput[] | Prisma.KudoMediaUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoMediaCreateOrConnectWithoutKudoInput | Prisma.KudoMediaCreateOrConnectWithoutKudoInput[];
    createMany?: Prisma.KudoMediaCreateManyKudoInputEnvelope;
    connect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
};
export type KudoMediaUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput> | Prisma.KudoMediaCreateWithoutKudoInput[] | Prisma.KudoMediaUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoMediaCreateOrConnectWithoutKudoInput | Prisma.KudoMediaCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoMediaUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoMediaUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoMediaCreateManyKudoInputEnvelope;
    set?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    disconnect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    delete?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    connect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    update?: Prisma.KudoMediaUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoMediaUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoMediaUpdateManyWithWhereWithoutKudoInput | Prisma.KudoMediaUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoMediaScalarWhereInput | Prisma.KudoMediaScalarWhereInput[];
};
export type KudoMediaUncheckedUpdateManyWithoutKudoNestedInput = {
    create?: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput> | Prisma.KudoMediaCreateWithoutKudoInput[] | Prisma.KudoMediaUncheckedCreateWithoutKudoInput[];
    connectOrCreate?: Prisma.KudoMediaCreateOrConnectWithoutKudoInput | Prisma.KudoMediaCreateOrConnectWithoutKudoInput[];
    upsert?: Prisma.KudoMediaUpsertWithWhereUniqueWithoutKudoInput | Prisma.KudoMediaUpsertWithWhereUniqueWithoutKudoInput[];
    createMany?: Prisma.KudoMediaCreateManyKudoInputEnvelope;
    set?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    disconnect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    delete?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    connect?: Prisma.KudoMediaWhereUniqueInput | Prisma.KudoMediaWhereUniqueInput[];
    update?: Prisma.KudoMediaUpdateWithWhereUniqueWithoutKudoInput | Prisma.KudoMediaUpdateWithWhereUniqueWithoutKudoInput[];
    updateMany?: Prisma.KudoMediaUpdateManyWithWhereWithoutKudoInput | Prisma.KudoMediaUpdateManyWithWhereWithoutKudoInput[];
    deleteMany?: Prisma.KudoMediaScalarWhereInput | Prisma.KudoMediaScalarWhereInput[];
};
export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type KudoMediaCreateWithoutKudoInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
};
export type KudoMediaUncheckedCreateWithoutKudoInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
};
export type KudoMediaCreateOrConnectWithoutKudoInput = {
    where: Prisma.KudoMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput>;
};
export type KudoMediaCreateManyKudoInputEnvelope = {
    data: Prisma.KudoMediaCreateManyKudoInput | Prisma.KudoMediaCreateManyKudoInput[];
    skipDuplicates?: boolean;
};
export type KudoMediaUpsertWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoMediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.KudoMediaUpdateWithoutKudoInput, Prisma.KudoMediaUncheckedUpdateWithoutKudoInput>;
    create: Prisma.XOR<Prisma.KudoMediaCreateWithoutKudoInput, Prisma.KudoMediaUncheckedCreateWithoutKudoInput>;
};
export type KudoMediaUpdateWithWhereUniqueWithoutKudoInput = {
    where: Prisma.KudoMediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.KudoMediaUpdateWithoutKudoInput, Prisma.KudoMediaUncheckedUpdateWithoutKudoInput>;
};
export type KudoMediaUpdateManyWithWhereWithoutKudoInput = {
    where: Prisma.KudoMediaScalarWhereInput;
    data: Prisma.XOR<Prisma.KudoMediaUpdateManyMutationInput, Prisma.KudoMediaUncheckedUpdateManyWithoutKudoInput>;
};
export type KudoMediaScalarWhereInput = {
    AND?: Prisma.KudoMediaScalarWhereInput | Prisma.KudoMediaScalarWhereInput[];
    OR?: Prisma.KudoMediaScalarWhereInput[];
    NOT?: Prisma.KudoMediaScalarWhereInput | Prisma.KudoMediaScalarWhereInput[];
    id?: Prisma.StringFilter<"KudoMedia"> | string;
    kudoId?: Prisma.StringFilter<"KudoMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"KudoMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"KudoMedia"> | string;
    durationSeconds?: Prisma.IntNullableFilter<"KudoMedia"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"KudoMedia"> | Date | string;
};
export type KudoMediaCreateManyKudoInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    durationSeconds?: number | null;
    createdAt?: Date | string;
};
export type KudoMediaUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaUncheckedUpdateWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaUncheckedUpdateManyWithoutKudoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    durationSeconds?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KudoMediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoMedia"]>;
export type KudoMediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoMedia"]>;
export type KudoMediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kudoId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kudoMedia"]>;
export type KudoMediaSelectScalar = {
    id?: boolean;
    kudoId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
};
export type KudoMediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kudoId" | "mediaType" | "mediaUrl" | "durationSeconds" | "createdAt", ExtArgs["result"]["kudoMedia"]>;
export type KudoMediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
};
export type KudoMediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
};
export type KudoMediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    kudo?: boolean | Prisma.KudoDefaultArgs<ExtArgs>;
};
export type $KudoMediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KudoMedia";
    objects: {
        kudo: Prisma.$KudoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kudoId: string;
        mediaType: $Enums.MediaType;
        mediaUrl: string;
        durationSeconds: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["kudoMedia"]>;
    composites: {};
};
export type KudoMediaGetPayload<S extends boolean | null | undefined | KudoMediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload, S>;
export type KudoMediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KudoMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KudoMediaCountAggregateInputType | true;
};
export interface KudoMediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KudoMedia'];
        meta: {
            name: 'KudoMedia';
        };
    };
    findUnique<T extends KudoMediaFindUniqueArgs>(args: Prisma.SelectSubset<T, KudoMediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KudoMediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KudoMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KudoMediaFindFirstArgs>(args?: Prisma.SelectSubset<T, KudoMediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KudoMediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KudoMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KudoMediaFindManyArgs>(args?: Prisma.SelectSubset<T, KudoMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KudoMediaCreateArgs>(args: Prisma.SelectSubset<T, KudoMediaCreateArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KudoMediaCreateManyArgs>(args?: Prisma.SelectSubset<T, KudoMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KudoMediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KudoMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KudoMediaDeleteArgs>(args: Prisma.SelectSubset<T, KudoMediaDeleteArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KudoMediaUpdateArgs>(args: Prisma.SelectSubset<T, KudoMediaUpdateArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KudoMediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, KudoMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KudoMediaUpdateManyArgs>(args: Prisma.SelectSubset<T, KudoMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KudoMediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KudoMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KudoMediaUpsertArgs>(args: Prisma.SelectSubset<T, KudoMediaUpsertArgs<ExtArgs>>): Prisma.Prisma__KudoMediaClient<runtime.Types.Result.GetResult<Prisma.$KudoMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KudoMediaCountArgs>(args?: Prisma.Subset<T, KudoMediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KudoMediaCountAggregateOutputType> : number>;
    aggregate<T extends KudoMediaAggregateArgs>(args: Prisma.Subset<T, KudoMediaAggregateArgs>): Prisma.PrismaPromise<GetKudoMediaAggregateType<T>>;
    groupBy<T extends KudoMediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KudoMediaGroupByArgs['orderBy'];
    } : {
        orderBy?: KudoMediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KudoMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KudoMediaFieldRefs;
}
export interface Prisma__KudoMediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    kudo<T extends Prisma.KudoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoDefaultArgs<ExtArgs>>): Prisma.Prisma__KudoClient<runtime.Types.Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KudoMediaFieldRefs {
    readonly id: Prisma.FieldRef<"KudoMedia", 'String'>;
    readonly kudoId: Prisma.FieldRef<"KudoMedia", 'String'>;
    readonly mediaType: Prisma.FieldRef<"KudoMedia", 'MediaType'>;
    readonly mediaUrl: Prisma.FieldRef<"KudoMedia", 'String'>;
    readonly durationSeconds: Prisma.FieldRef<"KudoMedia", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"KudoMedia", 'DateTime'>;
}
export type KudoMediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    where: Prisma.KudoMediaWhereUniqueInput;
};
export type KudoMediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    where: Prisma.KudoMediaWhereUniqueInput;
};
export type KudoMediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoMediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoMediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KudoMediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoMediaCreateInput, Prisma.KudoMediaUncheckedCreateInput>;
};
export type KudoMediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KudoMediaCreateManyInput | Prisma.KudoMediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KudoMediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    data: Prisma.KudoMediaCreateManyInput | Prisma.KudoMediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KudoMediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KudoMediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoMediaUpdateInput, Prisma.KudoMediaUncheckedUpdateInput>;
    where: Prisma.KudoMediaWhereUniqueInput;
};
export type KudoMediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KudoMediaUpdateManyMutationInput, Prisma.KudoMediaUncheckedUpdateManyInput>;
    where?: Prisma.KudoMediaWhereInput;
    limit?: number;
};
export type KudoMediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KudoMediaUpdateManyMutationInput, Prisma.KudoMediaUncheckedUpdateManyInput>;
    where?: Prisma.KudoMediaWhereInput;
    limit?: number;
    include?: Prisma.KudoMediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KudoMediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    where: Prisma.KudoMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.KudoMediaCreateInput, Prisma.KudoMediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KudoMediaUpdateInput, Prisma.KudoMediaUncheckedUpdateInput>;
};
export type KudoMediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
    where: Prisma.KudoMediaWhereUniqueInput;
};
export type KudoMediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KudoMediaWhereInput;
    limit?: number;
};
export type KudoMediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KudoMediaSelect<ExtArgs> | null;
    omit?: Prisma.KudoMediaOmit<ExtArgs> | null;
    include?: Prisma.KudoMediaInclude<ExtArgs> | null;
};
