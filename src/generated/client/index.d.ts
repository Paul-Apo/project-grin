
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model boardMem
 * 
 */
export type boardMem = $Result.DefaultSelection<Prisma.$boardMemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  owner: 'owner',
  viewer: 'viewer',
  editor: 'editor'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BoardMems
 * const boardMems = await prisma.boardMem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BoardMems
   * const boardMems = await prisma.boardMem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.boardMem`: Exposes CRUD operations for the **boardMem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardMems
    * const boardMems = await prisma.boardMem.findMany()
    * ```
    */
  get boardMem(): Prisma.boardMemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    boardMem: 'boardMem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "boardMem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      boardMem: {
        payload: Prisma.$boardMemPayload<ExtArgs>
        fields: Prisma.boardMemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.boardMemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.boardMemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          findFirst: {
            args: Prisma.boardMemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.boardMemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          findMany: {
            args: Prisma.boardMemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>[]
          }
          create: {
            args: Prisma.boardMemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          createMany: {
            args: Prisma.boardMemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.boardMemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          update: {
            args: Prisma.boardMemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          deleteMany: {
            args: Prisma.boardMemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.boardMemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.boardMemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardMemPayload>
          }
          aggregate: {
            args: Prisma.BoardMemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoardMem>
          }
          groupBy: {
            args: Prisma.boardMemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardMemGroupByOutputType>[]
          }
          count: {
            args: Prisma.boardMemCountArgs<ExtArgs>
            result: $Utils.Optional<BoardMemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    boardMem?: boardMemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model boardMem
   */

  export type AggregateBoardMem = {
    _count: BoardMemCountAggregateOutputType | null
    _min: BoardMemMinAggregateOutputType | null
    _max: BoardMemMaxAggregateOutputType | null
  }

  export type BoardMemMinAggregateOutputType = {
    boardMem: string | null
    role: $Enums.Role | null
  }

  export type BoardMemMaxAggregateOutputType = {
    boardMem: string | null
    role: $Enums.Role | null
  }

  export type BoardMemCountAggregateOutputType = {
    boardMem: number
    role: number
    _all: number
  }


  export type BoardMemMinAggregateInputType = {
    boardMem?: true
    role?: true
  }

  export type BoardMemMaxAggregateInputType = {
    boardMem?: true
    role?: true
  }

  export type BoardMemCountAggregateInputType = {
    boardMem?: true
    role?: true
    _all?: true
  }

  export type BoardMemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boardMem to aggregate.
     */
    where?: boardMemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boardMems to fetch.
     */
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boardMemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boardMems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boardMems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boardMems
    **/
    _count?: true | BoardMemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMemMaxAggregateInputType
  }

  export type GetBoardMemAggregateType<T extends BoardMemAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardMem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardMem[P]>
      : GetScalarType<T[P], AggregateBoardMem[P]>
  }




  export type boardMemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardMemWhereInput
    orderBy?: boardMemOrderByWithAggregationInput | boardMemOrderByWithAggregationInput[]
    by: BoardMemScalarFieldEnum[] | BoardMemScalarFieldEnum
    having?: boardMemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardMemCountAggregateInputType | true
    _min?: BoardMemMinAggregateInputType
    _max?: BoardMemMaxAggregateInputType
  }

  export type BoardMemGroupByOutputType = {
    boardMem: string
    role: $Enums.Role
    _count: BoardMemCountAggregateOutputType | null
    _min: BoardMemMinAggregateOutputType | null
    _max: BoardMemMaxAggregateOutputType | null
  }

  type GetBoardMemGroupByPayload<T extends boardMemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardMemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardMemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardMemGroupByOutputType[P]>
            : GetScalarType<T[P], BoardMemGroupByOutputType[P]>
        }
      >
    >


  export type boardMemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    boardMem?: boolean
    role?: boolean
  }, ExtArgs["result"]["boardMem"]>



  export type boardMemSelectScalar = {
    boardMem?: boolean
    role?: boolean
  }

  export type boardMemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"boardMem" | "role", ExtArgs["result"]["boardMem"]>

  export type $boardMemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "boardMem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      boardMem: string
      role: $Enums.Role
    }, ExtArgs["result"]["boardMem"]>
    composites: {}
  }

  type boardMemGetPayload<S extends boolean | null | undefined | boardMemDefaultArgs> = $Result.GetResult<Prisma.$boardMemPayload, S>

  type boardMemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<boardMemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardMemCountAggregateInputType | true
    }

  export interface boardMemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['boardMem'], meta: { name: 'boardMem' } }
    /**
     * Find zero or one BoardMem that matches the filter.
     * @param {boardMemFindUniqueArgs} args - Arguments to find a BoardMem
     * @example
     * // Get one BoardMem
     * const boardMem = await prisma.boardMem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends boardMemFindUniqueArgs>(args: SelectSubset<T, boardMemFindUniqueArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoardMem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {boardMemFindUniqueOrThrowArgs} args - Arguments to find a BoardMem
     * @example
     * // Get one BoardMem
     * const boardMem = await prisma.boardMem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends boardMemFindUniqueOrThrowArgs>(args: SelectSubset<T, boardMemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoardMem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemFindFirstArgs} args - Arguments to find a BoardMem
     * @example
     * // Get one BoardMem
     * const boardMem = await prisma.boardMem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends boardMemFindFirstArgs>(args?: SelectSubset<T, boardMemFindFirstArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoardMem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemFindFirstOrThrowArgs} args - Arguments to find a BoardMem
     * @example
     * // Get one BoardMem
     * const boardMem = await prisma.boardMem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends boardMemFindFirstOrThrowArgs>(args?: SelectSubset<T, boardMemFindFirstOrThrowArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoardMems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardMems
     * const boardMems = await prisma.boardMem.findMany()
     * 
     * // Get first 10 BoardMems
     * const boardMems = await prisma.boardMem.findMany({ take: 10 })
     * 
     * // Only select the `boardMem`
     * const boardMemWithBoardMemOnly = await prisma.boardMem.findMany({ select: { boardMem: true } })
     * 
     */
    findMany<T extends boardMemFindManyArgs>(args?: SelectSubset<T, boardMemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoardMem.
     * @param {boardMemCreateArgs} args - Arguments to create a BoardMem.
     * @example
     * // Create one BoardMem
     * const BoardMem = await prisma.boardMem.create({
     *   data: {
     *     // ... data to create a BoardMem
     *   }
     * })
     * 
     */
    create<T extends boardMemCreateArgs>(args: SelectSubset<T, boardMemCreateArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoardMems.
     * @param {boardMemCreateManyArgs} args - Arguments to create many BoardMems.
     * @example
     * // Create many BoardMems
     * const boardMem = await prisma.boardMem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends boardMemCreateManyArgs>(args?: SelectSubset<T, boardMemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardMem.
     * @param {boardMemDeleteArgs} args - Arguments to delete one BoardMem.
     * @example
     * // Delete one BoardMem
     * const BoardMem = await prisma.boardMem.delete({
     *   where: {
     *     // ... filter to delete one BoardMem
     *   }
     * })
     * 
     */
    delete<T extends boardMemDeleteArgs>(args: SelectSubset<T, boardMemDeleteArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoardMem.
     * @param {boardMemUpdateArgs} args - Arguments to update one BoardMem.
     * @example
     * // Update one BoardMem
     * const boardMem = await prisma.boardMem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends boardMemUpdateArgs>(args: SelectSubset<T, boardMemUpdateArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoardMems.
     * @param {boardMemDeleteManyArgs} args - Arguments to filter BoardMems to delete.
     * @example
     * // Delete a few BoardMems
     * const { count } = await prisma.boardMem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends boardMemDeleteManyArgs>(args?: SelectSubset<T, boardMemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardMems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardMems
     * const boardMem = await prisma.boardMem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends boardMemUpdateManyArgs>(args: SelectSubset<T, boardMemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardMem.
     * @param {boardMemUpsertArgs} args - Arguments to update or create a BoardMem.
     * @example
     * // Update or create a BoardMem
     * const boardMem = await prisma.boardMem.upsert({
     *   create: {
     *     // ... data to create a BoardMem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardMem we want to update
     *   }
     * })
     */
    upsert<T extends boardMemUpsertArgs>(args: SelectSubset<T, boardMemUpsertArgs<ExtArgs>>): Prisma__boardMemClient<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoardMems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemCountArgs} args - Arguments to filter BoardMems to count.
     * @example
     * // Count the number of BoardMems
     * const count = await prisma.boardMem.count({
     *   where: {
     *     // ... the filter for the BoardMems we want to count
     *   }
     * })
    **/
    count<T extends boardMemCountArgs>(
      args?: Subset<T, boardMemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardMemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardMem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardMemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardMemAggregateArgs>(args: Subset<T, BoardMemAggregateArgs>): Prisma.PrismaPromise<GetBoardMemAggregateType<T>>

    /**
     * Group by BoardMem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardMemGroupByArgs} args - Group by arguments.
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
      T extends boardMemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: boardMemGroupByArgs['orderBy'] }
        : { orderBy?: boardMemGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, boardMemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardMemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the boardMem model
   */
  readonly fields: boardMemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for boardMem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__boardMemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the boardMem model
   */
  interface boardMemFieldRefs {
    readonly boardMem: FieldRef<"boardMem", 'String'>
    readonly role: FieldRef<"boardMem", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * boardMem findUnique
   */
  export type boardMemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter, which boardMem to fetch.
     */
    where: boardMemWhereUniqueInput
  }

  /**
   * boardMem findUniqueOrThrow
   */
  export type boardMemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter, which boardMem to fetch.
     */
    where: boardMemWhereUniqueInput
  }

  /**
   * boardMem findFirst
   */
  export type boardMemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter, which boardMem to fetch.
     */
    where?: boardMemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boardMems to fetch.
     */
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boardMems.
     */
    cursor?: boardMemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boardMems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boardMems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boardMems.
     */
    distinct?: BoardMemScalarFieldEnum | BoardMemScalarFieldEnum[]
  }

  /**
   * boardMem findFirstOrThrow
   */
  export type boardMemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter, which boardMem to fetch.
     */
    where?: boardMemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boardMems to fetch.
     */
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boardMems.
     */
    cursor?: boardMemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boardMems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boardMems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boardMems.
     */
    distinct?: BoardMemScalarFieldEnum | BoardMemScalarFieldEnum[]
  }

  /**
   * boardMem findMany
   */
  export type boardMemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter, which boardMems to fetch.
     */
    where?: boardMemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boardMems to fetch.
     */
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boardMems.
     */
    cursor?: boardMemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boardMems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boardMems.
     */
    skip?: number
    distinct?: BoardMemScalarFieldEnum | BoardMemScalarFieldEnum[]
  }

  /**
   * boardMem create
   */
  export type boardMemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * The data needed to create a boardMem.
     */
    data?: XOR<boardMemCreateInput, boardMemUncheckedCreateInput>
  }

  /**
   * boardMem createMany
   */
  export type boardMemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many boardMems.
     */
    data: boardMemCreateManyInput | boardMemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * boardMem update
   */
  export type boardMemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * The data needed to update a boardMem.
     */
    data: XOR<boardMemUpdateInput, boardMemUncheckedUpdateInput>
    /**
     * Choose, which boardMem to update.
     */
    where: boardMemWhereUniqueInput
  }

  /**
   * boardMem updateMany
   */
  export type boardMemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update boardMems.
     */
    data: XOR<boardMemUpdateManyMutationInput, boardMemUncheckedUpdateManyInput>
    /**
     * Filter which boardMems to update
     */
    where?: boardMemWhereInput
    /**
     * Limit how many boardMems to update.
     */
    limit?: number
  }

  /**
   * boardMem upsert
   */
  export type boardMemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * The filter to search for the boardMem to update in case it exists.
     */
    where: boardMemWhereUniqueInput
    /**
     * In case the boardMem found by the `where` argument doesn't exist, create a new boardMem with this data.
     */
    create: XOR<boardMemCreateInput, boardMemUncheckedCreateInput>
    /**
     * In case the boardMem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boardMemUpdateInput, boardMemUncheckedUpdateInput>
  }

  /**
   * boardMem delete
   */
  export type boardMemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Filter which boardMem to delete.
     */
    where: boardMemWhereUniqueInput
  }

  /**
   * boardMem deleteMany
   */
  export type boardMemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boardMems to delete
     */
    where?: boardMemWhereInput
    /**
     * Limit how many boardMems to delete.
     */
    limit?: number
  }

  /**
   * boardMem without action
   */
  export type boardMemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardMemScalarFieldEnum: {
    boardMem: 'boardMem',
    role: 'role'
  };

  export type BoardMemScalarFieldEnum = (typeof BoardMemScalarFieldEnum)[keyof typeof BoardMemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const boardMemOrderByRelevanceFieldEnum: {
    boardMem: 'boardMem'
  };

  export type boardMemOrderByRelevanceFieldEnum = (typeof boardMemOrderByRelevanceFieldEnum)[keyof typeof boardMemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type boardMemWhereInput = {
    AND?: boardMemWhereInput | boardMemWhereInput[]
    OR?: boardMemWhereInput[]
    NOT?: boardMemWhereInput | boardMemWhereInput[]
    boardMem?: StringFilter<"boardMem"> | string
    role?: EnumRoleFilter<"boardMem"> | $Enums.Role
  }

  export type boardMemOrderByWithRelationInput = {
    boardMem?: SortOrder
    role?: SortOrder
    _relevance?: boardMemOrderByRelevanceInput
  }

  export type boardMemWhereUniqueInput = Prisma.AtLeast<{
    boardMem?: string
    AND?: boardMemWhereInput | boardMemWhereInput[]
    OR?: boardMemWhereInput[]
    NOT?: boardMemWhereInput | boardMemWhereInput[]
    role?: EnumRoleFilter<"boardMem"> | $Enums.Role
  }, "boardMem">

  export type boardMemOrderByWithAggregationInput = {
    boardMem?: SortOrder
    role?: SortOrder
    _count?: boardMemCountOrderByAggregateInput
    _max?: boardMemMaxOrderByAggregateInput
    _min?: boardMemMinOrderByAggregateInput
  }

  export type boardMemScalarWhereWithAggregatesInput = {
    AND?: boardMemScalarWhereWithAggregatesInput | boardMemScalarWhereWithAggregatesInput[]
    OR?: boardMemScalarWhereWithAggregatesInput[]
    NOT?: boardMemScalarWhereWithAggregatesInput | boardMemScalarWhereWithAggregatesInput[]
    boardMem?: StringWithAggregatesFilter<"boardMem"> | string
    role?: EnumRoleWithAggregatesFilter<"boardMem"> | $Enums.Role
  }

  export type boardMemCreateInput = {
    boardMem?: string
    role?: $Enums.Role
  }

  export type boardMemUncheckedCreateInput = {
    boardMem?: string
    role?: $Enums.Role
  }

  export type boardMemUpdateInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemUncheckedUpdateInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemCreateManyInput = {
    boardMem?: string
    role?: $Enums.Role
  }

  export type boardMemUpdateManyMutationInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemUncheckedUpdateManyInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type boardMemOrderByRelevanceInput = {
    fields: boardMemOrderByRelevanceFieldEnum | boardMemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type boardMemCountOrderByAggregateInput = {
    boardMem?: SortOrder
    role?: SortOrder
  }

  export type boardMemMaxOrderByAggregateInput = {
    boardMem?: SortOrder
    role?: SortOrder
  }

  export type boardMemMinOrderByAggregateInput = {
    boardMem?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}