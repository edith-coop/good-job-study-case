import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Kudo: "Kudo";
    readonly KudoTag: "KudoTag";
    readonly KudoMedia: "KudoMedia";
    readonly KudoReaction: "KudoReaction";
    readonly KudoComment: "KudoComment";
    readonly CommentMedia: "CommentMedia";
    readonly RewardCatalog: "RewardCatalog";
    readonly RewardRedemption: "RewardRedemption";
    readonly PointLedger: "PointLedger";
    readonly Notification: "Notification";
    readonly MonthlyGivingBudget: "MonthlyGivingBudget";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "kudo" | "kudoTag" | "kudoMedia" | "kudoReaction" | "kudoComment" | "commentMedia" | "rewardCatalog" | "rewardRedemption" | "pointLedger" | "notification" | "monthlyGivingBudget";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Kudo: {
            payload: Prisma.$KudoPayload<ExtArgs>;
            fields: Prisma.KudoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KudoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KudoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                findFirst: {
                    args: Prisma.KudoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KudoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                findMany: {
                    args: Prisma.KudoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>[];
                };
                create: {
                    args: Prisma.KudoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                createMany: {
                    args: Prisma.KudoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KudoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>[];
                };
                delete: {
                    args: Prisma.KudoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                update: {
                    args: Prisma.KudoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                deleteMany: {
                    args: Prisma.KudoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KudoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KudoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>[];
                };
                upsert: {
                    args: Prisma.KudoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoPayload>;
                };
                aggregate: {
                    args: Prisma.KudoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKudo>;
                };
                groupBy: {
                    args: Prisma.KudoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KudoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoCountAggregateOutputType> | number;
                };
            };
        };
        KudoTag: {
            payload: Prisma.$KudoTagPayload<ExtArgs>;
            fields: Prisma.KudoTagFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KudoTagFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KudoTagFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                findFirst: {
                    args: Prisma.KudoTagFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KudoTagFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                findMany: {
                    args: Prisma.KudoTagFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>[];
                };
                create: {
                    args: Prisma.KudoTagCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                createMany: {
                    args: Prisma.KudoTagCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KudoTagCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>[];
                };
                delete: {
                    args: Prisma.KudoTagDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                update: {
                    args: Prisma.KudoTagUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                deleteMany: {
                    args: Prisma.KudoTagDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KudoTagUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KudoTagUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>[];
                };
                upsert: {
                    args: Prisma.KudoTagUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoTagPayload>;
                };
                aggregate: {
                    args: Prisma.KudoTagAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKudoTag>;
                };
                groupBy: {
                    args: Prisma.KudoTagGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoTagGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KudoTagCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoTagCountAggregateOutputType> | number;
                };
            };
        };
        KudoMedia: {
            payload: Prisma.$KudoMediaPayload<ExtArgs>;
            fields: Prisma.KudoMediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KudoMediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KudoMediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                findFirst: {
                    args: Prisma.KudoMediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KudoMediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                findMany: {
                    args: Prisma.KudoMediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>[];
                };
                create: {
                    args: Prisma.KudoMediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                createMany: {
                    args: Prisma.KudoMediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KudoMediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>[];
                };
                delete: {
                    args: Prisma.KudoMediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                update: {
                    args: Prisma.KudoMediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                deleteMany: {
                    args: Prisma.KudoMediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KudoMediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KudoMediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>[];
                };
                upsert: {
                    args: Prisma.KudoMediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoMediaPayload>;
                };
                aggregate: {
                    args: Prisma.KudoMediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKudoMedia>;
                };
                groupBy: {
                    args: Prisma.KudoMediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoMediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KudoMediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoMediaCountAggregateOutputType> | number;
                };
            };
        };
        KudoReaction: {
            payload: Prisma.$KudoReactionPayload<ExtArgs>;
            fields: Prisma.KudoReactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KudoReactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KudoReactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                findFirst: {
                    args: Prisma.KudoReactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KudoReactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                findMany: {
                    args: Prisma.KudoReactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>[];
                };
                create: {
                    args: Prisma.KudoReactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                createMany: {
                    args: Prisma.KudoReactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KudoReactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>[];
                };
                delete: {
                    args: Prisma.KudoReactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                update: {
                    args: Prisma.KudoReactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                deleteMany: {
                    args: Prisma.KudoReactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KudoReactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KudoReactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>[];
                };
                upsert: {
                    args: Prisma.KudoReactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoReactionPayload>;
                };
                aggregate: {
                    args: Prisma.KudoReactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKudoReaction>;
                };
                groupBy: {
                    args: Prisma.KudoReactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoReactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KudoReactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoReactionCountAggregateOutputType> | number;
                };
            };
        };
        KudoComment: {
            payload: Prisma.$KudoCommentPayload<ExtArgs>;
            fields: Prisma.KudoCommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KudoCommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KudoCommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                findFirst: {
                    args: Prisma.KudoCommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KudoCommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                findMany: {
                    args: Prisma.KudoCommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>[];
                };
                create: {
                    args: Prisma.KudoCommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                createMany: {
                    args: Prisma.KudoCommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KudoCommentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>[];
                };
                delete: {
                    args: Prisma.KudoCommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                update: {
                    args: Prisma.KudoCommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                deleteMany: {
                    args: Prisma.KudoCommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KudoCommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KudoCommentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>[];
                };
                upsert: {
                    args: Prisma.KudoCommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KudoCommentPayload>;
                };
                aggregate: {
                    args: Prisma.KudoCommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKudoComment>;
                };
                groupBy: {
                    args: Prisma.KudoCommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoCommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KudoCommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KudoCommentCountAggregateOutputType> | number;
                };
            };
        };
        CommentMedia: {
            payload: Prisma.$CommentMediaPayload<ExtArgs>;
            fields: Prisma.CommentMediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommentMediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommentMediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                findFirst: {
                    args: Prisma.CommentMediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommentMediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                findMany: {
                    args: Prisma.CommentMediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>[];
                };
                create: {
                    args: Prisma.CommentMediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                createMany: {
                    args: Prisma.CommentMediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommentMediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>[];
                };
                delete: {
                    args: Prisma.CommentMediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                update: {
                    args: Prisma.CommentMediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                deleteMany: {
                    args: Prisma.CommentMediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommentMediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommentMediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>[];
                };
                upsert: {
                    args: Prisma.CommentMediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommentMediaPayload>;
                };
                aggregate: {
                    args: Prisma.CommentMediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommentMedia>;
                };
                groupBy: {
                    args: Prisma.CommentMediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentMediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommentMediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentMediaCountAggregateOutputType> | number;
                };
            };
        };
        RewardCatalog: {
            payload: Prisma.$RewardCatalogPayload<ExtArgs>;
            fields: Prisma.RewardCatalogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RewardCatalogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RewardCatalogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                findFirst: {
                    args: Prisma.RewardCatalogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RewardCatalogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                findMany: {
                    args: Prisma.RewardCatalogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                create: {
                    args: Prisma.RewardCatalogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                createMany: {
                    args: Prisma.RewardCatalogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RewardCatalogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                delete: {
                    args: Prisma.RewardCatalogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                update: {
                    args: Prisma.RewardCatalogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                deleteMany: {
                    args: Prisma.RewardCatalogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RewardCatalogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RewardCatalogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                upsert: {
                    args: Prisma.RewardCatalogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                aggregate: {
                    args: Prisma.RewardCatalogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRewardCatalog>;
                };
                groupBy: {
                    args: Prisma.RewardCatalogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardCatalogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RewardCatalogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardCatalogCountAggregateOutputType> | number;
                };
            };
        };
        RewardRedemption: {
            payload: Prisma.$RewardRedemptionPayload<ExtArgs>;
            fields: Prisma.RewardRedemptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RewardRedemptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                findFirst: {
                    args: Prisma.RewardRedemptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RewardRedemptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                findMany: {
                    args: Prisma.RewardRedemptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                create: {
                    args: Prisma.RewardRedemptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                createMany: {
                    args: Prisma.RewardRedemptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RewardRedemptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                delete: {
                    args: Prisma.RewardRedemptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                update: {
                    args: Prisma.RewardRedemptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                deleteMany: {
                    args: Prisma.RewardRedemptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RewardRedemptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                upsert: {
                    args: Prisma.RewardRedemptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                aggregate: {
                    args: Prisma.RewardRedemptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRewardRedemption>;
                };
                groupBy: {
                    args: Prisma.RewardRedemptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardRedemptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RewardRedemptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardRedemptionCountAggregateOutputType> | number;
                };
            };
        };
        PointLedger: {
            payload: Prisma.$PointLedgerPayload<ExtArgs>;
            fields: Prisma.PointLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PointLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PointLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.PointLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PointLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                findMany: {
                    args: Prisma.PointLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>[];
                };
                create: {
                    args: Prisma.PointLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                createMany: {
                    args: Prisma.PointLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PointLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>[];
                };
                delete: {
                    args: Prisma.PointLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                update: {
                    args: Prisma.PointLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.PointLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PointLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PointLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.PointLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PointLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.PointLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePointLedger>;
                };
                groupBy: {
                    args: Prisma.PointLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PointLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PointLedgerCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        MonthlyGivingBudget: {
            payload: Prisma.$MonthlyGivingBudgetPayload<ExtArgs>;
            fields: Prisma.MonthlyGivingBudgetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MonthlyGivingBudgetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MonthlyGivingBudgetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                findFirst: {
                    args: Prisma.MonthlyGivingBudgetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MonthlyGivingBudgetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                findMany: {
                    args: Prisma.MonthlyGivingBudgetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>[];
                };
                create: {
                    args: Prisma.MonthlyGivingBudgetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                createMany: {
                    args: Prisma.MonthlyGivingBudgetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MonthlyGivingBudgetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>[];
                };
                delete: {
                    args: Prisma.MonthlyGivingBudgetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                update: {
                    args: Prisma.MonthlyGivingBudgetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                deleteMany: {
                    args: Prisma.MonthlyGivingBudgetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MonthlyGivingBudgetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MonthlyGivingBudgetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>[];
                };
                upsert: {
                    args: Prisma.MonthlyGivingBudgetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyGivingBudgetPayload>;
                };
                aggregate: {
                    args: Prisma.MonthlyGivingBudgetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMonthlyGivingBudget>;
                };
                groupBy: {
                    args: Prisma.MonthlyGivingBudgetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonthlyGivingBudgetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MonthlyGivingBudgetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonthlyGivingBudgetCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly fullName: "fullName";
    readonly avatarUrl: "avatarUrl";
    readonly department: "department";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const KudoScalarFieldEnum: {
    readonly id: "id";
    readonly senderId: "senderId";
    readonly receiverId: "receiverId";
    readonly type: "type";
    readonly points: "points";
    readonly coreValue: "coreValue";
    readonly message: "message";
    readonly visibility: "visibility";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type KudoScalarFieldEnum = (typeof KudoScalarFieldEnum)[keyof typeof KudoScalarFieldEnum];
export declare const KudoTagScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type KudoTagScalarFieldEnum = (typeof KudoTagScalarFieldEnum)[keyof typeof KudoTagScalarFieldEnum];
export declare const KudoMediaScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly mediaType: "mediaType";
    readonly mediaUrl: "mediaUrl";
    readonly durationSeconds: "durationSeconds";
    readonly createdAt: "createdAt";
};
export type KudoMediaScalarFieldEnum = (typeof KudoMediaScalarFieldEnum)[keyof typeof KudoMediaScalarFieldEnum];
export declare const KudoReactionScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly emoji: "emoji";
    readonly createdAt: "createdAt";
};
export type KudoReactionScalarFieldEnum = (typeof KudoReactionScalarFieldEnum)[keyof typeof KudoReactionScalarFieldEnum];
export declare const KudoCommentScalarFieldEnum: {
    readonly id: "id";
    readonly kudoId: "kudoId";
    readonly userId: "userId";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type KudoCommentScalarFieldEnum = (typeof KudoCommentScalarFieldEnum)[keyof typeof KudoCommentScalarFieldEnum];
export declare const CommentMediaScalarFieldEnum: {
    readonly id: "id";
    readonly commentId: "commentId";
    readonly mediaType: "mediaType";
    readonly mediaUrl: "mediaUrl";
    readonly createdAt: "createdAt";
};
export type CommentMediaScalarFieldEnum = (typeof CommentMediaScalarFieldEnum)[keyof typeof CommentMediaScalarFieldEnum];
export declare const RewardCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly costPoints: "costPoints";
    readonly stockQuantity: "stockQuantity";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RewardCatalogScalarFieldEnum = (typeof RewardCatalogScalarFieldEnum)[keyof typeof RewardCatalogScalarFieldEnum];
export declare const RewardRedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly rewardId: "rewardId";
    readonly pointsSpent: "pointsSpent";
    readonly status: "status";
    readonly redeemedAt: "redeemedAt";
};
export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum];
export declare const PointLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly amount: "amount";
    readonly referenceType: "referenceType";
    readonly referenceId: "referenceId";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type PointLedgerScalarFieldEnum = (typeof PointLedgerScalarFieldEnum)[keyof typeof PointLedgerScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly receiverId: "receiverId";
    readonly actorId: "actorId";
    readonly type: "type";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const MonthlyGivingBudgetScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly month: "month";
    readonly totalBudget: "totalBudget";
    readonly usedBudget: "usedBudget";
    readonly remainingBudget: "remainingBudget";
    readonly resetAt: "resetAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MonthlyGivingBudgetScalarFieldEnum = (typeof MonthlyGivingBudgetScalarFieldEnum)[keyof typeof MonthlyGivingBudgetScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumKudoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KudoType'>;
export type ListEnumKudoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KudoType[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>;
export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>;
export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>;
export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>;
export type EnumReactionEmojiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionEmoji'>;
export type ListEnumReactionEmojiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReactionEmoji[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumRedemptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RedemptionStatus'>;
export type ListEnumRedemptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RedemptionStatus[]'>;
export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>;
export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>;
export type EnumReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferenceType'>;
export type ListEnumReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferenceType[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    kudo?: Prisma.KudoOmit;
    kudoTag?: Prisma.KudoTagOmit;
    kudoMedia?: Prisma.KudoMediaOmit;
    kudoReaction?: Prisma.KudoReactionOmit;
    kudoComment?: Prisma.KudoCommentOmit;
    commentMedia?: Prisma.CommentMediaOmit;
    rewardCatalog?: Prisma.RewardCatalogOmit;
    rewardRedemption?: Prisma.RewardRedemptionOmit;
    pointLedger?: Prisma.PointLedgerOmit;
    notification?: Prisma.NotificationOmit;
    monthlyGivingBudget?: Prisma.MonthlyGivingBudgetOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
