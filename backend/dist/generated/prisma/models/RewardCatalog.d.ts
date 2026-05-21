import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RewardCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$RewardCatalogPayload>;
export type AggregateRewardCatalog = {
    _count: RewardCatalogCountAggregateOutputType | null;
    _avg: RewardCatalogAvgAggregateOutputType | null;
    _sum: RewardCatalogSumAggregateOutputType | null;
    _min: RewardCatalogMinAggregateOutputType | null;
    _max: RewardCatalogMaxAggregateOutputType | null;
};
export type RewardCatalogAvgAggregateOutputType = {
    costPoints: number | null;
    stockQuantity: number | null;
};
export type RewardCatalogSumAggregateOutputType = {
    costPoints: number | null;
    stockQuantity: number | null;
};
export type RewardCatalogMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    costPoints: number | null;
    stockQuantity: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardCatalogMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    costPoints: number | null;
    stockQuantity: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardCatalogCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    costPoints: number;
    stockQuantity: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RewardCatalogAvgAggregateInputType = {
    costPoints?: true;
    stockQuantity?: true;
};
export type RewardCatalogSumAggregateInputType = {
    costPoints?: true;
    stockQuantity?: true;
};
export type RewardCatalogMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    costPoints?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardCatalogMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    costPoints?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardCatalogCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    costPoints?: true;
    stockQuantity?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RewardCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewardCatalogCountAggregateInputType;
    _avg?: RewardCatalogAvgAggregateInputType;
    _sum?: RewardCatalogSumAggregateInputType;
    _min?: RewardCatalogMinAggregateInputType;
    _max?: RewardCatalogMaxAggregateInputType;
};
export type GetRewardCatalogAggregateType<T extends RewardCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateRewardCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewardCatalog[P]> : Prisma.GetScalarType<T[P], AggregateRewardCatalog[P]>;
};
export type RewardCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithAggregationInput | Prisma.RewardCatalogOrderByWithAggregationInput[];
    by: Prisma.RewardCatalogScalarFieldEnum[] | Prisma.RewardCatalogScalarFieldEnum;
    having?: Prisma.RewardCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewardCatalogCountAggregateInputType | true;
    _avg?: RewardCatalogAvgAggregateInputType;
    _sum?: RewardCatalogSumAggregateInputType;
    _min?: RewardCatalogMinAggregateInputType;
    _max?: RewardCatalogMaxAggregateInputType;
};
export type RewardCatalogGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    costPoints: number;
    stockQuantity: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: RewardCatalogCountAggregateOutputType | null;
    _avg: RewardCatalogAvgAggregateOutputType | null;
    _sum: RewardCatalogSumAggregateOutputType | null;
    _min: RewardCatalogMinAggregateOutputType | null;
    _max: RewardCatalogMaxAggregateOutputType | null;
};
export type GetRewardCatalogGroupByPayload<T extends RewardCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewardCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewardCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewardCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewardCatalogGroupByOutputType[P]>;
}>>;
export type RewardCatalogWhereInput = {
    AND?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    OR?: Prisma.RewardCatalogWhereInput[];
    NOT?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    id?: Prisma.StringFilter<"RewardCatalog"> | string;
    title?: Prisma.StringFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    costPoints?: Prisma.IntFilter<"RewardCatalog"> | number;
    stockQuantity?: Prisma.IntFilter<"RewardCatalog"> | number;
    isActive?: Prisma.BoolFilter<"RewardCatalog"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    redemptions?: Prisma.RewardRedemptionListRelationFilter;
};
export type RewardCatalogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    redemptions?: Prisma.RewardRedemptionOrderByRelationAggregateInput;
};
export type RewardCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    OR?: Prisma.RewardCatalogWhereInput[];
    NOT?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    title?: Prisma.StringFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    costPoints?: Prisma.IntFilter<"RewardCatalog"> | number;
    stockQuantity?: Prisma.IntFilter<"RewardCatalog"> | number;
    isActive?: Prisma.BoolFilter<"RewardCatalog"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    redemptions?: Prisma.RewardRedemptionListRelationFilter;
}, "id">;
export type RewardCatalogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RewardCatalogCountOrderByAggregateInput;
    _avg?: Prisma.RewardCatalogAvgOrderByAggregateInput;
    _max?: Prisma.RewardCatalogMaxOrderByAggregateInput;
    _min?: Prisma.RewardCatalogMinOrderByAggregateInput;
    _sum?: Prisma.RewardCatalogSumOrderByAggregateInput;
};
export type RewardCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewardCatalogScalarWhereWithAggregatesInput | Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewardCatalogScalarWhereWithAggregatesInput | Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RewardCatalog"> | string;
    title?: Prisma.StringWithAggregatesFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"RewardCatalog"> | string | null;
    costPoints?: Prisma.IntWithAggregatesFilter<"RewardCatalog"> | number;
    stockQuantity?: Prisma.IntWithAggregatesFilter<"RewardCatalog"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"RewardCatalog"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RewardCatalog"> | Date | string;
};
export type RewardCatalogCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    costPoints: number;
    stockQuantity?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    redemptions?: Prisma.RewardRedemptionCreateNestedManyWithoutRewardInput;
};
export type RewardCatalogUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    costPoints: number;
    stockQuantity?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    redemptions?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput;
};
export type RewardCatalogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    redemptions?: Prisma.RewardRedemptionUpdateManyWithoutRewardNestedInput;
};
export type RewardCatalogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    redemptions?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput;
};
export type RewardCatalogCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    costPoints: number;
    stockQuantity?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogAvgOrderByAggregateInput = {
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type RewardCatalogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogSumOrderByAggregateInput = {
    costPoints?: Prisma.SortOrder;
    stockQuantity?: Prisma.SortOrder;
};
export type RewardCatalogScalarRelationFilter = {
    is?: Prisma.RewardCatalogWhereInput;
    isNot?: Prisma.RewardCatalogWhereInput;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type RewardCatalogCreateNestedOneWithoutRedemptionsInput = {
    create?: Prisma.XOR<Prisma.RewardCatalogCreateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedCreateWithoutRedemptionsInput>;
    connectOrCreate?: Prisma.RewardCatalogCreateOrConnectWithoutRedemptionsInput;
    connect?: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: Prisma.XOR<Prisma.RewardCatalogCreateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedCreateWithoutRedemptionsInput>;
    connectOrCreate?: Prisma.RewardCatalogCreateOrConnectWithoutRedemptionsInput;
    upsert?: Prisma.RewardCatalogUpsertWithoutRedemptionsInput;
    connect?: Prisma.RewardCatalogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RewardCatalogUpdateToOneWithWhereWithoutRedemptionsInput, Prisma.RewardCatalogUpdateWithoutRedemptionsInput>, Prisma.RewardCatalogUncheckedUpdateWithoutRedemptionsInput>;
};
export type RewardCatalogCreateWithoutRedemptionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    costPoints: number;
    stockQuantity?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogUncheckedCreateWithoutRedemptionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    costPoints: number;
    stockQuantity?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogCreateOrConnectWithoutRedemptionsInput = {
    where: Prisma.RewardCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardCatalogCreateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedCreateWithoutRedemptionsInput>;
};
export type RewardCatalogUpsertWithoutRedemptionsInput = {
    update: Prisma.XOR<Prisma.RewardCatalogUpdateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedUpdateWithoutRedemptionsInput>;
    create: Prisma.XOR<Prisma.RewardCatalogCreateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedCreateWithoutRedemptionsInput>;
    where?: Prisma.RewardCatalogWhereInput;
};
export type RewardCatalogUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: Prisma.RewardCatalogWhereInput;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateWithoutRedemptionsInput, Prisma.RewardCatalogUncheckedUpdateWithoutRedemptionsInput>;
};
export type RewardCatalogUpdateWithoutRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogUncheckedUpdateWithoutRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    stockQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogCountOutputType = {
    redemptions: number;
};
export type RewardCatalogCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    redemptions?: boolean | RewardCatalogCountOutputTypeCountRedemptionsArgs;
};
export type RewardCatalogCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogCountOutputTypeSelect<ExtArgs> | null;
};
export type RewardCatalogCountOutputTypeCountRedemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
};
export type RewardCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    costPoints?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    redemptions?: boolean | Prisma.RewardCatalog$redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardCatalogCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    costPoints?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    costPoints?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    costPoints?: boolean;
    stockQuantity?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RewardCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "costPoints" | "stockQuantity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    redemptions?: boolean | Prisma.RewardCatalog$redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardCatalogCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RewardCatalogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RewardCatalogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RewardCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RewardCatalog";
    objects: {
        redemptions: Prisma.$RewardRedemptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        costPoints: number;
        stockQuantity: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rewardCatalog"]>;
    composites: {};
};
export type RewardCatalogGetPayload<S extends boolean | null | undefined | RewardCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload, S>;
export type RewardCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewardCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewardCatalogCountAggregateInputType | true;
};
export interface RewardCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RewardCatalog'];
        meta: {
            name: 'RewardCatalog';
        };
    };
    findUnique<T extends RewardCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, RewardCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewardCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewardCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewardCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewardCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewardCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewardCatalogCreateArgs>(args: Prisma.SelectSubset<T, RewardCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewardCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewardCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewardCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewardCatalogDeleteArgs>(args: Prisma.SelectSubset<T, RewardCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewardCatalogUpdateArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewardCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewardCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewardCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewardCatalogUpsertArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewardCatalogCountArgs>(args?: Prisma.Subset<T, RewardCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewardCatalogCountAggregateOutputType> : number>;
    aggregate<T extends RewardCatalogAggregateArgs>(args: Prisma.Subset<T, RewardCatalogAggregateArgs>): Prisma.PrismaPromise<GetRewardCatalogAggregateType<T>>;
    groupBy<T extends RewardCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewardCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: RewardCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewardCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewardCatalogFieldRefs;
}
export interface Prisma__RewardCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    redemptions<T extends Prisma.RewardCatalog$redemptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RewardCatalog$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewardCatalogFieldRefs {
    readonly id: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly title: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly description: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly costPoints: Prisma.FieldRef<"RewardCatalog", 'Int'>;
    readonly stockQuantity: Prisma.FieldRef<"RewardCatalog", 'Int'>;
    readonly isActive: Prisma.FieldRef<"RewardCatalog", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
}
export type RewardCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogCreateInput, Prisma.RewardCatalogUncheckedCreateInput>;
};
export type RewardCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewardCatalogCreateManyInput | Prisma.RewardCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    data: Prisma.RewardCatalogCreateManyInput | Prisma.RewardCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateInput, Prisma.RewardCatalogUncheckedUpdateInput>;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewardCatalogUpdateManyMutationInput, Prisma.RewardCatalogUncheckedUpdateManyInput>;
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateManyMutationInput, Prisma.RewardCatalogUncheckedUpdateManyInput>;
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardCatalogCreateInput, Prisma.RewardCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewardCatalogUpdateInput, Prisma.RewardCatalogUncheckedUpdateInput>;
};
export type RewardCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalog$redemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RewardCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
};
