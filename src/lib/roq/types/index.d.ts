/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model data
 *
 */
export type data = $Result.DefaultSelection<Prisma.$dataPayload>;
/**
 * Model data_share
 *
 */
export type data_share = $Result.DefaultSelection<Prisma.$data_sharePayload>;
/**
 * Model role
 *
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model user_role
 *
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Data
 * const data = await prisma.data.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **data** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Data
   * const data = await prisma.data.findMany()
   * ```
   */
  get data(): Prisma.dataDelegate<ExtArgs>;

  /**
   * `prisma.data_share`: Exposes CRUD operations for the **data_share** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Data_shares
   * const data_shares = await prisma.data_share.findMany()
   * ```
   */
  get data_share(): Prisma.data_shareDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_roles
   * const user_roles = await prisma.user_role.findMany()
   * ```
   */
  get user_role(): Prisma.user_roleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    data: 'data';
    data_share: 'data_share';
    role: 'role';
    team: 'team';
    user: 'user';
    user_role: 'user_role';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'data' | 'data_share' | 'role' | 'team' | 'user' | 'user_role';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      data: {
        payload: Prisma.$dataPayload<ExtArgs>;
        fields: Prisma.dataFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.dataFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.dataFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          findFirst: {
            args: Prisma.dataFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.dataFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          findMany: {
            args: Prisma.dataFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>[];
          };
          create: {
            args: Prisma.dataCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          createMany: {
            args: Prisma.dataCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.dataDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          update: {
            args: Prisma.dataUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          deleteMany: {
            args: Prisma.dataDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.dataUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.dataUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$dataPayload>;
          };
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateData>;
          };
          groupBy: {
            args: Prisma.dataGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DataGroupByOutputType>[];
          };
          count: {
            args: Prisma.dataCountArgs<ExtArgs>;
            result: $Utils.Optional<DataCountAggregateOutputType> | number;
          };
        };
      };
      data_share: {
        payload: Prisma.$data_sharePayload<ExtArgs>;
        fields: Prisma.data_shareFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.data_shareFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.data_shareFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          findFirst: {
            args: Prisma.data_shareFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.data_shareFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          findMany: {
            args: Prisma.data_shareFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>[];
          };
          create: {
            args: Prisma.data_shareCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          createMany: {
            args: Prisma.data_shareCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.data_shareDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          update: {
            args: Prisma.data_shareUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          deleteMany: {
            args: Prisma.data_shareDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.data_shareUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.data_shareUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$data_sharePayload>;
          };
          aggregate: {
            args: Prisma.Data_shareAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateData_share>;
          };
          groupBy: {
            args: Prisma.data_shareGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Data_shareGroupByOutputType>[];
          };
          count: {
            args: Prisma.data_shareCountArgs<ExtArgs>;
            result: $Utils.Optional<Data_shareCountAggregateOutputType> | number;
          };
        };
      };
      role: {
        payload: Prisma.$rolePayload<ExtArgs>;
        fields: Prisma.roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[];
          };
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.roleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>;
        fields: Prisma.user_roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[];
          };
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_role>;
          };
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_roleGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>;
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

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
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type DataCountOutputType
   */

  export type DataCountOutputType = {
    data_share: number;
  };

  export type DataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_share?: boolean | DataCountOutputTypeCountData_shareArgs;
  };

  // Custom InputTypes

  /**
   * DataCountOutputType without action
   */
  export type DataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCountOutputType
     */
    select?: DataCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DataCountOutputType without action
   */
  export type DataCountOutputTypeCountData_shareArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: data_shareWhereInput;
  };

  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user_role: number;
  };

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | RoleCountOutputTypeCountUser_roleArgs;
  };

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUser_roleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_roleWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    user: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TeamCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    data: number;
    data_share: number;
    user_role: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | UserCountOutputTypeCountDataArgs;
    data_share?: boolean | UserCountOutputTypeCountData_shareArgs;
    user_role?: boolean | UserCountOutputTypeCountUser_roleArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountData_shareArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: data_shareWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_roleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_roleWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  export type DataMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    value: string | null;
    user_id: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DataMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    value: string | null;
    user_id: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DataCountAggregateOutputType = {
    id: number;
    name: number;
    value: number;
    user_id: number;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DataMinAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    user_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DataMaxAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    user_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DataCountAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    user_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to aggregate.
     */
    where?: dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned data
     **/
    _count?: true | DataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DataMaxAggregateInputType;
  };

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
    [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>;
  };

  export type dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataWhereInput;
    orderBy?: dataOrderByWithAggregationInput | dataOrderByWithAggregationInput[];
    by: DataScalarFieldEnum[] | DataScalarFieldEnum;
    having?: dataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DataCountAggregateInputType | true;
    _min?: DataMinAggregateInputType;
    _max?: DataMaxAggregateInputType;
  };

  export type DataGroupByOutputType = {
    id: string;
    name: string;
    value: string | null;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    _count: DataCountAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
  };

  type GetDataGroupByPayload<T extends dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DataGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DataGroupByOutputType[P]>
          : GetScalarType<T[P], DataGroupByOutputType[P]>;
      }
    >
  >;

  export type dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      value?: boolean;
      user_id?: boolean;
      created_by?: boolean;
      updated_by?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      data_share?: boolean | data$data_shareArgs<ExtArgs>;
      _count?: boolean | DataCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['data']
  >;

  export type dataSelectScalar = {
    id?: boolean;
    name?: boolean;
    value?: boolean;
    user_id?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    data_share?: boolean | data$data_shareArgs<ExtArgs>;
    _count?: boolean | DataCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'data';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      data_share: Prisma.$data_sharePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        value: string | null;
        user_id: string;
        created_by: string;
        updated_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['data']
    >;
    composites: {};
  };

  type dataGetPayload<S extends boolean | null | undefined | dataDefaultArgs> = $Result.GetResult<
    Prisma.$dataPayload,
    S
  >;

  type dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    dataFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DataCountAggregateInputType | true;
  };

  export interface dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data']; meta: { name: 'data' } };
    /**
     * Find zero or one Data that matches the filter.
     * @param {dataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends dataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, dataFindUniqueArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Data that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {dataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends dataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends dataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindFirstArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends dataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     *
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends dataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Data.
     * @param {dataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     *
     **/
    create<T extends dataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, dataCreateArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Data.
     *     @param {dataCreateManyArgs} args - Arguments to create many Data.
     *     @example
     *     // Create many Data
     *     const data = await prisma.data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends dataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Data.
     * @param {dataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     *
     **/
    delete<T extends dataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, dataDeleteArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Data.
     * @param {dataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends dataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpdateArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Data.
     * @param {dataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends dataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends dataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Data.
     * @param {dataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
     **/
    upsert<T extends dataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, dataUpsertArgs<ExtArgs>>,
    ): Prisma__dataClient<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
     **/
    count<T extends dataCountArgs>(
      args?: Subset<T, dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DataAggregateArgs>(
      args: Subset<T, DataAggregateArgs>,
    ): Prisma.PrismaPromise<GetDataAggregateType<T>>;

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends dataGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataGroupByArgs['orderBy'] }
        : { orderBy?: dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, dataGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the data model
     */
    readonly fields: dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    data_share<T extends data$data_shareArgs<ExtArgs> = {}>(
      args?: Subset<T, data$data_shareArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the data model
   */
  interface dataFieldRefs {
    readonly id: FieldRef<'data', 'String'>;
    readonly name: FieldRef<'data', 'String'>;
    readonly value: FieldRef<'data', 'String'>;
    readonly user_id: FieldRef<'data', 'String'>;
    readonly created_by: FieldRef<'data', 'String'>;
    readonly updated_by: FieldRef<'data', 'String'>;
    readonly created_at: FieldRef<'data', 'DateTime'>;
    readonly updated_at: FieldRef<'data', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * data findUnique
   */
  export type dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput;
  };

  /**
   * data findUniqueOrThrow
   */
  export type dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter, which data to fetch.
     */
    where: dataWhereUniqueInput;
  };

  /**
   * data findFirst
   */
  export type dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * data findFirstOrThrow
   */
  export type dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for data.
     */
    cursor?: dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * data findMany
   */
  export type dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter, which data to fetch.
     */
    where?: dataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data to fetch.
     */
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing data.
     */
    cursor?: dataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data.
     */
    skip?: number;
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * data create
   */
  export type dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * The data needed to create a data.
     */
    data: XOR<dataCreateInput, dataUncheckedCreateInput>;
  };

  /**
   * data createMany
   */
  export type dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data.
     */
    data: dataCreateManyInput | dataCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * data update
   */
  export type dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * The data needed to update a data.
     */
    data: XOR<dataUpdateInput, dataUncheckedUpdateInput>;
    /**
     * Choose, which data to update.
     */
    where: dataWhereUniqueInput;
  };

  /**
   * data updateMany
   */
  export type dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data.
     */
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyInput>;
    /**
     * Filter which data to update
     */
    where?: dataWhereInput;
  };

  /**
   * data upsert
   */
  export type dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * The filter to search for the data to update in case it exists.
     */
    where: dataWhereUniqueInput;
    /**
     * In case the data found by the `where` argument doesn't exist, create a new data with this data.
     */
    create: XOR<dataCreateInput, dataUncheckedCreateInput>;
    /**
     * In case the data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataUpdateInput, dataUncheckedUpdateInput>;
  };

  /**
   * data delete
   */
  export type dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    /**
     * Filter which data to delete.
     */
    where: dataWhereUniqueInput;
  };

  /**
   * data deleteMany
   */
  export type dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data to delete
     */
    where?: dataWhereInput;
  };

  /**
   * data.data_share
   */
  export type data$data_shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    where?: data_shareWhereInput;
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    cursor?: data_shareWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Data_shareScalarFieldEnum | Data_shareScalarFieldEnum[];
  };

  /**
   * data without action
   */
  export type dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
  };

  /**
   * Model data_share
   */

  export type AggregateData_share = {
    _count: Data_shareCountAggregateOutputType | null;
    _min: Data_shareMinAggregateOutputType | null;
    _max: Data_shareMaxAggregateOutputType | null;
  };

  export type Data_shareMinAggregateOutputType = {
    id: string | null;
    data_id: string | null;
    shared_with: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Data_shareMaxAggregateOutputType = {
    id: string | null;
    data_id: string | null;
    shared_with: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Data_shareCountAggregateOutputType = {
    id: number;
    data_id: number;
    shared_with: number;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Data_shareMinAggregateInputType = {
    id?: true;
    data_id?: true;
    shared_with?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Data_shareMaxAggregateInputType = {
    id?: true;
    data_id?: true;
    shared_with?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Data_shareCountAggregateInputType = {
    id?: true;
    data_id?: true;
    shared_with?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Data_shareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_share to aggregate.
     */
    where?: data_shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data_shares to fetch.
     */
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: data_shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data_shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data_shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned data_shares
     **/
    _count?: true | Data_shareCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Data_shareMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Data_shareMaxAggregateInputType;
  };

  export type GetData_shareAggregateType<T extends Data_shareAggregateArgs> = {
    [P in keyof T & keyof AggregateData_share]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_share[P]>
      : GetScalarType<T[P], AggregateData_share[P]>;
  };

  export type data_shareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_shareWhereInput;
    orderBy?: data_shareOrderByWithAggregationInput | data_shareOrderByWithAggregationInput[];
    by: Data_shareScalarFieldEnum[] | Data_shareScalarFieldEnum;
    having?: data_shareScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Data_shareCountAggregateInputType | true;
    _min?: Data_shareMinAggregateInputType;
    _max?: Data_shareMaxAggregateInputType;
  };

  export type Data_shareGroupByOutputType = {
    id: string;
    data_id: string;
    shared_with: string;
    created_by: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    _count: Data_shareCountAggregateOutputType | null;
    _min: Data_shareMinAggregateOutputType | null;
    _max: Data_shareMaxAggregateOutputType | null;
  };

  type GetData_shareGroupByPayload<T extends data_shareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_shareGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Data_shareGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Data_shareGroupByOutputType[P]>
          : GetScalarType<T[P], Data_shareGroupByOutputType[P]>;
      }
    >
  >;

  export type data_shareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        data_id?: boolean;
        shared_with?: boolean;
        created_by?: boolean;
        updated_by?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        data?: boolean | dataDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['data_share']
    >;

  export type data_shareSelectScalar = {
    id?: boolean;
    data_id?: boolean;
    shared_with?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type data_shareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | dataDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $data_sharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'data_share';
    objects: {
      data: Prisma.$dataPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        data_id: string;
        shared_with: string;
        created_by: string;
        updated_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['data_share']
    >;
    composites: {};
  };

  type data_shareGetPayload<S extends boolean | null | undefined | data_shareDefaultArgs> = $Result.GetResult<
    Prisma.$data_sharePayload,
    S
  >;

  type data_shareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    data_shareFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Data_shareCountAggregateInputType | true;
  };

  export interface data_shareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data_share']; meta: { name: 'data_share' } };
    /**
     * Find zero or one Data_share that matches the filter.
     * @param {data_shareFindUniqueArgs} args - Arguments to find a Data_share
     * @example
     * // Get one Data_share
     * const data_share = await prisma.data_share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends data_shareFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareFindUniqueArgs<ExtArgs>>,
    ): Prisma__data_shareClient<
      $Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Data_share that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {data_shareFindUniqueOrThrowArgs} args - Arguments to find a Data_share
     * @example
     * // Get one Data_share
     * const data_share = await prisma.data_share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends data_shareFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__data_shareClient<
      $Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Data_share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareFindFirstArgs} args - Arguments to find a Data_share
     * @example
     * // Get one Data_share
     * const data_share = await prisma.data_share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends data_shareFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareFindFirstArgs<ExtArgs>>,
    ): Prisma__data_shareClient<
      $Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Data_share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareFindFirstOrThrowArgs} args - Arguments to find a Data_share
     * @example
     * // Get one Data_share
     * const data_share = await prisma.data_share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends data_shareFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__data_shareClient<
      $Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Data_shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_shares
     * const data_shares = await prisma.data_share.findMany()
     *
     * // Get first 10 Data_shares
     * const data_shares = await prisma.data_share.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const data_shareWithIdOnly = await prisma.data_share.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends data_shareFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Data_share.
     * @param {data_shareCreateArgs} args - Arguments to create a Data_share.
     * @example
     * // Create one Data_share
     * const Data_share = await prisma.data_share.create({
     *   data: {
     *     // ... data to create a Data_share
     *   }
     * })
     *
     **/
    create<T extends data_shareCreateArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareCreateArgs<ExtArgs>>,
    ): Prisma__data_shareClient<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Data_shares.
     *     @param {data_shareCreateManyArgs} args - Arguments to create many Data_shares.
     *     @example
     *     // Create many Data_shares
     *     const data_share = await prisma.data_share.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends data_shareCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Data_share.
     * @param {data_shareDeleteArgs} args - Arguments to delete one Data_share.
     * @example
     * // Delete one Data_share
     * const Data_share = await prisma.data_share.delete({
     *   where: {
     *     // ... filter to delete one Data_share
     *   }
     * })
     *
     **/
    delete<T extends data_shareDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareDeleteArgs<ExtArgs>>,
    ): Prisma__data_shareClient<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Data_share.
     * @param {data_shareUpdateArgs} args - Arguments to update one Data_share.
     * @example
     * // Update one Data_share
     * const data_share = await prisma.data_share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends data_shareUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareUpdateArgs<ExtArgs>>,
    ): Prisma__data_shareClient<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Data_shares.
     * @param {data_shareDeleteManyArgs} args - Arguments to filter Data_shares to delete.
     * @example
     * // Delete a few Data_shares
     * const { count } = await prisma.data_share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends data_shareDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, data_shareDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Data_shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_shares
     * const data_share = await prisma.data_share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends data_shareUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Data_share.
     * @param {data_shareUpsertArgs} args - Arguments to update or create a Data_share.
     * @example
     * // Update or create a Data_share
     * const data_share = await prisma.data_share.upsert({
     *   create: {
     *     // ... data to create a Data_share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_share we want to update
     *   }
     * })
     **/
    upsert<T extends data_shareUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, data_shareUpsertArgs<ExtArgs>>,
    ): Prisma__data_shareClient<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Data_shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareCountArgs} args - Arguments to filter Data_shares to count.
     * @example
     * // Count the number of Data_shares
     * const count = await prisma.data_share.count({
     *   where: {
     *     // ... the filter for the Data_shares we want to count
     *   }
     * })
     **/
    count<T extends data_shareCountArgs>(
      args?: Subset<T, data_shareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_shareCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Data_share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_shareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Data_shareAggregateArgs>(
      args: Subset<T, Data_shareAggregateArgs>,
    ): Prisma.PrismaPromise<GetData_shareAggregateType<T>>;

    /**
     * Group by Data_share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_shareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends data_shareGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: data_shareGroupByArgs['orderBy'] }
        : { orderBy?: data_shareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, data_shareGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetData_shareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the data_share model
     */
    readonly fields: data_shareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data_share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__data_shareClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    data<T extends dataDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, dataDefaultArgs<ExtArgs>>,
    ): Prisma__dataClient<
      $Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the data_share model
   */
  interface data_shareFieldRefs {
    readonly id: FieldRef<'data_share', 'String'>;
    readonly data_id: FieldRef<'data_share', 'String'>;
    readonly shared_with: FieldRef<'data_share', 'String'>;
    readonly created_by: FieldRef<'data_share', 'String'>;
    readonly updated_by: FieldRef<'data_share', 'String'>;
    readonly created_at: FieldRef<'data_share', 'DateTime'>;
    readonly updated_at: FieldRef<'data_share', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * data_share findUnique
   */
  export type data_shareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter, which data_share to fetch.
     */
    where: data_shareWhereUniqueInput;
  };

  /**
   * data_share findUniqueOrThrow
   */
  export type data_shareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter, which data_share to fetch.
     */
    where: data_shareWhereUniqueInput;
  };

  /**
   * data_share findFirst
   */
  export type data_shareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter, which data_share to fetch.
     */
    where?: data_shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data_shares to fetch.
     */
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for data_shares.
     */
    cursor?: data_shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data_shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data_shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of data_shares.
     */
    distinct?: Data_shareScalarFieldEnum | Data_shareScalarFieldEnum[];
  };

  /**
   * data_share findFirstOrThrow
   */
  export type data_shareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter, which data_share to fetch.
     */
    where?: data_shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data_shares to fetch.
     */
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for data_shares.
     */
    cursor?: data_shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data_shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data_shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of data_shares.
     */
    distinct?: Data_shareScalarFieldEnum | Data_shareScalarFieldEnum[];
  };

  /**
   * data_share findMany
   */
  export type data_shareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter, which data_shares to fetch.
     */
    where?: data_shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of data_shares to fetch.
     */
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing data_shares.
     */
    cursor?: data_shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` data_shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` data_shares.
     */
    skip?: number;
    distinct?: Data_shareScalarFieldEnum | Data_shareScalarFieldEnum[];
  };

  /**
   * data_share create
   */
  export type data_shareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * The data needed to create a data_share.
     */
    data: XOR<data_shareCreateInput, data_shareUncheckedCreateInput>;
  };

  /**
   * data_share createMany
   */
  export type data_shareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data_shares.
     */
    data: data_shareCreateManyInput | data_shareCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * data_share update
   */
  export type data_shareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * The data needed to update a data_share.
     */
    data: XOR<data_shareUpdateInput, data_shareUncheckedUpdateInput>;
    /**
     * Choose, which data_share to update.
     */
    where: data_shareWhereUniqueInput;
  };

  /**
   * data_share updateMany
   */
  export type data_shareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data_shares.
     */
    data: XOR<data_shareUpdateManyMutationInput, data_shareUncheckedUpdateManyInput>;
    /**
     * Filter which data_shares to update
     */
    where?: data_shareWhereInput;
  };

  /**
   * data_share upsert
   */
  export type data_shareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * The filter to search for the data_share to update in case it exists.
     */
    where: data_shareWhereUniqueInput;
    /**
     * In case the data_share found by the `where` argument doesn't exist, create a new data_share with this data.
     */
    create: XOR<data_shareCreateInput, data_shareUncheckedCreateInput>;
    /**
     * In case the data_share was found with the provided `where` argument, update it with this data.
     */
    update: XOR<data_shareUpdateInput, data_shareUncheckedUpdateInput>;
  };

  /**
   * data_share delete
   */
  export type data_shareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    /**
     * Filter which data_share to delete.
     */
    where: data_shareWhereUniqueInput;
  };

  /**
   * data_share deleteMany
   */
  export type data_shareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_shares to delete
     */
    where?: data_shareWhereInput;
  };

  /**
   * data_share without action
   */
  export type data_shareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
  };

  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput;
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_by: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_by?: boolean;
      updated_by?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_role?: boolean | role$user_roleArgs<ExtArgs>;
      _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['role']
  >;

  export type roleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | role$user_roleArgs<ExtArgs>;
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'role';
    objects: {
      user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_by: string;
        updated_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['role']
    >;
    composites: {};
  };

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<
    Prisma.$rolePayload,
    S
  >;

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role']; meta: { name: 'role' } };
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Roles.
     *     @param {roleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the role model
     */
    readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_role<T extends role$user_roleArgs<ExtArgs> = {}>(
      args?: Subset<T, role$user_roleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<'role', 'String'>;
    readonly name: FieldRef<'role', 'String'>;
    readonly description: FieldRef<'role', 'String'>;
    readonly created_by: FieldRef<'role', 'String'>;
    readonly updated_by: FieldRef<'role', 'String'>;
    readonly created_at: FieldRef<'role', 'DateTime'>;
    readonly updated_at: FieldRef<'role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>;
  };

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>;
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput;
  };

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput;
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>;
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
  };

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput;
  };

  /**
   * role.user_role
   */
  export type role$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    cursor?: user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    created_by: string | null;
    updated_by: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    created_by: string | null;
    updated_by: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    description: number;
    created_by: number;
    updated_by: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    description?: true;
    created_by?: true;
    updated_by?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    description: string | null;
    created_by: string | null;
    updated_by: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      created_by?: boolean;
      updated_by?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | team$userArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    description?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | team$userArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        created_by: string | null;
        updated_by: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends team$userArgs<ExtArgs> = {}>(
      args?: Subset<T, team$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly created_by: FieldRef<'team', 'String'>;
    readonly updated_by: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.user
   */
  export type team$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    team_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      team_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      data?: boolean | user$dataArgs<ExtArgs>;
      data_share?: boolean | user$data_shareArgs<ExtArgs>;
      team?: boolean | user$teamArgs<ExtArgs>;
      user_role?: boolean | user$user_roleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    team_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | user$dataArgs<ExtArgs>;
    data_share?: boolean | user$data_shareArgs<ExtArgs>;
    team?: boolean | user$teamArgs<ExtArgs>;
    user_role?: boolean | user$user_roleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      data: Prisma.$dataPayload<ExtArgs>[];
      data_share: Prisma.$data_sharePayload<ExtArgs>[];
      team: Prisma.$teamPayload<ExtArgs> | null;
      user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        team_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    data<T extends user$dataArgs<ExtArgs> = {}>(
      args?: Subset<T, user$dataArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPayload<ExtArgs>, T, 'findMany'> | Null>;

    data_share<T extends user$data_shareArgs<ExtArgs> = {}>(
      args?: Subset<T, user$data_shareArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_sharePayload<ExtArgs>, T, 'findMany'> | Null>;

    team<T extends user$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teamArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    user_role<T extends user$user_roleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$user_roleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly team_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.data
   */
  export type user$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data
     */
    select?: dataSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dataInclude<ExtArgs> | null;
    where?: dataWhereInput;
    orderBy?: dataOrderByWithRelationInput | dataOrderByWithRelationInput[];
    cursor?: dataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[];
  };

  /**
   * user.data_share
   */
  export type user$data_shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_share
     */
    select?: data_shareSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: data_shareInclude<ExtArgs> | null;
    where?: data_shareWhereInput;
    orderBy?: data_shareOrderByWithRelationInput | data_shareOrderByWithRelationInput[];
    cursor?: data_shareWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Data_shareScalarFieldEnum | Data_shareScalarFieldEnum[];
  };

  /**
   * user.team
   */
  export type user$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
  };

  /**
   * user.user_role
   */
  export type user$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    cursor?: user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  export type User_roleMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    created_by: string | null;
    updated_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleCountAggregateOutputType = {
    id: number;
    user_id: number;
    role_id: number;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type User_roleMinAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleCountAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_by?: true;
    updated_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_roles
     **/
    _count?: true | User_roleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_roleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_roleMaxAggregateInputType;
  };

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>;
  };

  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[];
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum;
    having?: user_roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_roleCountAggregateInputType | true;
    _min?: User_roleMinAggregateInputType;
    _max?: User_roleMaxAggregateInputType;
  };

  export type User_roleGroupByOutputType = {
    id: string;
    user_id: string;
    role_id: string;
    created_by: string;
    updated_by: string;
    created_at: Date;
    updated_at: Date;
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_roleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
          : GetScalarType<T[P], User_roleGroupByOutputType[P]>;
      }
    >
  >;

  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        role_id?: boolean;
        created_by?: boolean;
        updated_by?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        role?: boolean | roleDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user_role']
    >;

  export type user_roleSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user_role';
    objects: {
      role: Prisma.$rolePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        role_id: string;
        created_by: string;
        updated_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user_role']
    >;
    composites: {};
  };

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<
    Prisma.$user_rolePayload,
    S
  >;

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    user_roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: User_roleCountAggregateInputType | true;
  };

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role']; meta: { name: 'user_role' } };
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     *
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     *
     **/
    create<T extends user_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many User_roles.
     *     @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_role = await prisma.user_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     *
     **/
    delete<T extends user_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     **/
    upsert<T extends user_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
     **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends User_roleAggregateArgs>(
      args: Subset<T, User_roleAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>;

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_role model
     */
    readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends roleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, roleDefaultArgs<ExtArgs>>,
    ): Prisma__roleClient<
      $Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<'user_role', 'String'>;
    readonly user_id: FieldRef<'user_role', 'String'>;
    readonly role_id: FieldRef<'user_role', 'String'>;
    readonly created_by: FieldRef<'user_role', 'String'>;
    readonly updated_by: FieldRef<'user_role', 'String'>;
    readonly created_at: FieldRef<'user_role', 'DateTime'>;
    readonly updated_at: FieldRef<'user_role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
  };

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>;
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput;
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
  };

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const DataScalarFieldEnum: {
    id: 'id';
    name: 'name';
    value: 'value';
    user_id: 'user_id';
    created_by: 'created_by';
    updated_by: 'updated_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum];

  export const Data_shareScalarFieldEnum: {
    id: 'id';
    data_id: 'data_id';
    shared_with: 'shared_with';
    created_by: 'created_by';
    updated_by: 'updated_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Data_shareScalarFieldEnum = (typeof Data_shareScalarFieldEnum)[keyof typeof Data_shareScalarFieldEnum];

  export const RoleScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_by: 'created_by';
    updated_by: 'updated_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    description: 'description';
    created_by: 'created_by';
    updated_by: 'updated_by';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    team_id: 'team_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const User_roleScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    role_id: 'role_id';
    created_by: 'created_by';
    updated_by: 'updated_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type dataWhereInput = {
    AND?: dataWhereInput | dataWhereInput[];
    OR?: dataWhereInput[];
    NOT?: dataWhereInput | dataWhereInput[];
    id?: UuidFilter<'data'> | string;
    name?: StringFilter<'data'> | string;
    value?: StringNullableFilter<'data'> | string | null;
    user_id?: UuidFilter<'data'> | string;
    created_by?: UuidFilter<'data'> | string;
    updated_by?: UuidFilter<'data'> | string;
    created_at?: DateTimeFilter<'data'> | Date | string;
    updated_at?: DateTimeFilter<'data'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    data_share?: Data_shareListRelationFilter;
  };

  export type dataOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    value?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    data_share?: data_shareOrderByRelationAggregateInput;
  };

  export type dataWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: dataWhereInput | dataWhereInput[];
      OR?: dataWhereInput[];
      NOT?: dataWhereInput | dataWhereInput[];
      name?: StringFilter<'data'> | string;
      value?: StringNullableFilter<'data'> | string | null;
      user_id?: UuidFilter<'data'> | string;
      created_by?: UuidFilter<'data'> | string;
      updated_by?: UuidFilter<'data'> | string;
      created_at?: DateTimeFilter<'data'> | Date | string;
      updated_at?: DateTimeFilter<'data'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      data_share?: Data_shareListRelationFilter;
    },
    'id'
  >;

  export type dataOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    value?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: dataCountOrderByAggregateInput;
    _max?: dataMaxOrderByAggregateInput;
    _min?: dataMinOrderByAggregateInput;
  };

  export type dataScalarWhereWithAggregatesInput = {
    AND?: dataScalarWhereWithAggregatesInput | dataScalarWhereWithAggregatesInput[];
    OR?: dataScalarWhereWithAggregatesInput[];
    NOT?: dataScalarWhereWithAggregatesInput | dataScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'data'> | string;
    name?: StringWithAggregatesFilter<'data'> | string;
    value?: StringNullableWithAggregatesFilter<'data'> | string | null;
    user_id?: UuidWithAggregatesFilter<'data'> | string;
    created_by?: UuidWithAggregatesFilter<'data'> | string;
    updated_by?: UuidWithAggregatesFilter<'data'> | string;
    created_at?: DateTimeWithAggregatesFilter<'data'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'data'> | Date | string;
  };

  export type data_shareWhereInput = {
    AND?: data_shareWhereInput | data_shareWhereInput[];
    OR?: data_shareWhereInput[];
    NOT?: data_shareWhereInput | data_shareWhereInput[];
    id?: UuidFilter<'data_share'> | string;
    data_id?: UuidFilter<'data_share'> | string;
    shared_with?: UuidFilter<'data_share'> | string;
    created_by?: UuidFilter<'data_share'> | string;
    updated_by?: UuidFilter<'data_share'> | string;
    created_at?: DateTimeFilter<'data_share'> | Date | string;
    updated_at?: DateTimeFilter<'data_share'> | Date | string;
    data?: XOR<DataRelationFilter, dataWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type data_shareOrderByWithRelationInput = {
    id?: SortOrder;
    data_id?: SortOrder;
    shared_with?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    data?: dataOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type data_shareWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: data_shareWhereInput | data_shareWhereInput[];
      OR?: data_shareWhereInput[];
      NOT?: data_shareWhereInput | data_shareWhereInput[];
      data_id?: UuidFilter<'data_share'> | string;
      shared_with?: UuidFilter<'data_share'> | string;
      created_by?: UuidFilter<'data_share'> | string;
      updated_by?: UuidFilter<'data_share'> | string;
      created_at?: DateTimeFilter<'data_share'> | Date | string;
      updated_at?: DateTimeFilter<'data_share'> | Date | string;
      data?: XOR<DataRelationFilter, dataWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type data_shareOrderByWithAggregationInput = {
    id?: SortOrder;
    data_id?: SortOrder;
    shared_with?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: data_shareCountOrderByAggregateInput;
    _max?: data_shareMaxOrderByAggregateInput;
    _min?: data_shareMinOrderByAggregateInput;
  };

  export type data_shareScalarWhereWithAggregatesInput = {
    AND?: data_shareScalarWhereWithAggregatesInput | data_shareScalarWhereWithAggregatesInput[];
    OR?: data_shareScalarWhereWithAggregatesInput[];
    NOT?: data_shareScalarWhereWithAggregatesInput | data_shareScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'data_share'> | string;
    data_id?: UuidWithAggregatesFilter<'data_share'> | string;
    shared_with?: UuidWithAggregatesFilter<'data_share'> | string;
    created_by?: UuidWithAggregatesFilter<'data_share'> | string;
    updated_by?: UuidWithAggregatesFilter<'data_share'> | string;
    created_at?: DateTimeWithAggregatesFilter<'data_share'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'data_share'> | Date | string;
  };

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[];
    OR?: roleWhereInput[];
    NOT?: roleWhereInput | roleWhereInput[];
    id?: UuidFilter<'role'> | string;
    name?: StringFilter<'role'> | string;
    description?: StringNullableFilter<'role'> | string | null;
    created_by?: UuidFilter<'role'> | string;
    updated_by?: UuidFilter<'role'> | string;
    created_at?: DateTimeFilter<'role'> | Date | string;
    updated_at?: DateTimeFilter<'role'> | Date | string;
    user_role?: User_roleListRelationFilter;
  };

  export type roleOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_role?: user_roleOrderByRelationAggregateInput;
  };

  export type roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: roleWhereInput | roleWhereInput[];
      OR?: roleWhereInput[];
      NOT?: roleWhereInput | roleWhereInput[];
      name?: StringFilter<'role'> | string;
      description?: StringNullableFilter<'role'> | string | null;
      created_by?: UuidFilter<'role'> | string;
      updated_by?: UuidFilter<'role'> | string;
      created_at?: DateTimeFilter<'role'> | Date | string;
      updated_at?: DateTimeFilter<'role'> | Date | string;
      user_role?: User_roleListRelationFilter;
    },
    'id'
  >;

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: roleCountOrderByAggregateInput;
    _max?: roleMaxOrderByAggregateInput;
    _min?: roleMinOrderByAggregateInput;
  };

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    OR?: roleScalarWhereWithAggregatesInput[];
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'role'> | string;
    name?: StringWithAggregatesFilter<'role'> | string;
    description?: StringNullableWithAggregatesFilter<'role'> | string | null;
    created_by?: UuidWithAggregatesFilter<'role'> | string;
    updated_by?: UuidWithAggregatesFilter<'role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    created_by?: UuidNullableFilter<'team'> | string | null;
    updated_by?: UuidNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrderInput | SortOrder;
    updated_by?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      description?: StringNullableFilter<'team'> | string | null;
      created_by?: UuidNullableFilter<'team'> | string | null;
      updated_by?: UuidNullableFilter<'team'> | string | null;
      name?: StringFilter<'team'> | string;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrderInput | SortOrder;
    updated_by?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    created_by?: UuidNullableWithAggregatesFilter<'team'> | string | null;
    updated_by?: UuidNullableWithAggregatesFilter<'team'> | string | null;
    name?: StringWithAggregatesFilter<'team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    data?: DataListRelationFilter;
    data_share?: Data_shareListRelationFilter;
    team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
    user_role?: User_roleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    data?: dataOrderByRelationAggregateInput;
    data_share?: data_shareOrderByRelationAggregateInput;
    team?: teamOrderByWithRelationInput;
    user_role?: user_roleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      team_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      data?: DataListRelationFilter;
      data_share?: Data_shareListRelationFilter;
      team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
      user_role?: User_roleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    team_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[];
    OR?: user_roleWhereInput[];
    NOT?: user_roleWhereInput | user_roleWhereInput[];
    id?: UuidFilter<'user_role'> | string;
    user_id?: UuidFilter<'user_role'> | string;
    role_id?: UuidFilter<'user_role'> | string;
    created_by?: UuidFilter<'user_role'> | string;
    updated_by?: UuidFilter<'user_role'> | string;
    created_at?: DateTimeFilter<'user_role'> | Date | string;
    updated_at?: DateTimeFilter<'user_role'> | Date | string;
    role?: XOR<RoleRelationFilter, roleWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    role?: roleOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type user_roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: user_roleWhereInput | user_roleWhereInput[];
      OR?: user_roleWhereInput[];
      NOT?: user_roleWhereInput | user_roleWhereInput[];
      user_id?: UuidFilter<'user_role'> | string;
      role_id?: UuidFilter<'user_role'> | string;
      created_by?: UuidFilter<'user_role'> | string;
      updated_by?: UuidFilter<'user_role'> | string;
      created_at?: DateTimeFilter<'user_role'> | Date | string;
      updated_at?: DateTimeFilter<'user_role'> | Date | string;
      role?: XOR<RoleRelationFilter, roleWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: user_roleCountOrderByAggregateInput;
    _max?: user_roleMaxOrderByAggregateInput;
    _min?: user_roleMinOrderByAggregateInput;
  };

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    OR?: user_roleScalarWhereWithAggregatesInput[];
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user_role'> | string;
    user_id?: UuidWithAggregatesFilter<'user_role'> | string;
    role_id?: UuidWithAggregatesFilter<'user_role'> | string;
    created_by?: UuidWithAggregatesFilter<'user_role'> | string;
    updated_by?: UuidWithAggregatesFilter<'user_role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
  };

  export type dataCreateInput = {
    id?: string;
    name: string;
    value?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDataInput;
    data_share?: data_shareCreateNestedManyWithoutDataInput;
  };

  export type dataUncheckedCreateInput = {
    id?: string;
    name: string;
    value?: string | null;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    data_share?: data_shareUncheckedCreateNestedManyWithoutDataInput;
  };

  export type dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDataNestedInput;
    data_share?: data_shareUpdateManyWithoutDataNestedInput;
  };

  export type dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data_share?: data_shareUncheckedUpdateManyWithoutDataNestedInput;
  };

  export type dataCreateManyInput = {
    id?: string;
    name: string;
    value?: string | null;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareCreateInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    data: dataCreateNestedOneWithoutData_shareInput;
    user: userCreateNestedOneWithoutData_shareInput;
  };

  export type data_shareUncheckedCreateInput = {
    id?: string;
    data_id: string;
    shared_with: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateOneRequiredWithoutData_shareNestedInput;
    user?: userUpdateOneRequiredWithoutData_shareNestedInput;
  };

  export type data_shareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data_id?: StringFieldUpdateOperationsInput | string;
    shared_with?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareCreateManyInput = {
    id?: string;
    data_id: string;
    shared_with: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data_id?: StringFieldUpdateOperationsInput | string;
    shared_with?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_role?: user_roleCreateNestedManyWithoutRoleInput;
  };

  export type roleUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_role?: user_roleUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: user_roleUpdateManyWithoutRoleNestedInput;
  };

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: user_roleUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type roleCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    description?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    description?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataCreateNestedManyWithoutUserInput;
    data_share?: data_shareCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataUncheckedCreateNestedManyWithoutUserInput;
    data_share?: data_shareUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUncheckedUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    role: roleCreateNestedOneWithoutUser_roleInput;
    user: userCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateInput = {
    id?: string;
    user_id: string;
    role_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: roleUpdateOneRequiredWithoutUser_roleNestedInput;
    user?: userUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateManyInput = {
    id?: string;
    user_id: string;
    role_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Data_shareListRelationFilter = {
    every?: data_shareWhereInput;
    some?: data_shareWhereInput;
    none?: data_shareWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type data_shareOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type dataCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    user_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type dataMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    user_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type dataMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    user_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DataRelationFilter = {
    is?: dataWhereInput;
    isNot?: dataWhereInput;
  };

  export type data_shareCountOrderByAggregateInput = {
    id?: SortOrder;
    data_id?: SortOrder;
    shared_with?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type data_shareMaxOrderByAggregateInput = {
    id?: SortOrder;
    data_id?: SortOrder;
    shared_with?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type data_shareMinOrderByAggregateInput = {
    id?: SortOrder;
    data_id?: SortOrder;
    shared_with?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput;
    some?: user_roleWhereInput;
    none?: user_roleWhereInput;
  };

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DataListRelationFilter = {
    every?: dataWhereInput;
    some?: dataWhereInput;
    none?: dataWhereInput;
  };

  export type TeamNullableRelationFilter = {
    is?: teamWhereInput | null;
    isNot?: teamWhereInput | null;
  };

  export type dataOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RoleRelationFilter = {
    is?: roleWhereInput;
    isNot?: roleWhereInput;
  };

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_by?: SortOrder;
    updated_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutDataInput = {
    create?: XOR<userCreateWithoutDataInput, userUncheckedCreateWithoutDataInput>;
    connectOrCreate?: userCreateOrConnectWithoutDataInput;
    connect?: userWhereUniqueInput;
  };

  export type data_shareCreateNestedManyWithoutDataInput = {
    create?:
      | XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>
      | data_shareCreateWithoutDataInput[]
      | data_shareUncheckedCreateWithoutDataInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutDataInput | data_shareCreateOrConnectWithoutDataInput[];
    createMany?: data_shareCreateManyDataInputEnvelope;
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
  };

  export type data_shareUncheckedCreateNestedManyWithoutDataInput = {
    create?:
      | XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>
      | data_shareCreateWithoutDataInput[]
      | data_shareUncheckedCreateWithoutDataInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutDataInput | data_shareCreateOrConnectWithoutDataInput[];
    createMany?: data_shareCreateManyDataInputEnvelope;
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<userCreateWithoutDataInput, userUncheckedCreateWithoutDataInput>;
    connectOrCreate?: userCreateOrConnectWithoutDataInput;
    upsert?: userUpsertWithoutDataInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDataInput, userUpdateWithoutDataInput>,
      userUncheckedUpdateWithoutDataInput
    >;
  };

  export type data_shareUpdateManyWithoutDataNestedInput = {
    create?:
      | XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>
      | data_shareCreateWithoutDataInput[]
      | data_shareUncheckedCreateWithoutDataInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutDataInput | data_shareCreateOrConnectWithoutDataInput[];
    upsert?: data_shareUpsertWithWhereUniqueWithoutDataInput | data_shareUpsertWithWhereUniqueWithoutDataInput[];
    createMany?: data_shareCreateManyDataInputEnvelope;
    set?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    disconnect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    delete?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    update?: data_shareUpdateWithWhereUniqueWithoutDataInput | data_shareUpdateWithWhereUniqueWithoutDataInput[];
    updateMany?: data_shareUpdateManyWithWhereWithoutDataInput | data_shareUpdateManyWithWhereWithoutDataInput[];
    deleteMany?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
  };

  export type data_shareUncheckedUpdateManyWithoutDataNestedInput = {
    create?:
      | XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>
      | data_shareCreateWithoutDataInput[]
      | data_shareUncheckedCreateWithoutDataInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutDataInput | data_shareCreateOrConnectWithoutDataInput[];
    upsert?: data_shareUpsertWithWhereUniqueWithoutDataInput | data_shareUpsertWithWhereUniqueWithoutDataInput[];
    createMany?: data_shareCreateManyDataInputEnvelope;
    set?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    disconnect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    delete?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    update?: data_shareUpdateWithWhereUniqueWithoutDataInput | data_shareUpdateWithWhereUniqueWithoutDataInput[];
    updateMany?: data_shareUpdateManyWithWhereWithoutDataInput | data_shareUpdateManyWithWhereWithoutDataInput[];
    deleteMany?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
  };

  export type dataCreateNestedOneWithoutData_shareInput = {
    create?: XOR<dataCreateWithoutData_shareInput, dataUncheckedCreateWithoutData_shareInput>;
    connectOrCreate?: dataCreateOrConnectWithoutData_shareInput;
    connect?: dataWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutData_shareInput = {
    create?: XOR<userCreateWithoutData_shareInput, userUncheckedCreateWithoutData_shareInput>;
    connectOrCreate?: userCreateOrConnectWithoutData_shareInput;
    connect?: userWhereUniqueInput;
  };

  export type dataUpdateOneRequiredWithoutData_shareNestedInput = {
    create?: XOR<dataCreateWithoutData_shareInput, dataUncheckedCreateWithoutData_shareInput>;
    connectOrCreate?: dataCreateOrConnectWithoutData_shareInput;
    upsert?: dataUpsertWithoutData_shareInput;
    connect?: dataWhereUniqueInput;
    update?: XOR<
      XOR<dataUpdateToOneWithWhereWithoutData_shareInput, dataUpdateWithoutData_shareInput>,
      dataUncheckedUpdateWithoutData_shareInput
    >;
  };

  export type userUpdateOneRequiredWithoutData_shareNestedInput = {
    create?: XOR<userCreateWithoutData_shareInput, userUncheckedCreateWithoutData_shareInput>;
    connectOrCreate?: userCreateOrConnectWithoutData_shareInput;
    upsert?: userUpsertWithoutData_shareInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutData_shareInput, userUpdateWithoutData_shareInput>,
      userUncheckedUpdateWithoutData_shareInput
    >;
  };

  export type user_roleCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type user_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type user_roleUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type user_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type dataCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>
      | dataCreateWithoutUserInput[]
      | dataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: dataCreateOrConnectWithoutUserInput | dataCreateOrConnectWithoutUserInput[];
    createMany?: dataCreateManyUserInputEnvelope;
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[];
  };

  export type data_shareCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>
      | data_shareCreateWithoutUserInput[]
      | data_shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutUserInput | data_shareCreateOrConnectWithoutUserInput[];
    createMany?: data_shareCreateManyUserInputEnvelope;
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
  };

  export type teamCreateNestedOneWithoutUserInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    connect?: teamWhereUniqueInput;
  };

  export type user_roleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type dataUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>
      | dataCreateWithoutUserInput[]
      | dataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: dataCreateOrConnectWithoutUserInput | dataCreateOrConnectWithoutUserInput[];
    createMany?: dataCreateManyUserInputEnvelope;
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[];
  };

  export type data_shareUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>
      | data_shareCreateWithoutUserInput[]
      | data_shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutUserInput | data_shareCreateOrConnectWithoutUserInput[];
    createMany?: data_shareCreateManyUserInputEnvelope;
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
  };

  export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type dataUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>
      | dataCreateWithoutUserInput[]
      | dataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: dataCreateOrConnectWithoutUserInput | dataCreateOrConnectWithoutUserInput[];
    upsert?: dataUpsertWithWhereUniqueWithoutUserInput | dataUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: dataCreateManyUserInputEnvelope;
    set?: dataWhereUniqueInput | dataWhereUniqueInput[];
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[];
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[];
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[];
    update?: dataUpdateWithWhereUniqueWithoutUserInput | dataUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: dataUpdateManyWithWhereWithoutUserInput | dataUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[];
  };

  export type data_shareUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>
      | data_shareCreateWithoutUserInput[]
      | data_shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutUserInput | data_shareCreateOrConnectWithoutUserInput[];
    upsert?: data_shareUpsertWithWhereUniqueWithoutUserInput | data_shareUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: data_shareCreateManyUserInputEnvelope;
    set?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    disconnect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    delete?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    update?: data_shareUpdateWithWhereUniqueWithoutUserInput | data_shareUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: data_shareUpdateManyWithWhereWithoutUserInput | data_shareUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
  };

  export type teamUpdateOneWithoutUserNestedInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    upsert?: teamUpsertWithoutUserInput;
    disconnect?: teamWhereInput | boolean;
    delete?: teamWhereInput | boolean;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutUserInput, teamUpdateWithoutUserInput>,
      teamUncheckedUpdateWithoutUserInput
    >;
  };

  export type user_roleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type dataUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>
      | dataCreateWithoutUserInput[]
      | dataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: dataCreateOrConnectWithoutUserInput | dataCreateOrConnectWithoutUserInput[];
    upsert?: dataUpsertWithWhereUniqueWithoutUserInput | dataUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: dataCreateManyUserInputEnvelope;
    set?: dataWhereUniqueInput | dataWhereUniqueInput[];
    disconnect?: dataWhereUniqueInput | dataWhereUniqueInput[];
    delete?: dataWhereUniqueInput | dataWhereUniqueInput[];
    connect?: dataWhereUniqueInput | dataWhereUniqueInput[];
    update?: dataUpdateWithWhereUniqueWithoutUserInput | dataUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: dataUpdateManyWithWhereWithoutUserInput | dataUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: dataScalarWhereInput | dataScalarWhereInput[];
  };

  export type data_shareUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>
      | data_shareCreateWithoutUserInput[]
      | data_shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: data_shareCreateOrConnectWithoutUserInput | data_shareCreateOrConnectWithoutUserInput[];
    upsert?: data_shareUpsertWithWhereUniqueWithoutUserInput | data_shareUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: data_shareCreateManyUserInputEnvelope;
    set?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    disconnect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    delete?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    connect?: data_shareWhereUniqueInput | data_shareWhereUniqueInput[];
    update?: data_shareUpdateWithWhereUniqueWithoutUserInput | data_shareUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: data_shareUpdateManyWithWhereWithoutUserInput | data_shareUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
  };

  export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type roleCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: roleCreateOrConnectWithoutUser_roleInput;
    connect?: roleWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput;
    connect?: userWhereUniqueInput;
  };

  export type roleUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: roleCreateOrConnectWithoutUser_roleInput;
    upsert?: roleUpsertWithoutUser_roleInput;
    connect?: roleWhereUniqueInput;
    update?: XOR<
      XOR<roleUpdateToOneWithWhereWithoutUser_roleInput, roleUpdateWithoutUser_roleInput>,
      roleUncheckedUpdateWithoutUser_roleInput
    >;
  };

  export type userUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput;
    upsert?: userUpsertWithoutUser_roleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutUser_roleInput, userUpdateWithoutUser_roleInput>,
      userUncheckedUpdateWithoutUser_roleInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutDataInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data_share?: data_shareCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDataInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data_share?: data_shareUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDataInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDataInput, userUncheckedCreateWithoutDataInput>;
  };

  export type data_shareCreateWithoutDataInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutData_shareInput;
  };

  export type data_shareUncheckedCreateWithoutDataInput = {
    id?: string;
    shared_with: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareCreateOrConnectWithoutDataInput = {
    where: data_shareWhereUniqueInput;
    create: XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>;
  };

  export type data_shareCreateManyDataInputEnvelope = {
    data: data_shareCreateManyDataInput | data_shareCreateManyDataInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutDataInput = {
    update: XOR<userUpdateWithoutDataInput, userUncheckedUpdateWithoutDataInput>;
    create: XOR<userCreateWithoutDataInput, userUncheckedCreateWithoutDataInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDataInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDataInput, userUncheckedUpdateWithoutDataInput>;
  };

  export type userUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data_share?: data_shareUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data_share?: data_shareUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type data_shareUpsertWithWhereUniqueWithoutDataInput = {
    where: data_shareWhereUniqueInput;
    update: XOR<data_shareUpdateWithoutDataInput, data_shareUncheckedUpdateWithoutDataInput>;
    create: XOR<data_shareCreateWithoutDataInput, data_shareUncheckedCreateWithoutDataInput>;
  };

  export type data_shareUpdateWithWhereUniqueWithoutDataInput = {
    where: data_shareWhereUniqueInput;
    data: XOR<data_shareUpdateWithoutDataInput, data_shareUncheckedUpdateWithoutDataInput>;
  };

  export type data_shareUpdateManyWithWhereWithoutDataInput = {
    where: data_shareScalarWhereInput;
    data: XOR<data_shareUpdateManyMutationInput, data_shareUncheckedUpdateManyWithoutDataInput>;
  };

  export type data_shareScalarWhereInput = {
    AND?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
    OR?: data_shareScalarWhereInput[];
    NOT?: data_shareScalarWhereInput | data_shareScalarWhereInput[];
    id?: UuidFilter<'data_share'> | string;
    data_id?: UuidFilter<'data_share'> | string;
    shared_with?: UuidFilter<'data_share'> | string;
    created_by?: UuidFilter<'data_share'> | string;
    updated_by?: UuidFilter<'data_share'> | string;
    created_at?: DateTimeFilter<'data_share'> | Date | string;
    updated_at?: DateTimeFilter<'data_share'> | Date | string;
  };

  export type dataCreateWithoutData_shareInput = {
    id?: string;
    name: string;
    value?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDataInput;
  };

  export type dataUncheckedCreateWithoutData_shareInput = {
    id?: string;
    name: string;
    value?: string | null;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dataCreateOrConnectWithoutData_shareInput = {
    where: dataWhereUniqueInput;
    create: XOR<dataCreateWithoutData_shareInput, dataUncheckedCreateWithoutData_shareInput>;
  };

  export type userCreateWithoutData_shareInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutData_shareInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutData_shareInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutData_shareInput, userUncheckedCreateWithoutData_shareInput>;
  };

  export type dataUpsertWithoutData_shareInput = {
    update: XOR<dataUpdateWithoutData_shareInput, dataUncheckedUpdateWithoutData_shareInput>;
    create: XOR<dataCreateWithoutData_shareInput, dataUncheckedCreateWithoutData_shareInput>;
    where?: dataWhereInput;
  };

  export type dataUpdateToOneWithWhereWithoutData_shareInput = {
    where?: dataWhereInput;
    data: XOR<dataUpdateWithoutData_shareInput, dataUncheckedUpdateWithoutData_shareInput>;
  };

  export type dataUpdateWithoutData_shareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDataNestedInput;
  };

  export type dataUncheckedUpdateWithoutData_shareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutData_shareInput = {
    update: XOR<userUpdateWithoutData_shareInput, userUncheckedUpdateWithoutData_shareInput>;
    create: XOR<userCreateWithoutData_shareInput, userUncheckedCreateWithoutData_shareInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutData_shareInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutData_shareInput, userUncheckedUpdateWithoutData_shareInput>;
  };

  export type userUpdateWithoutData_shareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutData_shareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type user_roleCreateWithoutRoleInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateWithoutRoleInput = {
    id?: string;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateOrConnectWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>;
  };

  export type user_roleCreateManyRoleInputEnvelope = {
    data: user_roleCreateManyRoleInput | user_roleCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type user_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    update: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>;
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>;
  };

  export type user_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    data: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>;
  };

  export type user_roleUpdateManyWithWhereWithoutRoleInput = {
    where: user_roleScalarWhereInput;
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutRoleInput>;
  };

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
    OR?: user_roleScalarWhereInput[];
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
    id?: UuidFilter<'user_role'> | string;
    user_id?: UuidFilter<'user_role'> | string;
    role_id?: UuidFilter<'user_role'> | string;
    created_by?: UuidFilter<'user_role'> | string;
    updated_by?: UuidFilter<'user_role'> | string;
    created_at?: DateTimeFilter<'user_role'> | Date | string;
    updated_at?: DateTimeFilter<'user_role'> | Date | string;
  };

  export type userCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataCreateNestedManyWithoutUserInput;
    data_share?: data_shareCreateNestedManyWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataUncheckedCreateNestedManyWithoutUserInput;
    data_share?: data_shareUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeamInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userCreateManyTeamInputEnvelope = {
    data: userCreateManyTeamInput | userCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userUpdateWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
  };

  export type userUpdateManyWithWhereWithoutTeamInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutTeamInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type dataCreateWithoutUserInput = {
    id?: string;
    name: string;
    value?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    data_share?: data_shareCreateNestedManyWithoutDataInput;
  };

  export type dataUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    value?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    data_share?: data_shareUncheckedCreateNestedManyWithoutDataInput;
  };

  export type dataCreateOrConnectWithoutUserInput = {
    where: dataWhereUniqueInput;
    create: XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>;
  };

  export type dataCreateManyUserInputEnvelope = {
    data: dataCreateManyUserInput | dataCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type data_shareCreateWithoutUserInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    data: dataCreateNestedOneWithoutData_shareInput;
  };

  export type data_shareUncheckedCreateWithoutUserInput = {
    id?: string;
    data_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareCreateOrConnectWithoutUserInput = {
    where: data_shareWhereUniqueInput;
    create: XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>;
  };

  export type data_shareCreateManyUserInputEnvelope = {
    data: data_shareCreateManyUserInput | data_shareCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teamCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateOrConnectWithoutUserInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type user_roleCreateWithoutUserInput = {
    id?: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    role: roleCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateWithoutUserInput = {
    id?: string;
    role_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>;
  };

  export type user_roleCreateManyUserInputEnvelope = {
    data: user_roleCreateManyUserInput | user_roleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type dataUpsertWithWhereUniqueWithoutUserInput = {
    where: dataWhereUniqueInput;
    update: XOR<dataUpdateWithoutUserInput, dataUncheckedUpdateWithoutUserInput>;
    create: XOR<dataCreateWithoutUserInput, dataUncheckedCreateWithoutUserInput>;
  };

  export type dataUpdateWithWhereUniqueWithoutUserInput = {
    where: dataWhereUniqueInput;
    data: XOR<dataUpdateWithoutUserInput, dataUncheckedUpdateWithoutUserInput>;
  };

  export type dataUpdateManyWithWhereWithoutUserInput = {
    where: dataScalarWhereInput;
    data: XOR<dataUpdateManyMutationInput, dataUncheckedUpdateManyWithoutUserInput>;
  };

  export type dataScalarWhereInput = {
    AND?: dataScalarWhereInput | dataScalarWhereInput[];
    OR?: dataScalarWhereInput[];
    NOT?: dataScalarWhereInput | dataScalarWhereInput[];
    id?: UuidFilter<'data'> | string;
    name?: StringFilter<'data'> | string;
    value?: StringNullableFilter<'data'> | string | null;
    user_id?: UuidFilter<'data'> | string;
    created_by?: UuidFilter<'data'> | string;
    updated_by?: UuidFilter<'data'> | string;
    created_at?: DateTimeFilter<'data'> | Date | string;
    updated_at?: DateTimeFilter<'data'> | Date | string;
  };

  export type data_shareUpsertWithWhereUniqueWithoutUserInput = {
    where: data_shareWhereUniqueInput;
    update: XOR<data_shareUpdateWithoutUserInput, data_shareUncheckedUpdateWithoutUserInput>;
    create: XOR<data_shareCreateWithoutUserInput, data_shareUncheckedCreateWithoutUserInput>;
  };

  export type data_shareUpdateWithWhereUniqueWithoutUserInput = {
    where: data_shareWhereUniqueInput;
    data: XOR<data_shareUpdateWithoutUserInput, data_shareUncheckedUpdateWithoutUserInput>;
  };

  export type data_shareUpdateManyWithWhereWithoutUserInput = {
    where: data_shareScalarWhereInput;
    data: XOR<data_shareUpdateManyMutationInput, data_shareUncheckedUpdateManyWithoutUserInput>;
  };

  export type teamUpsertWithoutUserInput = {
    update: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutUserInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
  };

  export type teamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>;
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>;
  };

  export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>;
  };

  export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roleScalarWhereInput;
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUserInput>;
  };

  export type roleCreateWithoutUser_roleInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUncheckedCreateWithoutUser_roleInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleCreateOrConnectWithoutUser_roleInput = {
    where: roleWhereUniqueInput;
    create: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
  };

  export type userCreateWithoutUser_roleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataCreateNestedManyWithoutUserInput;
    data_share?: data_shareCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutUser_roleInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    data?: dataUncheckedCreateNestedManyWithoutUserInput;
    data_share?: data_shareUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutUser_roleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
  };

  export type roleUpsertWithoutUser_roleInput = {
    update: XOR<roleUpdateWithoutUser_roleInput, roleUncheckedUpdateWithoutUser_roleInput>;
    create: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    where?: roleWhereInput;
  };

  export type roleUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: roleWhereInput;
    data: XOR<roleUpdateWithoutUser_roleInput, roleUncheckedUpdateWithoutUser_roleInput>;
  };

  export type roleUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutUser_roleInput = {
    update: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>;
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>;
  };

  export type userUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUncheckedUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type data_shareCreateManyDataInput = {
    id?: string;
    shared_with: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutData_shareNestedInput;
  };

  export type data_shareUncheckedUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shared_with?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareUncheckedUpdateManyWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shared_with?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateManyRoleInput = {
    id?: string;
    user_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUncheckedUpdateManyWithoutUserNestedInput;
    data_share?: data_shareUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type dataCreateManyUserInput = {
    id?: string;
    name: string;
    value?: string | null;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type data_shareCreateManyUserInput = {
    id?: string;
    data_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateManyUserInput = {
    id?: string;
    role_id: string;
    created_by: string;
    updated_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type dataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data_share?: data_shareUpdateManyWithoutDataNestedInput;
  };

  export type dataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data_share?: data_shareUncheckedUpdateManyWithoutDataNestedInput;
  };

  export type dataUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    data?: dataUpdateOneRequiredWithoutData_shareNestedInput;
  };

  export type data_shareUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type data_shareUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    data_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: roleUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_by?: StringFieldUpdateOperationsInput | string;
    updated_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use DataCountOutputTypeDefaultArgs instead
   */
  export type DataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DataCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RoleCountOutputTypeDefaultArgs instead
   */
  export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RoleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use dataDefaultArgs instead
   */
  export type dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dataDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use data_shareDefaultArgs instead
   */
  export type data_shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    data_shareDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use roleDefaultArgs instead
   */
  export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_roleDefaultArgs instead
   */
  export type user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_roleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
