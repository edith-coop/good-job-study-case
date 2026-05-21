import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CommentMediaModel = runtime.Types.Result.DefaultSelection<Prisma.$CommentMediaPayload>;
export type AggregateCommentMedia = {
    _count: CommentMediaCountAggregateOutputType | null;
    _min: CommentMediaMinAggregateOutputType | null;
    _max: CommentMediaMaxAggregateOutputType | null;
};
export type CommentMediaMinAggregateOutputType = {
    id: string | null;
    commentId: string | null;
    mediaType: $Enums.MediaType | null;
    mediaUrl: string | null;
    createdAt: Date | null;
};
export type CommentMediaMaxAggregateOutputType = {
    id: string | null;
    commentId: string | null;
    mediaType: $Enums.MediaType | null;
    mediaUrl: string | null;
    createdAt: Date | null;
};
export type CommentMediaCountAggregateOutputType = {
    id: number;
    commentId: number;
    mediaType: number;
    mediaUrl: number;
    createdAt: number;
    _all: number;
};
export type CommentMediaMinAggregateInputType = {
    id?: true;
    commentId?: true;
    mediaType?: true;
    mediaUrl?: true;
    createdAt?: true;
};
export type CommentMediaMaxAggregateInputType = {
    id?: true;
    commentId?: true;
    mediaType?: true;
    mediaUrl?: true;
    createdAt?: true;
};
export type CommentMediaCountAggregateInputType = {
    id?: true;
    commentId?: true;
    mediaType?: true;
    mediaUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type CommentMediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentMediaWhereInput;
    orderBy?: Prisma.CommentMediaOrderByWithRelationInput | Prisma.CommentMediaOrderByWithRelationInput[];
    cursor?: Prisma.CommentMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentMediaCountAggregateInputType;
    _min?: CommentMediaMinAggregateInputType;
    _max?: CommentMediaMaxAggregateInputType;
};
export type GetCommentMediaAggregateType<T extends CommentMediaAggregateArgs> = {
    [P in keyof T & keyof AggregateCommentMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommentMedia[P]> : Prisma.GetScalarType<T[P], AggregateCommentMedia[P]>;
};
export type CommentMediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentMediaWhereInput;
    orderBy?: Prisma.CommentMediaOrderByWithAggregationInput | Prisma.CommentMediaOrderByWithAggregationInput[];
    by: Prisma.CommentMediaScalarFieldEnum[] | Prisma.CommentMediaScalarFieldEnum;
    having?: Prisma.CommentMediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentMediaCountAggregateInputType | true;
    _min?: CommentMediaMinAggregateInputType;
    _max?: CommentMediaMaxAggregateInputType;
};
export type CommentMediaGroupByOutputType = {
    id: string;
    commentId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt: Date;
    _count: CommentMediaCountAggregateOutputType | null;
    _min: CommentMediaMinAggregateOutputType | null;
    _max: CommentMediaMaxAggregateOutputType | null;
};
export type GetCommentMediaGroupByPayload<T extends CommentMediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentMediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentMediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentMediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentMediaGroupByOutputType[P]>;
}>>;
export type CommentMediaWhereInput = {
    AND?: Prisma.CommentMediaWhereInput | Prisma.CommentMediaWhereInput[];
    OR?: Prisma.CommentMediaWhereInput[];
    NOT?: Prisma.CommentMediaWhereInput | Prisma.CommentMediaWhereInput[];
    id?: Prisma.StringFilter<"CommentMedia"> | string;
    commentId?: Prisma.StringFilter<"CommentMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"CommentMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"CommentMedia"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommentMedia"> | Date | string;
    comment?: Prisma.XOR<Prisma.KudoCommentScalarRelationFilter, Prisma.KudoCommentWhereInput>;
};
export type CommentMediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    commentId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    comment?: Prisma.KudoCommentOrderByWithRelationInput;
};
export type CommentMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CommentMediaWhereInput | Prisma.CommentMediaWhereInput[];
    OR?: Prisma.CommentMediaWhereInput[];
    NOT?: Prisma.CommentMediaWhereInput | Prisma.CommentMediaWhereInput[];
    commentId?: Prisma.StringFilter<"CommentMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"CommentMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"CommentMedia"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommentMedia"> | Date | string;
    comment?: Prisma.XOR<Prisma.KudoCommentScalarRelationFilter, Prisma.KudoCommentWhereInput>;
}, "id">;
export type CommentMediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    commentId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CommentMediaCountOrderByAggregateInput;
    _max?: Prisma.CommentMediaMaxOrderByAggregateInput;
    _min?: Prisma.CommentMediaMinOrderByAggregateInput;
};
export type CommentMediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommentMediaScalarWhereWithAggregatesInput | Prisma.CommentMediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommentMediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommentMediaScalarWhereWithAggregatesInput | Prisma.CommentMediaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommentMedia"> | string;
    commentId?: Prisma.StringWithAggregatesFilter<"CommentMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeWithAggregatesFilter<"CommentMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringWithAggregatesFilter<"CommentMedia"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CommentMedia"> | Date | string;
};
export type CommentMediaCreateInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
    comment: Prisma.KudoCommentCreateNestedOneWithoutMediaInput;
};
export type CommentMediaUncheckedCreateInput = {
    id?: string;
    commentId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
};
export type CommentMediaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comment?: Prisma.KudoCommentUpdateOneRequiredWithoutMediaNestedInput;
};
export type CommentMediaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commentId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaCreateManyInput = {
    id?: string;
    commentId: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
};
export type CommentMediaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commentId?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaListRelationFilter = {
    every?: Prisma.CommentMediaWhereInput;
    some?: Prisma.CommentMediaWhereInput;
    none?: Prisma.CommentMediaWhereInput;
};
export type CommentMediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommentMediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commentId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentMediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commentId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentMediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commentId?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommentMediaCreateNestedManyWithoutCommentInput = {
    create?: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput> | Prisma.CommentMediaCreateWithoutCommentInput[] | Prisma.CommentMediaUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentMediaCreateOrConnectWithoutCommentInput | Prisma.CommentMediaCreateOrConnectWithoutCommentInput[];
    createMany?: Prisma.CommentMediaCreateManyCommentInputEnvelope;
    connect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
};
export type CommentMediaUncheckedCreateNestedManyWithoutCommentInput = {
    create?: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput> | Prisma.CommentMediaCreateWithoutCommentInput[] | Prisma.CommentMediaUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentMediaCreateOrConnectWithoutCommentInput | Prisma.CommentMediaCreateOrConnectWithoutCommentInput[];
    createMany?: Prisma.CommentMediaCreateManyCommentInputEnvelope;
    connect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
};
export type CommentMediaUpdateManyWithoutCommentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput> | Prisma.CommentMediaCreateWithoutCommentInput[] | Prisma.CommentMediaUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentMediaCreateOrConnectWithoutCommentInput | Prisma.CommentMediaCreateOrConnectWithoutCommentInput[];
    upsert?: Prisma.CommentMediaUpsertWithWhereUniqueWithoutCommentInput | Prisma.CommentMediaUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: Prisma.CommentMediaCreateManyCommentInputEnvelope;
    set?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    disconnect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    delete?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    connect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    update?: Prisma.CommentMediaUpdateWithWhereUniqueWithoutCommentInput | Prisma.CommentMediaUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?: Prisma.CommentMediaUpdateManyWithWhereWithoutCommentInput | Prisma.CommentMediaUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: Prisma.CommentMediaScalarWhereInput | Prisma.CommentMediaScalarWhereInput[];
};
export type CommentMediaUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput> | Prisma.CommentMediaCreateWithoutCommentInput[] | Prisma.CommentMediaUncheckedCreateWithoutCommentInput[];
    connectOrCreate?: Prisma.CommentMediaCreateOrConnectWithoutCommentInput | Prisma.CommentMediaCreateOrConnectWithoutCommentInput[];
    upsert?: Prisma.CommentMediaUpsertWithWhereUniqueWithoutCommentInput | Prisma.CommentMediaUpsertWithWhereUniqueWithoutCommentInput[];
    createMany?: Prisma.CommentMediaCreateManyCommentInputEnvelope;
    set?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    disconnect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    delete?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    connect?: Prisma.CommentMediaWhereUniqueInput | Prisma.CommentMediaWhereUniqueInput[];
    update?: Prisma.CommentMediaUpdateWithWhereUniqueWithoutCommentInput | Prisma.CommentMediaUpdateWithWhereUniqueWithoutCommentInput[];
    updateMany?: Prisma.CommentMediaUpdateManyWithWhereWithoutCommentInput | Prisma.CommentMediaUpdateManyWithWhereWithoutCommentInput[];
    deleteMany?: Prisma.CommentMediaScalarWhereInput | Prisma.CommentMediaScalarWhereInput[];
};
export type CommentMediaCreateWithoutCommentInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
};
export type CommentMediaUncheckedCreateWithoutCommentInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
};
export type CommentMediaCreateOrConnectWithoutCommentInput = {
    where: Prisma.CommentMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput>;
};
export type CommentMediaCreateManyCommentInputEnvelope = {
    data: Prisma.CommentMediaCreateManyCommentInput | Prisma.CommentMediaCreateManyCommentInput[];
    skipDuplicates?: boolean;
};
export type CommentMediaUpsertWithWhereUniqueWithoutCommentInput = {
    where: Prisma.CommentMediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommentMediaUpdateWithoutCommentInput, Prisma.CommentMediaUncheckedUpdateWithoutCommentInput>;
    create: Prisma.XOR<Prisma.CommentMediaCreateWithoutCommentInput, Prisma.CommentMediaUncheckedCreateWithoutCommentInput>;
};
export type CommentMediaUpdateWithWhereUniqueWithoutCommentInput = {
    where: Prisma.CommentMediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommentMediaUpdateWithoutCommentInput, Prisma.CommentMediaUncheckedUpdateWithoutCommentInput>;
};
export type CommentMediaUpdateManyWithWhereWithoutCommentInput = {
    where: Prisma.CommentMediaScalarWhereInput;
    data: Prisma.XOR<Prisma.CommentMediaUpdateManyMutationInput, Prisma.CommentMediaUncheckedUpdateManyWithoutCommentInput>;
};
export type CommentMediaScalarWhereInput = {
    AND?: Prisma.CommentMediaScalarWhereInput | Prisma.CommentMediaScalarWhereInput[];
    OR?: Prisma.CommentMediaScalarWhereInput[];
    NOT?: Prisma.CommentMediaScalarWhereInput | Prisma.CommentMediaScalarWhereInput[];
    id?: Prisma.StringFilter<"CommentMedia"> | string;
    commentId?: Prisma.StringFilter<"CommentMedia"> | string;
    mediaType?: Prisma.EnumMediaTypeFilter<"CommentMedia"> | $Enums.MediaType;
    mediaUrl?: Prisma.StringFilter<"CommentMedia"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommentMedia"> | Date | string;
};
export type CommentMediaCreateManyCommentInput = {
    id?: string;
    mediaType: $Enums.MediaType;
    mediaUrl: string;
    createdAt?: Date | string;
};
export type CommentMediaUpdateWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaUncheckedUpdateWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaUncheckedUpdateManyWithoutCommentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommentMediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commentId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    createdAt?: boolean;
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentMedia"]>;
export type CommentMediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commentId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    createdAt?: boolean;
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentMedia"]>;
export type CommentMediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commentId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    createdAt?: boolean;
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commentMedia"]>;
export type CommentMediaSelectScalar = {
    id?: boolean;
    commentId?: boolean;
    mediaType?: boolean;
    mediaUrl?: boolean;
    createdAt?: boolean;
};
export type CommentMediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "commentId" | "mediaType" | "mediaUrl" | "createdAt", ExtArgs["result"]["commentMedia"]>;
export type CommentMediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
};
export type CommentMediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
};
export type CommentMediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment?: boolean | Prisma.KudoCommentDefaultArgs<ExtArgs>;
};
export type $CommentMediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommentMedia";
    objects: {
        comment: Prisma.$KudoCommentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        commentId: string;
        mediaType: $Enums.MediaType;
        mediaUrl: string;
        createdAt: Date;
    }, ExtArgs["result"]["commentMedia"]>;
    composites: {};
};
export type CommentMediaGetPayload<S extends boolean | null | undefined | CommentMediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload, S>;
export type CommentMediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommentMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentMediaCountAggregateInputType | true;
};
export interface CommentMediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommentMedia'];
        meta: {
            name: 'CommentMedia';
        };
    };
    findUnique<T extends CommentMediaFindUniqueArgs>(args: Prisma.SelectSubset<T, CommentMediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CommentMediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommentMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CommentMediaFindFirstArgs>(args?: Prisma.SelectSubset<T, CommentMediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CommentMediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommentMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CommentMediaFindManyArgs>(args?: Prisma.SelectSubset<T, CommentMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CommentMediaCreateArgs>(args: Prisma.SelectSubset<T, CommentMediaCreateArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CommentMediaCreateManyArgs>(args?: Prisma.SelectSubset<T, CommentMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CommentMediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommentMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CommentMediaDeleteArgs>(args: Prisma.SelectSubset<T, CommentMediaDeleteArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CommentMediaUpdateArgs>(args: Prisma.SelectSubset<T, CommentMediaUpdateArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CommentMediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommentMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CommentMediaUpdateManyArgs>(args: Prisma.SelectSubset<T, CommentMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CommentMediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommentMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CommentMediaUpsertArgs>(args: Prisma.SelectSubset<T, CommentMediaUpsertArgs<ExtArgs>>): Prisma.Prisma__CommentMediaClient<runtime.Types.Result.GetResult<Prisma.$CommentMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CommentMediaCountArgs>(args?: Prisma.Subset<T, CommentMediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentMediaCountAggregateOutputType> : number>;
    aggregate<T extends CommentMediaAggregateArgs>(args: Prisma.Subset<T, CommentMediaAggregateArgs>): Prisma.PrismaPromise<GetCommentMediaAggregateType<T>>;
    groupBy<T extends CommentMediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommentMediaGroupByArgs['orderBy'];
    } : {
        orderBy?: CommentMediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommentMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CommentMediaFieldRefs;
}
export interface Prisma__CommentMediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comment<T extends Prisma.KudoCommentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KudoCommentDefaultArgs<ExtArgs>>): Prisma.Prisma__KudoCommentClient<runtime.Types.Result.GetResult<Prisma.$KudoCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CommentMediaFieldRefs {
    readonly id: Prisma.FieldRef<"CommentMedia", 'String'>;
    readonly commentId: Prisma.FieldRef<"CommentMedia", 'String'>;
    readonly mediaType: Prisma.FieldRef<"CommentMedia", 'MediaType'>;
    readonly mediaUrl: Prisma.FieldRef<"CommentMedia", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CommentMedia", 'DateTime'>;
}
export type CommentMediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    where: Prisma.CommentMediaWhereUniqueInput;
};
export type CommentMediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    where: Prisma.CommentMediaWhereUniqueInput;
};
export type CommentMediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CommentMediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CommentMediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CommentMediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentMediaCreateInput, Prisma.CommentMediaUncheckedCreateInput>;
};
export type CommentMediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CommentMediaCreateManyInput | Prisma.CommentMediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CommentMediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    data: Prisma.CommentMediaCreateManyInput | Prisma.CommentMediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CommentMediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CommentMediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentMediaUpdateInput, Prisma.CommentMediaUncheckedUpdateInput>;
    where: Prisma.CommentMediaWhereUniqueInput;
};
export type CommentMediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CommentMediaUpdateManyMutationInput, Prisma.CommentMediaUncheckedUpdateManyInput>;
    where?: Prisma.CommentMediaWhereInput;
    limit?: number;
};
export type CommentMediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CommentMediaUpdateManyMutationInput, Prisma.CommentMediaUncheckedUpdateManyInput>;
    where?: Prisma.CommentMediaWhereInput;
    limit?: number;
    include?: Prisma.CommentMediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CommentMediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    where: Prisma.CommentMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommentMediaCreateInput, Prisma.CommentMediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CommentMediaUpdateInput, Prisma.CommentMediaUncheckedUpdateInput>;
};
export type CommentMediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
    where: Prisma.CommentMediaWhereUniqueInput;
};
export type CommentMediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentMediaWhereInput;
    limit?: number;
};
export type CommentMediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentMediaSelect<ExtArgs> | null;
    omit?: Prisma.CommentMediaOmit<ExtArgs> | null;
    include?: Prisma.CommentMediaInclude<ExtArgs> | null;
};
