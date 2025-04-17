
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model board
 * 
 */
export type board = $Result.DefaultSelection<Prisma.$boardPayload>
/**
 * Model boardMem
 * 
 */
export type boardMem = $Result.DefaultSelection<Prisma.$boardMemPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model markdowntext
 * 
 */
export type markdowntext = $Result.DefaultSelection<Prisma.$markdowntextPayload>

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
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.boardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boardMem`: Exposes CRUD operations for the **boardMem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardMems
    * const boardMems = await prisma.boardMem.findMany()
    * ```
    */
  get boardMem(): Prisma.boardMemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.markdowntext`: Exposes CRUD operations for the **markdowntext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markdowntexts
    * const markdowntexts = await prisma.markdowntext.findMany()
    * ```
    */
  get markdowntext(): Prisma.markdowntextDelegate<ExtArgs, ClientOptions>;
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
    user: 'user',
    board: 'board',
    boardMem: 'boardMem',
    tasks: 'tasks',
    markdowntext: 'markdowntext'
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
      modelProps: "user" | "board" | "boardMem" | "tasks" | "markdowntext"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      board: {
        payload: Prisma.$boardPayload<ExtArgs>
        fields: Prisma.boardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.boardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.boardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          findFirst: {
            args: Prisma.boardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.boardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          findMany: {
            args: Prisma.boardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>[]
          }
          create: {
            args: Prisma.boardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          createMany: {
            args: Prisma.boardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.boardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          update: {
            args: Prisma.boardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          deleteMany: {
            args: Prisma.boardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.boardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.boardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$boardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.boardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.boardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
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
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      markdowntext: {
        payload: Prisma.$markdowntextPayload<ExtArgs>
        fields: Prisma.markdowntextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.markdowntextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.markdowntextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          findFirst: {
            args: Prisma.markdowntextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.markdowntextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          findMany: {
            args: Prisma.markdowntextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>[]
          }
          create: {
            args: Prisma.markdowntextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          createMany: {
            args: Prisma.markdowntextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.markdowntextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          update: {
            args: Prisma.markdowntextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          deleteMany: {
            args: Prisma.markdowntextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.markdowntextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.markdowntextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$markdowntextPayload>
          }
          aggregate: {
            args: Prisma.MarkdowntextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarkdowntext>
          }
          groupBy: {
            args: Prisma.markdowntextGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkdowntextGroupByOutputType>[]
          }
          count: {
            args: Prisma.markdowntextCountArgs<ExtArgs>
            result: $Utils.Optional<MarkdowntextCountAggregateOutputType> | number
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
    user?: userOmit
    board?: boardOmit
    boardMem?: boardMemOmit
    tasks?: tasksOmit
    markdowntext?: markdowntextOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hasUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hasUser?: boolean | UserCountOutputTypeCountHasUserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHasUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardMemWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    hasUser: number
    boardTask: number
    boardText: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hasUser?: boolean | BoardCountOutputTypeCountHasUserArgs
    boardTask?: boolean | BoardCountOutputTypeCountBoardTaskArgs
    boardText?: boolean | BoardCountOutputTypeCountBoardTextArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountHasUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardMemWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountBoardTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountBoardTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: markdowntextWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    hasBoard?: boolean | user$hasBoardArgs<ExtArgs>
    hasUser?: boolean | user$hasUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hasBoard?: boolean | user$hasBoardArgs<ExtArgs>
    hasUser?: boolean | user$hasUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      hasBoard: Prisma.$boardPayload<ExtArgs> | null
      hasUser: Prisma.$boardMemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
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
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hasBoard<T extends user$hasBoardArgs<ExtArgs> = {}>(args?: Subset<T, user$hasBoardArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hasUser<T extends user$hasUserArgs<ExtArgs> = {}>(args?: Subset<T, user$hasUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.hasBoard
   */
  export type user$hasBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    where?: boardWhereInput
  }

  /**
   * user.hasUser
   */
  export type user$hasUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
    where?: boardMemWhereInput
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    cursor?: boardMemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardMemScalarFieldEnum | BoardMemScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    boardName: string | null
    boardDes: string | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    boardName: string | null
    boardDes: string | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    ownerId: number
    boardName: number
    boardDes: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    id?: true
    ownerId?: true
    boardName?: true
    boardDes?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    ownerId?: true
    boardName?: true
    boardDes?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    ownerId?: true
    boardName?: true
    boardDes?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which board to aggregate.
     */
    where?: boardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardOrderByWithRelationInput | boardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type boardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: boardWhereInput
    orderBy?: boardOrderByWithAggregationInput | boardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: boardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: string
    ownerId: string
    boardName: string
    boardDes: string
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends boardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type boardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    boardName?: boolean
    boardDes?: boolean
    owner?: boolean | userDefaultArgs<ExtArgs>
    hasUser?: boolean | board$hasUserArgs<ExtArgs>
    boardTask?: boolean | board$boardTaskArgs<ExtArgs>
    boardText?: boolean | board$boardTextArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>



  export type boardSelectScalar = {
    id?: boolean
    ownerId?: boolean
    boardName?: boolean
    boardDes?: boolean
  }

  export type boardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "boardName" | "boardDes", ExtArgs["result"]["board"]>
  export type boardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | userDefaultArgs<ExtArgs>
    hasUser?: boolean | board$hasUserArgs<ExtArgs>
    boardTask?: boolean | board$boardTaskArgs<ExtArgs>
    boardText?: boolean | board$boardTextArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $boardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "board"
    objects: {
      owner: Prisma.$userPayload<ExtArgs>
      hasUser: Prisma.$boardMemPayload<ExtArgs>[]
      boardTask: Prisma.$tasksPayload<ExtArgs>[]
      boardText: Prisma.$markdowntextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      boardName: string
      boardDes: string
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type boardGetPayload<S extends boolean | null | undefined | boardDefaultArgs> = $Result.GetResult<Prisma.$boardPayload, S>

  type boardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<boardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface boardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['board'], meta: { name: 'board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {boardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends boardFindUniqueArgs>(args: SelectSubset<T, boardFindUniqueArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {boardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends boardFindUniqueOrThrowArgs>(args: SelectSubset<T, boardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends boardFindFirstArgs>(args?: SelectSubset<T, boardFindFirstArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends boardFindFirstOrThrowArgs>(args?: SelectSubset<T, boardFindFirstOrThrowArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends boardFindManyArgs>(args?: SelectSubset<T, boardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {boardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends boardCreateArgs>(args: SelectSubset<T, boardCreateArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {boardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends boardCreateManyArgs>(args?: SelectSubset<T, boardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {boardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends boardDeleteArgs>(args: SelectSubset<T, boardDeleteArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {boardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends boardUpdateArgs>(args: SelectSubset<T, boardUpdateArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {boardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends boardDeleteManyArgs>(args?: SelectSubset<T, boardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends boardUpdateManyArgs>(args: SelectSubset<T, boardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {boardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends boardUpsertArgs>(args: SelectSubset<T, boardUpsertArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends boardCountArgs>(
      args?: Subset<T, boardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boardGroupByArgs} args - Group by arguments.
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
      T extends boardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: boardGroupByArgs['orderBy'] }
        : { orderBy?: boardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, boardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the board model
   */
  readonly fields: boardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__boardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hasUser<T extends board$hasUserArgs<ExtArgs> = {}>(args?: Subset<T, board$hasUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$boardMemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boardTask<T extends board$boardTaskArgs<ExtArgs> = {}>(args?: Subset<T, board$boardTaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boardText<T extends board$boardTextArgs<ExtArgs> = {}>(args?: Subset<T, board$boardTextArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the board model
   */
  interface boardFieldRefs {
    readonly id: FieldRef<"board", 'String'>
    readonly ownerId: FieldRef<"board", 'String'>
    readonly boardName: FieldRef<"board", 'String'>
    readonly boardDes: FieldRef<"board", 'String'>
  }
    

  // Custom InputTypes
  /**
   * board findUnique
   */
  export type boardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter, which board to fetch.
     */
    where: boardWhereUniqueInput
  }

  /**
   * board findUniqueOrThrow
   */
  export type boardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter, which board to fetch.
     */
    where: boardWhereUniqueInput
  }

  /**
   * board findFirst
   */
  export type boardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter, which board to fetch.
     */
    where?: boardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardOrderByWithRelationInput | boardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * board findFirstOrThrow
   */
  export type boardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter, which board to fetch.
     */
    where?: boardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardOrderByWithRelationInput | boardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boards.
     */
    cursor?: boardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * board findMany
   */
  export type boardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter, which boards to fetch.
     */
    where?: boardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boards to fetch.
     */
    orderBy?: boardOrderByWithRelationInput | boardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boards.
     */
    cursor?: boardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * board create
   */
  export type boardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * The data needed to create a board.
     */
    data: XOR<boardCreateInput, boardUncheckedCreateInput>
  }

  /**
   * board createMany
   */
  export type boardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many boards.
     */
    data: boardCreateManyInput | boardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * board update
   */
  export type boardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * The data needed to update a board.
     */
    data: XOR<boardUpdateInput, boardUncheckedUpdateInput>
    /**
     * Choose, which board to update.
     */
    where: boardWhereUniqueInput
  }

  /**
   * board updateMany
   */
  export type boardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update boards.
     */
    data: XOR<boardUpdateManyMutationInput, boardUncheckedUpdateManyInput>
    /**
     * Filter which boards to update
     */
    where?: boardWhereInput
    /**
     * Limit how many boards to update.
     */
    limit?: number
  }

  /**
   * board upsert
   */
  export type boardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * The filter to search for the board to update in case it exists.
     */
    where: boardWhereUniqueInput
    /**
     * In case the board found by the `where` argument doesn't exist, create a new board with this data.
     */
    create: XOR<boardCreateInput, boardUncheckedCreateInput>
    /**
     * In case the board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boardUpdateInput, boardUncheckedUpdateInput>
  }

  /**
   * board delete
   */
  export type boardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
    /**
     * Filter which board to delete.
     */
    where: boardWhereUniqueInput
  }

  /**
   * board deleteMany
   */
  export type boardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which boards to delete
     */
    where?: boardWhereInput
    /**
     * Limit how many boards to delete.
     */
    limit?: number
  }

  /**
   * board.hasUser
   */
  export type board$hasUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the boardMem
     */
    select?: boardMemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the boardMem
     */
    omit?: boardMemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
    where?: boardMemWhereInput
    orderBy?: boardMemOrderByWithRelationInput | boardMemOrderByWithRelationInput[]
    cursor?: boardMemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardMemScalarFieldEnum | BoardMemScalarFieldEnum[]
  }

  /**
   * board.boardTask
   */
  export type board$boardTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * board.boardText
   */
  export type board$boardTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    where?: markdowntextWhereInput
    orderBy?: markdowntextOrderByWithRelationInput | markdowntextOrderByWithRelationInput[]
    cursor?: markdowntextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkdowntextScalarFieldEnum | MarkdowntextScalarFieldEnum[]
  }

  /**
   * board without action
   */
  export type boardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the board
     */
    select?: boardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the board
     */
    omit?: boardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardInclude<ExtArgs> | null
  }


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
    inBoardId: string | null
    userBoardId: string | null
    role: $Enums.Role | null
  }

  export type BoardMemMaxAggregateOutputType = {
    boardMem: string | null
    inBoardId: string | null
    userBoardId: string | null
    role: $Enums.Role | null
  }

  export type BoardMemCountAggregateOutputType = {
    boardMem: number
    inBoardId: number
    userBoardId: number
    role: number
    _all: number
  }


  export type BoardMemMinAggregateInputType = {
    boardMem?: true
    inBoardId?: true
    userBoardId?: true
    role?: true
  }

  export type BoardMemMaxAggregateInputType = {
    boardMem?: true
    inBoardId?: true
    userBoardId?: true
    role?: true
  }

  export type BoardMemCountAggregateInputType = {
    boardMem?: true
    inBoardId?: true
    userBoardId?: true
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
    inBoardId: string
    userBoardId: string
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
    inBoardId?: boolean
    userBoardId?: boolean
    role?: boolean
    inBoard?: boolean | boardDefaultArgs<ExtArgs>
    userBoard?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardMem"]>



  export type boardMemSelectScalar = {
    boardMem?: boolean
    inBoardId?: boolean
    userBoardId?: boolean
    role?: boolean
  }

  export type boardMemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"boardMem" | "inBoardId" | "userBoardId" | "role", ExtArgs["result"]["boardMem"]>
  export type boardMemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inBoard?: boolean | boardDefaultArgs<ExtArgs>
    userBoard?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $boardMemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "boardMem"
    objects: {
      inBoard: Prisma.$boardPayload<ExtArgs>
      userBoard: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      boardMem: string
      inBoardId: string
      userBoardId: string
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
    inBoard<T extends boardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardDefaultArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userBoard<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly inBoardId: FieldRef<"boardMem", 'String'>
    readonly userBoardId: FieldRef<"boardMem", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
    /**
     * The data needed to create a boardMem.
     */
    data: XOR<boardMemCreateInput, boardMemUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: boardMemInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    taskid: string | null
    taskBoardId: string | null
    name: string | null
    description: string | null
  }

  export type TasksMaxAggregateOutputType = {
    taskid: string | null
    taskBoardId: string | null
    name: string | null
    description: string | null
  }

  export type TasksCountAggregateOutputType = {
    taskid: number
    taskBoardId: number
    name: number
    description: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    taskid?: true
    taskBoardId?: true
    name?: true
    description?: true
  }

  export type TasksMaxAggregateInputType = {
    taskid?: true
    taskBoardId?: true
    name?: true
    description?: true
  }

  export type TasksCountAggregateInputType = {
    taskid?: true
    taskBoardId?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    taskid: string
    taskBoardId: string
    name: string
    description: string | null
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskid?: boolean
    taskBoardId?: boolean
    name?: boolean
    description?: boolean
    taskBoard?: boolean | boardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>



  export type tasksSelectScalar = {
    taskid?: boolean
    taskBoardId?: boolean
    name?: boolean
    description?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskid" | "taskBoardId" | "name" | "description", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskBoard?: boolean | boardDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      taskBoard: Prisma.$boardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taskid: string
      taskBoardId: string
      name: string
      description: string | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `taskid`
     * const tasksWithTaskidOnly = await prisma.tasks.findMany({ select: { taskid: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
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
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskBoard<T extends boardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardDefaultArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly taskid: FieldRef<"tasks", 'String'>
    readonly taskBoardId: FieldRef<"tasks", 'String'>
    readonly name: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model markdowntext
   */

  export type AggregateMarkdowntext = {
    _count: MarkdowntextCountAggregateOutputType | null
    _min: MarkdowntextMinAggregateOutputType | null
    _max: MarkdowntextMaxAggregateOutputType | null
  }

  export type MarkdowntextMinAggregateOutputType = {
    textid: string | null
    textBoardId: string | null
    content: string | null
  }

  export type MarkdowntextMaxAggregateOutputType = {
    textid: string | null
    textBoardId: string | null
    content: string | null
  }

  export type MarkdowntextCountAggregateOutputType = {
    textid: number
    textBoardId: number
    content: number
    _all: number
  }


  export type MarkdowntextMinAggregateInputType = {
    textid?: true
    textBoardId?: true
    content?: true
  }

  export type MarkdowntextMaxAggregateInputType = {
    textid?: true
    textBoardId?: true
    content?: true
  }

  export type MarkdowntextCountAggregateInputType = {
    textid?: true
    textBoardId?: true
    content?: true
    _all?: true
  }

  export type MarkdowntextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which markdowntext to aggregate.
     */
    where?: markdowntextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of markdowntexts to fetch.
     */
    orderBy?: markdowntextOrderByWithRelationInput | markdowntextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: markdowntextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` markdowntexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` markdowntexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned markdowntexts
    **/
    _count?: true | MarkdowntextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkdowntextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkdowntextMaxAggregateInputType
  }

  export type GetMarkdowntextAggregateType<T extends MarkdowntextAggregateArgs> = {
        [P in keyof T & keyof AggregateMarkdowntext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkdowntext[P]>
      : GetScalarType<T[P], AggregateMarkdowntext[P]>
  }




  export type markdowntextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: markdowntextWhereInput
    orderBy?: markdowntextOrderByWithAggregationInput | markdowntextOrderByWithAggregationInput[]
    by: MarkdowntextScalarFieldEnum[] | MarkdowntextScalarFieldEnum
    having?: markdowntextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkdowntextCountAggregateInputType | true
    _min?: MarkdowntextMinAggregateInputType
    _max?: MarkdowntextMaxAggregateInputType
  }

  export type MarkdowntextGroupByOutputType = {
    textid: string
    textBoardId: string
    content: string
    _count: MarkdowntextCountAggregateOutputType | null
    _min: MarkdowntextMinAggregateOutputType | null
    _max: MarkdowntextMaxAggregateOutputType | null
  }

  type GetMarkdowntextGroupByPayload<T extends markdowntextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkdowntextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkdowntextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkdowntextGroupByOutputType[P]>
            : GetScalarType<T[P], MarkdowntextGroupByOutputType[P]>
        }
      >
    >


  export type markdowntextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    textid?: boolean
    textBoardId?: boolean
    content?: boolean
    textBoard?: boolean | boardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markdowntext"]>



  export type markdowntextSelectScalar = {
    textid?: boolean
    textBoardId?: boolean
    content?: boolean
  }

  export type markdowntextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"textid" | "textBoardId" | "content", ExtArgs["result"]["markdowntext"]>
  export type markdowntextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textBoard?: boolean | boardDefaultArgs<ExtArgs>
  }

  export type $markdowntextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "markdowntext"
    objects: {
      textBoard: Prisma.$boardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      textid: string
      textBoardId: string
      content: string
    }, ExtArgs["result"]["markdowntext"]>
    composites: {}
  }

  type markdowntextGetPayload<S extends boolean | null | undefined | markdowntextDefaultArgs> = $Result.GetResult<Prisma.$markdowntextPayload, S>

  type markdowntextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<markdowntextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkdowntextCountAggregateInputType | true
    }

  export interface markdowntextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['markdowntext'], meta: { name: 'markdowntext' } }
    /**
     * Find zero or one Markdowntext that matches the filter.
     * @param {markdowntextFindUniqueArgs} args - Arguments to find a Markdowntext
     * @example
     * // Get one Markdowntext
     * const markdowntext = await prisma.markdowntext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends markdowntextFindUniqueArgs>(args: SelectSubset<T, markdowntextFindUniqueArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Markdowntext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {markdowntextFindUniqueOrThrowArgs} args - Arguments to find a Markdowntext
     * @example
     * // Get one Markdowntext
     * const markdowntext = await prisma.markdowntext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends markdowntextFindUniqueOrThrowArgs>(args: SelectSubset<T, markdowntextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Markdowntext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextFindFirstArgs} args - Arguments to find a Markdowntext
     * @example
     * // Get one Markdowntext
     * const markdowntext = await prisma.markdowntext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends markdowntextFindFirstArgs>(args?: SelectSubset<T, markdowntextFindFirstArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Markdowntext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextFindFirstOrThrowArgs} args - Arguments to find a Markdowntext
     * @example
     * // Get one Markdowntext
     * const markdowntext = await prisma.markdowntext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends markdowntextFindFirstOrThrowArgs>(args?: SelectSubset<T, markdowntextFindFirstOrThrowArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markdowntexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markdowntexts
     * const markdowntexts = await prisma.markdowntext.findMany()
     * 
     * // Get first 10 Markdowntexts
     * const markdowntexts = await prisma.markdowntext.findMany({ take: 10 })
     * 
     * // Only select the `textid`
     * const markdowntextWithTextidOnly = await prisma.markdowntext.findMany({ select: { textid: true } })
     * 
     */
    findMany<T extends markdowntextFindManyArgs>(args?: SelectSubset<T, markdowntextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Markdowntext.
     * @param {markdowntextCreateArgs} args - Arguments to create a Markdowntext.
     * @example
     * // Create one Markdowntext
     * const Markdowntext = await prisma.markdowntext.create({
     *   data: {
     *     // ... data to create a Markdowntext
     *   }
     * })
     * 
     */
    create<T extends markdowntextCreateArgs>(args: SelectSubset<T, markdowntextCreateArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markdowntexts.
     * @param {markdowntextCreateManyArgs} args - Arguments to create many Markdowntexts.
     * @example
     * // Create many Markdowntexts
     * const markdowntext = await prisma.markdowntext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends markdowntextCreateManyArgs>(args?: SelectSubset<T, markdowntextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Markdowntext.
     * @param {markdowntextDeleteArgs} args - Arguments to delete one Markdowntext.
     * @example
     * // Delete one Markdowntext
     * const Markdowntext = await prisma.markdowntext.delete({
     *   where: {
     *     // ... filter to delete one Markdowntext
     *   }
     * })
     * 
     */
    delete<T extends markdowntextDeleteArgs>(args: SelectSubset<T, markdowntextDeleteArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Markdowntext.
     * @param {markdowntextUpdateArgs} args - Arguments to update one Markdowntext.
     * @example
     * // Update one Markdowntext
     * const markdowntext = await prisma.markdowntext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends markdowntextUpdateArgs>(args: SelectSubset<T, markdowntextUpdateArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markdowntexts.
     * @param {markdowntextDeleteManyArgs} args - Arguments to filter Markdowntexts to delete.
     * @example
     * // Delete a few Markdowntexts
     * const { count } = await prisma.markdowntext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends markdowntextDeleteManyArgs>(args?: SelectSubset<T, markdowntextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markdowntexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markdowntexts
     * const markdowntext = await prisma.markdowntext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends markdowntextUpdateManyArgs>(args: SelectSubset<T, markdowntextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Markdowntext.
     * @param {markdowntextUpsertArgs} args - Arguments to update or create a Markdowntext.
     * @example
     * // Update or create a Markdowntext
     * const markdowntext = await prisma.markdowntext.upsert({
     *   create: {
     *     // ... data to create a Markdowntext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Markdowntext we want to update
     *   }
     * })
     */
    upsert<T extends markdowntextUpsertArgs>(args: SelectSubset<T, markdowntextUpsertArgs<ExtArgs>>): Prisma__markdowntextClient<$Result.GetResult<Prisma.$markdowntextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markdowntexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextCountArgs} args - Arguments to filter Markdowntexts to count.
     * @example
     * // Count the number of Markdowntexts
     * const count = await prisma.markdowntext.count({
     *   where: {
     *     // ... the filter for the Markdowntexts we want to count
     *   }
     * })
    **/
    count<T extends markdowntextCountArgs>(
      args?: Subset<T, markdowntextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkdowntextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Markdowntext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkdowntextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkdowntextAggregateArgs>(args: Subset<T, MarkdowntextAggregateArgs>): Prisma.PrismaPromise<GetMarkdowntextAggregateType<T>>

    /**
     * Group by Markdowntext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {markdowntextGroupByArgs} args - Group by arguments.
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
      T extends markdowntextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: markdowntextGroupByArgs['orderBy'] }
        : { orderBy?: markdowntextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, markdowntextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkdowntextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the markdowntext model
   */
  readonly fields: markdowntextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for markdowntext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__markdowntextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    textBoard<T extends boardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, boardDefaultArgs<ExtArgs>>): Prisma__boardClient<$Result.GetResult<Prisma.$boardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the markdowntext model
   */
  interface markdowntextFieldRefs {
    readonly textid: FieldRef<"markdowntext", 'String'>
    readonly textBoardId: FieldRef<"markdowntext", 'String'>
    readonly content: FieldRef<"markdowntext", 'String'>
  }
    

  // Custom InputTypes
  /**
   * markdowntext findUnique
   */
  export type markdowntextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter, which markdowntext to fetch.
     */
    where: markdowntextWhereUniqueInput
  }

  /**
   * markdowntext findUniqueOrThrow
   */
  export type markdowntextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter, which markdowntext to fetch.
     */
    where: markdowntextWhereUniqueInput
  }

  /**
   * markdowntext findFirst
   */
  export type markdowntextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter, which markdowntext to fetch.
     */
    where?: markdowntextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of markdowntexts to fetch.
     */
    orderBy?: markdowntextOrderByWithRelationInput | markdowntextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for markdowntexts.
     */
    cursor?: markdowntextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` markdowntexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` markdowntexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of markdowntexts.
     */
    distinct?: MarkdowntextScalarFieldEnum | MarkdowntextScalarFieldEnum[]
  }

  /**
   * markdowntext findFirstOrThrow
   */
  export type markdowntextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter, which markdowntext to fetch.
     */
    where?: markdowntextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of markdowntexts to fetch.
     */
    orderBy?: markdowntextOrderByWithRelationInput | markdowntextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for markdowntexts.
     */
    cursor?: markdowntextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` markdowntexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` markdowntexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of markdowntexts.
     */
    distinct?: MarkdowntextScalarFieldEnum | MarkdowntextScalarFieldEnum[]
  }

  /**
   * markdowntext findMany
   */
  export type markdowntextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter, which markdowntexts to fetch.
     */
    where?: markdowntextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of markdowntexts to fetch.
     */
    orderBy?: markdowntextOrderByWithRelationInput | markdowntextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing markdowntexts.
     */
    cursor?: markdowntextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` markdowntexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` markdowntexts.
     */
    skip?: number
    distinct?: MarkdowntextScalarFieldEnum | MarkdowntextScalarFieldEnum[]
  }

  /**
   * markdowntext create
   */
  export type markdowntextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * The data needed to create a markdowntext.
     */
    data: XOR<markdowntextCreateInput, markdowntextUncheckedCreateInput>
  }

  /**
   * markdowntext createMany
   */
  export type markdowntextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many markdowntexts.
     */
    data: markdowntextCreateManyInput | markdowntextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * markdowntext update
   */
  export type markdowntextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * The data needed to update a markdowntext.
     */
    data: XOR<markdowntextUpdateInput, markdowntextUncheckedUpdateInput>
    /**
     * Choose, which markdowntext to update.
     */
    where: markdowntextWhereUniqueInput
  }

  /**
   * markdowntext updateMany
   */
  export type markdowntextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update markdowntexts.
     */
    data: XOR<markdowntextUpdateManyMutationInput, markdowntextUncheckedUpdateManyInput>
    /**
     * Filter which markdowntexts to update
     */
    where?: markdowntextWhereInput
    /**
     * Limit how many markdowntexts to update.
     */
    limit?: number
  }

  /**
   * markdowntext upsert
   */
  export type markdowntextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * The filter to search for the markdowntext to update in case it exists.
     */
    where: markdowntextWhereUniqueInput
    /**
     * In case the markdowntext found by the `where` argument doesn't exist, create a new markdowntext with this data.
     */
    create: XOR<markdowntextCreateInput, markdowntextUncheckedCreateInput>
    /**
     * In case the markdowntext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<markdowntextUpdateInput, markdowntextUncheckedUpdateInput>
  }

  /**
   * markdowntext delete
   */
  export type markdowntextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
    /**
     * Filter which markdowntext to delete.
     */
    where: markdowntextWhereUniqueInput
  }

  /**
   * markdowntext deleteMany
   */
  export type markdowntextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which markdowntexts to delete
     */
    where?: markdowntextWhereInput
    /**
     * Limit how many markdowntexts to delete.
     */
    limit?: number
  }

  /**
   * markdowntext without action
   */
  export type markdowntextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the markdowntext
     */
    select?: markdowntextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the markdowntext
     */
    omit?: markdowntextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: markdowntextInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    boardName: 'boardName',
    boardDes: 'boardDes'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardMemScalarFieldEnum: {
    boardMem: 'boardMem',
    inBoardId: 'inBoardId',
    userBoardId: 'userBoardId',
    role: 'role'
  };

  export type BoardMemScalarFieldEnum = (typeof BoardMemScalarFieldEnum)[keyof typeof BoardMemScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    taskid: 'taskid',
    taskBoardId: 'taskBoardId',
    name: 'name',
    description: 'description'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const MarkdowntextScalarFieldEnum: {
    textid: 'textid',
    textBoardId: 'textBoardId',
    content: 'content'
  };

  export type MarkdowntextScalarFieldEnum = (typeof MarkdowntextScalarFieldEnum)[keyof typeof MarkdowntextScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const boardOrderByRelevanceFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    boardName: 'boardName',
    boardDes: 'boardDes'
  };

  export type boardOrderByRelevanceFieldEnum = (typeof boardOrderByRelevanceFieldEnum)[keyof typeof boardOrderByRelevanceFieldEnum]


  export const boardMemOrderByRelevanceFieldEnum: {
    boardMem: 'boardMem',
    inBoardId: 'inBoardId',
    userBoardId: 'userBoardId'
  };

  export type boardMemOrderByRelevanceFieldEnum = (typeof boardMemOrderByRelevanceFieldEnum)[keyof typeof boardMemOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tasksOrderByRelevanceFieldEnum: {
    taskid: 'taskid',
    taskBoardId: 'taskBoardId',
    name: 'name',
    description: 'description'
  };

  export type tasksOrderByRelevanceFieldEnum = (typeof tasksOrderByRelevanceFieldEnum)[keyof typeof tasksOrderByRelevanceFieldEnum]


  export const markdowntextOrderByRelevanceFieldEnum: {
    textid: 'textid',
    textBoardId: 'textBoardId',
    content: 'content'
  };

  export type markdowntextOrderByRelevanceFieldEnum = (typeof markdowntextOrderByRelevanceFieldEnum)[keyof typeof markdowntextOrderByRelevanceFieldEnum]


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    hasBoard?: XOR<BoardNullableScalarRelationFilter, boardWhereInput> | null
    hasUser?: BoardMemListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hasBoard?: boardOrderByWithRelationInput
    hasUser?: boardMemOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    hasBoard?: XOR<BoardNullableScalarRelationFilter, boardWhereInput> | null
    hasUser?: BoardMemListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type boardWhereInput = {
    AND?: boardWhereInput | boardWhereInput[]
    OR?: boardWhereInput[]
    NOT?: boardWhereInput | boardWhereInput[]
    id?: StringFilter<"board"> | string
    ownerId?: StringFilter<"board"> | string
    boardName?: StringFilter<"board"> | string
    boardDes?: StringFilter<"board"> | string
    owner?: XOR<UserScalarRelationFilter, userWhereInput>
    hasUser?: BoardMemListRelationFilter
    boardTask?: TasksListRelationFilter
    boardText?: MarkdowntextListRelationFilter
  }

  export type boardOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    boardName?: SortOrder
    boardDes?: SortOrder
    owner?: userOrderByWithRelationInput
    hasUser?: boardMemOrderByRelationAggregateInput
    boardTask?: tasksOrderByRelationAggregateInput
    boardText?: markdowntextOrderByRelationAggregateInput
    _relevance?: boardOrderByRelevanceInput
  }

  export type boardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId?: string
    AND?: boardWhereInput | boardWhereInput[]
    OR?: boardWhereInput[]
    NOT?: boardWhereInput | boardWhereInput[]
    boardName?: StringFilter<"board"> | string
    boardDes?: StringFilter<"board"> | string
    owner?: XOR<UserScalarRelationFilter, userWhereInput>
    hasUser?: BoardMemListRelationFilter
    boardTask?: TasksListRelationFilter
    boardText?: MarkdowntextListRelationFilter
  }, "id" | "ownerId">

  export type boardOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    boardName?: SortOrder
    boardDes?: SortOrder
    _count?: boardCountOrderByAggregateInput
    _max?: boardMaxOrderByAggregateInput
    _min?: boardMinOrderByAggregateInput
  }

  export type boardScalarWhereWithAggregatesInput = {
    AND?: boardScalarWhereWithAggregatesInput | boardScalarWhereWithAggregatesInput[]
    OR?: boardScalarWhereWithAggregatesInput[]
    NOT?: boardScalarWhereWithAggregatesInput | boardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"board"> | string
    ownerId?: StringWithAggregatesFilter<"board"> | string
    boardName?: StringWithAggregatesFilter<"board"> | string
    boardDes?: StringWithAggregatesFilter<"board"> | string
  }

  export type boardMemWhereInput = {
    AND?: boardMemWhereInput | boardMemWhereInput[]
    OR?: boardMemWhereInput[]
    NOT?: boardMemWhereInput | boardMemWhereInput[]
    boardMem?: StringFilter<"boardMem"> | string
    inBoardId?: StringFilter<"boardMem"> | string
    userBoardId?: StringFilter<"boardMem"> | string
    role?: EnumRoleFilter<"boardMem"> | $Enums.Role
    inBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
    userBoard?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type boardMemOrderByWithRelationInput = {
    boardMem?: SortOrder
    inBoardId?: SortOrder
    userBoardId?: SortOrder
    role?: SortOrder
    inBoard?: boardOrderByWithRelationInput
    userBoard?: userOrderByWithRelationInput
    _relevance?: boardMemOrderByRelevanceInput
  }

  export type boardMemWhereUniqueInput = Prisma.AtLeast<{
    boardMem?: string
    AND?: boardMemWhereInput | boardMemWhereInput[]
    OR?: boardMemWhereInput[]
    NOT?: boardMemWhereInput | boardMemWhereInput[]
    inBoardId?: StringFilter<"boardMem"> | string
    userBoardId?: StringFilter<"boardMem"> | string
    role?: EnumRoleFilter<"boardMem"> | $Enums.Role
    inBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
    userBoard?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "boardMem">

  export type boardMemOrderByWithAggregationInput = {
    boardMem?: SortOrder
    inBoardId?: SortOrder
    userBoardId?: SortOrder
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
    inBoardId?: StringWithAggregatesFilter<"boardMem"> | string
    userBoardId?: StringWithAggregatesFilter<"boardMem"> | string
    role?: EnumRoleWithAggregatesFilter<"boardMem"> | $Enums.Role
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    taskid?: StringFilter<"tasks"> | string
    taskBoardId?: StringFilter<"tasks"> | string
    name?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    taskBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
  }

  export type tasksOrderByWithRelationInput = {
    taskid?: SortOrder
    taskBoardId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    taskBoard?: boardOrderByWithRelationInput
    _relevance?: tasksOrderByRelevanceInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    taskid?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    taskBoardId?: StringFilter<"tasks"> | string
    name?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    taskBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
  }, "taskid">

  export type tasksOrderByWithAggregationInput = {
    taskid?: SortOrder
    taskBoardId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    taskid?: StringWithAggregatesFilter<"tasks"> | string
    taskBoardId?: StringWithAggregatesFilter<"tasks"> | string
    name?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
  }

  export type markdowntextWhereInput = {
    AND?: markdowntextWhereInput | markdowntextWhereInput[]
    OR?: markdowntextWhereInput[]
    NOT?: markdowntextWhereInput | markdowntextWhereInput[]
    textid?: StringFilter<"markdowntext"> | string
    textBoardId?: StringFilter<"markdowntext"> | string
    content?: StringFilter<"markdowntext"> | string
    textBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
  }

  export type markdowntextOrderByWithRelationInput = {
    textid?: SortOrder
    textBoardId?: SortOrder
    content?: SortOrder
    textBoard?: boardOrderByWithRelationInput
    _relevance?: markdowntextOrderByRelevanceInput
  }

  export type markdowntextWhereUniqueInput = Prisma.AtLeast<{
    textid?: string
    AND?: markdowntextWhereInput | markdowntextWhereInput[]
    OR?: markdowntextWhereInput[]
    NOT?: markdowntextWhereInput | markdowntextWhereInput[]
    textBoardId?: StringFilter<"markdowntext"> | string
    content?: StringFilter<"markdowntext"> | string
    textBoard?: XOR<BoardScalarRelationFilter, boardWhereInput>
  }, "textid">

  export type markdowntextOrderByWithAggregationInput = {
    textid?: SortOrder
    textBoardId?: SortOrder
    content?: SortOrder
    _count?: markdowntextCountOrderByAggregateInput
    _max?: markdowntextMaxOrderByAggregateInput
    _min?: markdowntextMinOrderByAggregateInput
  }

  export type markdowntextScalarWhereWithAggregatesInput = {
    AND?: markdowntextScalarWhereWithAggregatesInput | markdowntextScalarWhereWithAggregatesInput[]
    OR?: markdowntextScalarWhereWithAggregatesInput[]
    NOT?: markdowntextScalarWhereWithAggregatesInput | markdowntextScalarWhereWithAggregatesInput[]
    textid?: StringWithAggregatesFilter<"markdowntext"> | string
    textBoardId?: StringWithAggregatesFilter<"markdowntext"> | string
    content?: StringWithAggregatesFilter<"markdowntext"> | string
  }

  export type userCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    hasBoard?: boardCreateNestedOneWithoutOwnerInput
    hasUser?: boardMemCreateNestedManyWithoutUserBoardInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    hasBoard?: boardUncheckedCreateNestedOneWithoutOwnerInput
    hasUser?: boardMemUncheckedCreateNestedManyWithoutUserBoardInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasBoard?: boardUpdateOneWithoutOwnerNestedInput
    hasUser?: boardMemUpdateManyWithoutUserBoardNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasBoard?: boardUncheckedUpdateOneWithoutOwnerNestedInput
    hasUser?: boardMemUncheckedUpdateManyWithoutUserBoardNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type boardCreateInput = {
    id?: string
    boardName: string
    boardDes: string
    owner: userCreateNestedOneWithoutHasBoardInput
    hasUser?: boardMemCreateNestedManyWithoutInBoardInput
    boardTask?: tasksCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextCreateNestedManyWithoutTextBoardInput
  }

  export type boardUncheckedCreateInput = {
    id?: string
    ownerId: string
    boardName: string
    boardDes: string
    hasUser?: boardMemUncheckedCreateNestedManyWithoutInBoardInput
    boardTask?: tasksUncheckedCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextUncheckedCreateNestedManyWithoutTextBoardInput
  }

  export type boardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    owner?: userUpdateOneRequiredWithoutHasBoardNestedInput
    hasUser?: boardMemUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUpdateManyWithoutTextBoardNestedInput
  }

  export type boardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUncheckedUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUncheckedUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUncheckedUpdateManyWithoutTextBoardNestedInput
  }

  export type boardCreateManyInput = {
    id?: string
    ownerId: string
    boardName: string
    boardDes: string
  }

  export type boardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
  }

  export type boardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
  }

  export type boardMemCreateInput = {
    boardMem?: string
    role?: $Enums.Role
    inBoard: boardCreateNestedOneWithoutHasUserInput
    userBoard: userCreateNestedOneWithoutHasUserInput
  }

  export type boardMemUncheckedCreateInput = {
    boardMem?: string
    inBoardId: string
    userBoardId: string
    role?: $Enums.Role
  }

  export type boardMemUpdateInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    inBoard?: boardUpdateOneRequiredWithoutHasUserNestedInput
    userBoard?: userUpdateOneRequiredWithoutHasUserNestedInput
  }

  export type boardMemUncheckedUpdateInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    inBoardId?: StringFieldUpdateOperationsInput | string
    userBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemCreateManyInput = {
    boardMem?: string
    inBoardId: string
    userBoardId: string
    role?: $Enums.Role
  }

  export type boardMemUpdateManyMutationInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemUncheckedUpdateManyInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    inBoardId?: StringFieldUpdateOperationsInput | string
    userBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type tasksCreateInput = {
    taskid?: string
    name: string
    description?: string | null
    taskBoard: boardCreateNestedOneWithoutBoardTaskInput
  }

  export type tasksUncheckedCreateInput = {
    taskid?: string
    taskBoardId: string
    name: string
    description?: string | null
  }

  export type tasksUpdateInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    taskBoard?: boardUpdateOneRequiredWithoutBoardTaskNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    taskBoardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksCreateManyInput = {
    taskid?: string
    taskBoardId: string
    name: string
    description?: string | null
  }

  export type tasksUpdateManyMutationInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    taskBoardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type markdowntextCreateInput = {
    textid?: string
    content: string
    textBoard: boardCreateNestedOneWithoutBoardTextInput
  }

  export type markdowntextUncheckedCreateInput = {
    textid?: string
    textBoardId: string
    content: string
  }

  export type markdowntextUpdateInput = {
    textid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    textBoard?: boardUpdateOneRequiredWithoutBoardTextNestedInput
  }

  export type markdowntextUncheckedUpdateInput = {
    textid?: StringFieldUpdateOperationsInput | string
    textBoardId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type markdowntextCreateManyInput = {
    textid?: string
    textBoardId: string
    content: string
  }

  export type markdowntextUpdateManyMutationInput = {
    textid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type markdowntextUncheckedUpdateManyInput = {
    textid?: StringFieldUpdateOperationsInput | string
    textBoardId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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

  export type BoardNullableScalarRelationFilter = {
    is?: boardWhereInput | null
    isNot?: boardWhereInput | null
  }

  export type BoardMemListRelationFilter = {
    every?: boardMemWhereInput
    some?: boardMemWhereInput
    none?: boardMemWhereInput
  }

  export type boardMemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type MarkdowntextListRelationFilter = {
    every?: markdowntextWhereInput
    some?: markdowntextWhereInput
    none?: markdowntextWhereInput
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type markdowntextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boardOrderByRelevanceInput = {
    fields: boardOrderByRelevanceFieldEnum | boardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type boardCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    boardName?: SortOrder
    boardDes?: SortOrder
  }

  export type boardMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    boardName?: SortOrder
    boardDes?: SortOrder
  }

  export type boardMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    boardName?: SortOrder
    boardDes?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoardScalarRelationFilter = {
    is?: boardWhereInput
    isNot?: boardWhereInput
  }

  export type boardMemOrderByRelevanceInput = {
    fields: boardMemOrderByRelevanceFieldEnum | boardMemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type boardMemCountOrderByAggregateInput = {
    boardMem?: SortOrder
    inBoardId?: SortOrder
    userBoardId?: SortOrder
    role?: SortOrder
  }

  export type boardMemMaxOrderByAggregateInput = {
    boardMem?: SortOrder
    inBoardId?: SortOrder
    userBoardId?: SortOrder
    role?: SortOrder
  }

  export type boardMemMinOrderByAggregateInput = {
    boardMem?: SortOrder
    inBoardId?: SortOrder
    userBoardId?: SortOrder
    role?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tasksOrderByRelevanceInput = {
    fields: tasksOrderByRelevanceFieldEnum | tasksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tasksCountOrderByAggregateInput = {
    taskid?: SortOrder
    taskBoardId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    taskid?: SortOrder
    taskBoardId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    taskid?: SortOrder
    taskBoardId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type markdowntextOrderByRelevanceInput = {
    fields: markdowntextOrderByRelevanceFieldEnum | markdowntextOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type markdowntextCountOrderByAggregateInput = {
    textid?: SortOrder
    textBoardId?: SortOrder
    content?: SortOrder
  }

  export type markdowntextMaxOrderByAggregateInput = {
    textid?: SortOrder
    textBoardId?: SortOrder
    content?: SortOrder
  }

  export type markdowntextMinOrderByAggregateInput = {
    textid?: SortOrder
    textBoardId?: SortOrder
    content?: SortOrder
  }

  export type boardCreateNestedOneWithoutOwnerInput = {
    create?: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: boardCreateOrConnectWithoutOwnerInput
    connect?: boardWhereUniqueInput
  }

  export type boardMemCreateNestedManyWithoutUserBoardInput = {
    create?: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput> | boardMemCreateWithoutUserBoardInput[] | boardMemUncheckedCreateWithoutUserBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutUserBoardInput | boardMemCreateOrConnectWithoutUserBoardInput[]
    createMany?: boardMemCreateManyUserBoardInputEnvelope
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
  }

  export type boardUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: boardCreateOrConnectWithoutOwnerInput
    connect?: boardWhereUniqueInput
  }

  export type boardMemUncheckedCreateNestedManyWithoutUserBoardInput = {
    create?: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput> | boardMemCreateWithoutUserBoardInput[] | boardMemUncheckedCreateWithoutUserBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutUserBoardInput | boardMemCreateOrConnectWithoutUserBoardInput[]
    createMany?: boardMemCreateManyUserBoardInputEnvelope
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type boardUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: boardCreateOrConnectWithoutOwnerInput
    upsert?: boardUpsertWithoutOwnerInput
    disconnect?: boardWhereInput | boolean
    delete?: boardWhereInput | boolean
    connect?: boardWhereUniqueInput
    update?: XOR<XOR<boardUpdateToOneWithWhereWithoutOwnerInput, boardUpdateWithoutOwnerInput>, boardUncheckedUpdateWithoutOwnerInput>
  }

  export type boardMemUpdateManyWithoutUserBoardNestedInput = {
    create?: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput> | boardMemCreateWithoutUserBoardInput[] | boardMemUncheckedCreateWithoutUserBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutUserBoardInput | boardMemCreateOrConnectWithoutUserBoardInput[]
    upsert?: boardMemUpsertWithWhereUniqueWithoutUserBoardInput | boardMemUpsertWithWhereUniqueWithoutUserBoardInput[]
    createMany?: boardMemCreateManyUserBoardInputEnvelope
    set?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    disconnect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    delete?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    update?: boardMemUpdateWithWhereUniqueWithoutUserBoardInput | boardMemUpdateWithWhereUniqueWithoutUserBoardInput[]
    updateMany?: boardMemUpdateManyWithWhereWithoutUserBoardInput | boardMemUpdateManyWithWhereWithoutUserBoardInput[]
    deleteMany?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
  }

  export type boardUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: boardCreateOrConnectWithoutOwnerInput
    upsert?: boardUpsertWithoutOwnerInput
    disconnect?: boardWhereInput | boolean
    delete?: boardWhereInput | boolean
    connect?: boardWhereUniqueInput
    update?: XOR<XOR<boardUpdateToOneWithWhereWithoutOwnerInput, boardUpdateWithoutOwnerInput>, boardUncheckedUpdateWithoutOwnerInput>
  }

  export type boardMemUncheckedUpdateManyWithoutUserBoardNestedInput = {
    create?: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput> | boardMemCreateWithoutUserBoardInput[] | boardMemUncheckedCreateWithoutUserBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutUserBoardInput | boardMemCreateOrConnectWithoutUserBoardInput[]
    upsert?: boardMemUpsertWithWhereUniqueWithoutUserBoardInput | boardMemUpsertWithWhereUniqueWithoutUserBoardInput[]
    createMany?: boardMemCreateManyUserBoardInputEnvelope
    set?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    disconnect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    delete?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    update?: boardMemUpdateWithWhereUniqueWithoutUserBoardInput | boardMemUpdateWithWhereUniqueWithoutUserBoardInput[]
    updateMany?: boardMemUpdateManyWithWhereWithoutUserBoardInput | boardMemUpdateManyWithWhereWithoutUserBoardInput[]
    deleteMany?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutHasBoardInput = {
    create?: XOR<userCreateWithoutHasBoardInput, userUncheckedCreateWithoutHasBoardInput>
    connectOrCreate?: userCreateOrConnectWithoutHasBoardInput
    connect?: userWhereUniqueInput
  }

  export type boardMemCreateNestedManyWithoutInBoardInput = {
    create?: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput> | boardMemCreateWithoutInBoardInput[] | boardMemUncheckedCreateWithoutInBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutInBoardInput | boardMemCreateOrConnectWithoutInBoardInput[]
    createMany?: boardMemCreateManyInBoardInputEnvelope
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutTaskBoardInput = {
    create?: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput> | tasksCreateWithoutTaskBoardInput[] | tasksUncheckedCreateWithoutTaskBoardInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTaskBoardInput | tasksCreateOrConnectWithoutTaskBoardInput[]
    createMany?: tasksCreateManyTaskBoardInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type markdowntextCreateNestedManyWithoutTextBoardInput = {
    create?: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput> | markdowntextCreateWithoutTextBoardInput[] | markdowntextUncheckedCreateWithoutTextBoardInput[]
    connectOrCreate?: markdowntextCreateOrConnectWithoutTextBoardInput | markdowntextCreateOrConnectWithoutTextBoardInput[]
    createMany?: markdowntextCreateManyTextBoardInputEnvelope
    connect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
  }

  export type boardMemUncheckedCreateNestedManyWithoutInBoardInput = {
    create?: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput> | boardMemCreateWithoutInBoardInput[] | boardMemUncheckedCreateWithoutInBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutInBoardInput | boardMemCreateOrConnectWithoutInBoardInput[]
    createMany?: boardMemCreateManyInBoardInputEnvelope
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutTaskBoardInput = {
    create?: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput> | tasksCreateWithoutTaskBoardInput[] | tasksUncheckedCreateWithoutTaskBoardInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTaskBoardInput | tasksCreateOrConnectWithoutTaskBoardInput[]
    createMany?: tasksCreateManyTaskBoardInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type markdowntextUncheckedCreateNestedManyWithoutTextBoardInput = {
    create?: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput> | markdowntextCreateWithoutTextBoardInput[] | markdowntextUncheckedCreateWithoutTextBoardInput[]
    connectOrCreate?: markdowntextCreateOrConnectWithoutTextBoardInput | markdowntextCreateOrConnectWithoutTextBoardInput[]
    createMany?: markdowntextCreateManyTextBoardInputEnvelope
    connect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutHasBoardNestedInput = {
    create?: XOR<userCreateWithoutHasBoardInput, userUncheckedCreateWithoutHasBoardInput>
    connectOrCreate?: userCreateOrConnectWithoutHasBoardInput
    upsert?: userUpsertWithoutHasBoardInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHasBoardInput, userUpdateWithoutHasBoardInput>, userUncheckedUpdateWithoutHasBoardInput>
  }

  export type boardMemUpdateManyWithoutInBoardNestedInput = {
    create?: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput> | boardMemCreateWithoutInBoardInput[] | boardMemUncheckedCreateWithoutInBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutInBoardInput | boardMemCreateOrConnectWithoutInBoardInput[]
    upsert?: boardMemUpsertWithWhereUniqueWithoutInBoardInput | boardMemUpsertWithWhereUniqueWithoutInBoardInput[]
    createMany?: boardMemCreateManyInBoardInputEnvelope
    set?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    disconnect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    delete?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    update?: boardMemUpdateWithWhereUniqueWithoutInBoardInput | boardMemUpdateWithWhereUniqueWithoutInBoardInput[]
    updateMany?: boardMemUpdateManyWithWhereWithoutInBoardInput | boardMemUpdateManyWithWhereWithoutInBoardInput[]
    deleteMany?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutTaskBoardNestedInput = {
    create?: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput> | tasksCreateWithoutTaskBoardInput[] | tasksUncheckedCreateWithoutTaskBoardInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTaskBoardInput | tasksCreateOrConnectWithoutTaskBoardInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutTaskBoardInput | tasksUpsertWithWhereUniqueWithoutTaskBoardInput[]
    createMany?: tasksCreateManyTaskBoardInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutTaskBoardInput | tasksUpdateWithWhereUniqueWithoutTaskBoardInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutTaskBoardInput | tasksUpdateManyWithWhereWithoutTaskBoardInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type markdowntextUpdateManyWithoutTextBoardNestedInput = {
    create?: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput> | markdowntextCreateWithoutTextBoardInput[] | markdowntextUncheckedCreateWithoutTextBoardInput[]
    connectOrCreate?: markdowntextCreateOrConnectWithoutTextBoardInput | markdowntextCreateOrConnectWithoutTextBoardInput[]
    upsert?: markdowntextUpsertWithWhereUniqueWithoutTextBoardInput | markdowntextUpsertWithWhereUniqueWithoutTextBoardInput[]
    createMany?: markdowntextCreateManyTextBoardInputEnvelope
    set?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    disconnect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    delete?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    connect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    update?: markdowntextUpdateWithWhereUniqueWithoutTextBoardInput | markdowntextUpdateWithWhereUniqueWithoutTextBoardInput[]
    updateMany?: markdowntextUpdateManyWithWhereWithoutTextBoardInput | markdowntextUpdateManyWithWhereWithoutTextBoardInput[]
    deleteMany?: markdowntextScalarWhereInput | markdowntextScalarWhereInput[]
  }

  export type boardMemUncheckedUpdateManyWithoutInBoardNestedInput = {
    create?: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput> | boardMemCreateWithoutInBoardInput[] | boardMemUncheckedCreateWithoutInBoardInput[]
    connectOrCreate?: boardMemCreateOrConnectWithoutInBoardInput | boardMemCreateOrConnectWithoutInBoardInput[]
    upsert?: boardMemUpsertWithWhereUniqueWithoutInBoardInput | boardMemUpsertWithWhereUniqueWithoutInBoardInput[]
    createMany?: boardMemCreateManyInBoardInputEnvelope
    set?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    disconnect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    delete?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    connect?: boardMemWhereUniqueInput | boardMemWhereUniqueInput[]
    update?: boardMemUpdateWithWhereUniqueWithoutInBoardInput | boardMemUpdateWithWhereUniqueWithoutInBoardInput[]
    updateMany?: boardMemUpdateManyWithWhereWithoutInBoardInput | boardMemUpdateManyWithWhereWithoutInBoardInput[]
    deleteMany?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutTaskBoardNestedInput = {
    create?: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput> | tasksCreateWithoutTaskBoardInput[] | tasksUncheckedCreateWithoutTaskBoardInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutTaskBoardInput | tasksCreateOrConnectWithoutTaskBoardInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutTaskBoardInput | tasksUpsertWithWhereUniqueWithoutTaskBoardInput[]
    createMany?: tasksCreateManyTaskBoardInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutTaskBoardInput | tasksUpdateWithWhereUniqueWithoutTaskBoardInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutTaskBoardInput | tasksUpdateManyWithWhereWithoutTaskBoardInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type markdowntextUncheckedUpdateManyWithoutTextBoardNestedInput = {
    create?: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput> | markdowntextCreateWithoutTextBoardInput[] | markdowntextUncheckedCreateWithoutTextBoardInput[]
    connectOrCreate?: markdowntextCreateOrConnectWithoutTextBoardInput | markdowntextCreateOrConnectWithoutTextBoardInput[]
    upsert?: markdowntextUpsertWithWhereUniqueWithoutTextBoardInput | markdowntextUpsertWithWhereUniqueWithoutTextBoardInput[]
    createMany?: markdowntextCreateManyTextBoardInputEnvelope
    set?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    disconnect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    delete?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    connect?: markdowntextWhereUniqueInput | markdowntextWhereUniqueInput[]
    update?: markdowntextUpdateWithWhereUniqueWithoutTextBoardInput | markdowntextUpdateWithWhereUniqueWithoutTextBoardInput[]
    updateMany?: markdowntextUpdateManyWithWhereWithoutTextBoardInput | markdowntextUpdateManyWithWhereWithoutTextBoardInput[]
    deleteMany?: markdowntextScalarWhereInput | markdowntextScalarWhereInput[]
  }

  export type boardCreateNestedOneWithoutHasUserInput = {
    create?: XOR<boardCreateWithoutHasUserInput, boardUncheckedCreateWithoutHasUserInput>
    connectOrCreate?: boardCreateOrConnectWithoutHasUserInput
    connect?: boardWhereUniqueInput
  }

  export type userCreateNestedOneWithoutHasUserInput = {
    create?: XOR<userCreateWithoutHasUserInput, userUncheckedCreateWithoutHasUserInput>
    connectOrCreate?: userCreateOrConnectWithoutHasUserInput
    connect?: userWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type boardUpdateOneRequiredWithoutHasUserNestedInput = {
    create?: XOR<boardCreateWithoutHasUserInput, boardUncheckedCreateWithoutHasUserInput>
    connectOrCreate?: boardCreateOrConnectWithoutHasUserInput
    upsert?: boardUpsertWithoutHasUserInput
    connect?: boardWhereUniqueInput
    update?: XOR<XOR<boardUpdateToOneWithWhereWithoutHasUserInput, boardUpdateWithoutHasUserInput>, boardUncheckedUpdateWithoutHasUserInput>
  }

  export type userUpdateOneRequiredWithoutHasUserNestedInput = {
    create?: XOR<userCreateWithoutHasUserInput, userUncheckedCreateWithoutHasUserInput>
    connectOrCreate?: userCreateOrConnectWithoutHasUserInput
    upsert?: userUpsertWithoutHasUserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHasUserInput, userUpdateWithoutHasUserInput>, userUncheckedUpdateWithoutHasUserInput>
  }

  export type boardCreateNestedOneWithoutBoardTaskInput = {
    create?: XOR<boardCreateWithoutBoardTaskInput, boardUncheckedCreateWithoutBoardTaskInput>
    connectOrCreate?: boardCreateOrConnectWithoutBoardTaskInput
    connect?: boardWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type boardUpdateOneRequiredWithoutBoardTaskNestedInput = {
    create?: XOR<boardCreateWithoutBoardTaskInput, boardUncheckedCreateWithoutBoardTaskInput>
    connectOrCreate?: boardCreateOrConnectWithoutBoardTaskInput
    upsert?: boardUpsertWithoutBoardTaskInput
    connect?: boardWhereUniqueInput
    update?: XOR<XOR<boardUpdateToOneWithWhereWithoutBoardTaskInput, boardUpdateWithoutBoardTaskInput>, boardUncheckedUpdateWithoutBoardTaskInput>
  }

  export type boardCreateNestedOneWithoutBoardTextInput = {
    create?: XOR<boardCreateWithoutBoardTextInput, boardUncheckedCreateWithoutBoardTextInput>
    connectOrCreate?: boardCreateOrConnectWithoutBoardTextInput
    connect?: boardWhereUniqueInput
  }

  export type boardUpdateOneRequiredWithoutBoardTextNestedInput = {
    create?: XOR<boardCreateWithoutBoardTextInput, boardUncheckedCreateWithoutBoardTextInput>
    connectOrCreate?: boardCreateOrConnectWithoutBoardTextInput
    upsert?: boardUpsertWithoutBoardTextInput
    connect?: boardWhereUniqueInput
    update?: XOR<XOR<boardUpdateToOneWithWhereWithoutBoardTextInput, boardUpdateWithoutBoardTextInput>, boardUncheckedUpdateWithoutBoardTextInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type boardCreateWithoutOwnerInput = {
    id?: string
    boardName: string
    boardDes: string
    hasUser?: boardMemCreateNestedManyWithoutInBoardInput
    boardTask?: tasksCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextCreateNestedManyWithoutTextBoardInput
  }

  export type boardUncheckedCreateWithoutOwnerInput = {
    id?: string
    boardName: string
    boardDes: string
    hasUser?: boardMemUncheckedCreateNestedManyWithoutInBoardInput
    boardTask?: tasksUncheckedCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextUncheckedCreateNestedManyWithoutTextBoardInput
  }

  export type boardCreateOrConnectWithoutOwnerInput = {
    where: boardWhereUniqueInput
    create: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
  }

  export type boardMemCreateWithoutUserBoardInput = {
    boardMem?: string
    role?: $Enums.Role
    inBoard: boardCreateNestedOneWithoutHasUserInput
  }

  export type boardMemUncheckedCreateWithoutUserBoardInput = {
    boardMem?: string
    inBoardId: string
    role?: $Enums.Role
  }

  export type boardMemCreateOrConnectWithoutUserBoardInput = {
    where: boardMemWhereUniqueInput
    create: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput>
  }

  export type boardMemCreateManyUserBoardInputEnvelope = {
    data: boardMemCreateManyUserBoardInput | boardMemCreateManyUserBoardInput[]
    skipDuplicates?: boolean
  }

  export type boardUpsertWithoutOwnerInput = {
    update: XOR<boardUpdateWithoutOwnerInput, boardUncheckedUpdateWithoutOwnerInput>
    create: XOR<boardCreateWithoutOwnerInput, boardUncheckedCreateWithoutOwnerInput>
    where?: boardWhereInput
  }

  export type boardUpdateToOneWithWhereWithoutOwnerInput = {
    where?: boardWhereInput
    data: XOR<boardUpdateWithoutOwnerInput, boardUncheckedUpdateWithoutOwnerInput>
  }

  export type boardUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUpdateManyWithoutTextBoardNestedInput
  }

  export type boardUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUncheckedUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUncheckedUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUncheckedUpdateManyWithoutTextBoardNestedInput
  }

  export type boardMemUpsertWithWhereUniqueWithoutUserBoardInput = {
    where: boardMemWhereUniqueInput
    update: XOR<boardMemUpdateWithoutUserBoardInput, boardMemUncheckedUpdateWithoutUserBoardInput>
    create: XOR<boardMemCreateWithoutUserBoardInput, boardMemUncheckedCreateWithoutUserBoardInput>
  }

  export type boardMemUpdateWithWhereUniqueWithoutUserBoardInput = {
    where: boardMemWhereUniqueInput
    data: XOR<boardMemUpdateWithoutUserBoardInput, boardMemUncheckedUpdateWithoutUserBoardInput>
  }

  export type boardMemUpdateManyWithWhereWithoutUserBoardInput = {
    where: boardMemScalarWhereInput
    data: XOR<boardMemUpdateManyMutationInput, boardMemUncheckedUpdateManyWithoutUserBoardInput>
  }

  export type boardMemScalarWhereInput = {
    AND?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
    OR?: boardMemScalarWhereInput[]
    NOT?: boardMemScalarWhereInput | boardMemScalarWhereInput[]
    boardMem?: StringFilter<"boardMem"> | string
    inBoardId?: StringFilter<"boardMem"> | string
    userBoardId?: StringFilter<"boardMem"> | string
    role?: EnumRoleFilter<"boardMem"> | $Enums.Role
  }

  export type userCreateWithoutHasBoardInput = {
    id?: string
    username: string
    email: string
    password: string
    hasUser?: boardMemCreateNestedManyWithoutUserBoardInput
  }

  export type userUncheckedCreateWithoutHasBoardInput = {
    id?: string
    username: string
    email: string
    password: string
    hasUser?: boardMemUncheckedCreateNestedManyWithoutUserBoardInput
  }

  export type userCreateOrConnectWithoutHasBoardInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHasBoardInput, userUncheckedCreateWithoutHasBoardInput>
  }

  export type boardMemCreateWithoutInBoardInput = {
    boardMem?: string
    role?: $Enums.Role
    userBoard: userCreateNestedOneWithoutHasUserInput
  }

  export type boardMemUncheckedCreateWithoutInBoardInput = {
    boardMem?: string
    userBoardId: string
    role?: $Enums.Role
  }

  export type boardMemCreateOrConnectWithoutInBoardInput = {
    where: boardMemWhereUniqueInput
    create: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput>
  }

  export type boardMemCreateManyInBoardInputEnvelope = {
    data: boardMemCreateManyInBoardInput | boardMemCreateManyInBoardInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutTaskBoardInput = {
    taskid?: string
    name: string
    description?: string | null
  }

  export type tasksUncheckedCreateWithoutTaskBoardInput = {
    taskid?: string
    name: string
    description?: string | null
  }

  export type tasksCreateOrConnectWithoutTaskBoardInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput>
  }

  export type tasksCreateManyTaskBoardInputEnvelope = {
    data: tasksCreateManyTaskBoardInput | tasksCreateManyTaskBoardInput[]
    skipDuplicates?: boolean
  }

  export type markdowntextCreateWithoutTextBoardInput = {
    textid?: string
    content: string
  }

  export type markdowntextUncheckedCreateWithoutTextBoardInput = {
    textid?: string
    content: string
  }

  export type markdowntextCreateOrConnectWithoutTextBoardInput = {
    where: markdowntextWhereUniqueInput
    create: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput>
  }

  export type markdowntextCreateManyTextBoardInputEnvelope = {
    data: markdowntextCreateManyTextBoardInput | markdowntextCreateManyTextBoardInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutHasBoardInput = {
    update: XOR<userUpdateWithoutHasBoardInput, userUncheckedUpdateWithoutHasBoardInput>
    create: XOR<userCreateWithoutHasBoardInput, userUncheckedCreateWithoutHasBoardInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHasBoardInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHasBoardInput, userUncheckedUpdateWithoutHasBoardInput>
  }

  export type userUpdateWithoutHasBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUpdateManyWithoutUserBoardNestedInput
  }

  export type userUncheckedUpdateWithoutHasBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUncheckedUpdateManyWithoutUserBoardNestedInput
  }

  export type boardMemUpsertWithWhereUniqueWithoutInBoardInput = {
    where: boardMemWhereUniqueInput
    update: XOR<boardMemUpdateWithoutInBoardInput, boardMemUncheckedUpdateWithoutInBoardInput>
    create: XOR<boardMemCreateWithoutInBoardInput, boardMemUncheckedCreateWithoutInBoardInput>
  }

  export type boardMemUpdateWithWhereUniqueWithoutInBoardInput = {
    where: boardMemWhereUniqueInput
    data: XOR<boardMemUpdateWithoutInBoardInput, boardMemUncheckedUpdateWithoutInBoardInput>
  }

  export type boardMemUpdateManyWithWhereWithoutInBoardInput = {
    where: boardMemScalarWhereInput
    data: XOR<boardMemUpdateManyMutationInput, boardMemUncheckedUpdateManyWithoutInBoardInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutTaskBoardInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutTaskBoardInput, tasksUncheckedUpdateWithoutTaskBoardInput>
    create: XOR<tasksCreateWithoutTaskBoardInput, tasksUncheckedCreateWithoutTaskBoardInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutTaskBoardInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutTaskBoardInput, tasksUncheckedUpdateWithoutTaskBoardInput>
  }

  export type tasksUpdateManyWithWhereWithoutTaskBoardInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutTaskBoardInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    taskid?: StringFilter<"tasks"> | string
    taskBoardId?: StringFilter<"tasks"> | string
    name?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
  }

  export type markdowntextUpsertWithWhereUniqueWithoutTextBoardInput = {
    where: markdowntextWhereUniqueInput
    update: XOR<markdowntextUpdateWithoutTextBoardInput, markdowntextUncheckedUpdateWithoutTextBoardInput>
    create: XOR<markdowntextCreateWithoutTextBoardInput, markdowntextUncheckedCreateWithoutTextBoardInput>
  }

  export type markdowntextUpdateWithWhereUniqueWithoutTextBoardInput = {
    where: markdowntextWhereUniqueInput
    data: XOR<markdowntextUpdateWithoutTextBoardInput, markdowntextUncheckedUpdateWithoutTextBoardInput>
  }

  export type markdowntextUpdateManyWithWhereWithoutTextBoardInput = {
    where: markdowntextScalarWhereInput
    data: XOR<markdowntextUpdateManyMutationInput, markdowntextUncheckedUpdateManyWithoutTextBoardInput>
  }

  export type markdowntextScalarWhereInput = {
    AND?: markdowntextScalarWhereInput | markdowntextScalarWhereInput[]
    OR?: markdowntextScalarWhereInput[]
    NOT?: markdowntextScalarWhereInput | markdowntextScalarWhereInput[]
    textid?: StringFilter<"markdowntext"> | string
    textBoardId?: StringFilter<"markdowntext"> | string
    content?: StringFilter<"markdowntext"> | string
  }

  export type boardCreateWithoutHasUserInput = {
    id?: string
    boardName: string
    boardDes: string
    owner: userCreateNestedOneWithoutHasBoardInput
    boardTask?: tasksCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextCreateNestedManyWithoutTextBoardInput
  }

  export type boardUncheckedCreateWithoutHasUserInput = {
    id?: string
    ownerId: string
    boardName: string
    boardDes: string
    boardTask?: tasksUncheckedCreateNestedManyWithoutTaskBoardInput
    boardText?: markdowntextUncheckedCreateNestedManyWithoutTextBoardInput
  }

  export type boardCreateOrConnectWithoutHasUserInput = {
    where: boardWhereUniqueInput
    create: XOR<boardCreateWithoutHasUserInput, boardUncheckedCreateWithoutHasUserInput>
  }

  export type userCreateWithoutHasUserInput = {
    id?: string
    username: string
    email: string
    password: string
    hasBoard?: boardCreateNestedOneWithoutOwnerInput
  }

  export type userUncheckedCreateWithoutHasUserInput = {
    id?: string
    username: string
    email: string
    password: string
    hasBoard?: boardUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type userCreateOrConnectWithoutHasUserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHasUserInput, userUncheckedCreateWithoutHasUserInput>
  }

  export type boardUpsertWithoutHasUserInput = {
    update: XOR<boardUpdateWithoutHasUserInput, boardUncheckedUpdateWithoutHasUserInput>
    create: XOR<boardCreateWithoutHasUserInput, boardUncheckedCreateWithoutHasUserInput>
    where?: boardWhereInput
  }

  export type boardUpdateToOneWithWhereWithoutHasUserInput = {
    where?: boardWhereInput
    data: XOR<boardUpdateWithoutHasUserInput, boardUncheckedUpdateWithoutHasUserInput>
  }

  export type boardUpdateWithoutHasUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    owner?: userUpdateOneRequiredWithoutHasBoardNestedInput
    boardTask?: tasksUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUpdateManyWithoutTextBoardNestedInput
  }

  export type boardUncheckedUpdateWithoutHasUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    boardTask?: tasksUncheckedUpdateManyWithoutTaskBoardNestedInput
    boardText?: markdowntextUncheckedUpdateManyWithoutTextBoardNestedInput
  }

  export type userUpsertWithoutHasUserInput = {
    update: XOR<userUpdateWithoutHasUserInput, userUncheckedUpdateWithoutHasUserInput>
    create: XOR<userCreateWithoutHasUserInput, userUncheckedCreateWithoutHasUserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHasUserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHasUserInput, userUncheckedUpdateWithoutHasUserInput>
  }

  export type userUpdateWithoutHasUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasBoard?: boardUpdateOneWithoutOwnerNestedInput
  }

  export type userUncheckedUpdateWithoutHasUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    hasBoard?: boardUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type boardCreateWithoutBoardTaskInput = {
    id?: string
    boardName: string
    boardDes: string
    owner: userCreateNestedOneWithoutHasBoardInput
    hasUser?: boardMemCreateNestedManyWithoutInBoardInput
    boardText?: markdowntextCreateNestedManyWithoutTextBoardInput
  }

  export type boardUncheckedCreateWithoutBoardTaskInput = {
    id?: string
    ownerId: string
    boardName: string
    boardDes: string
    hasUser?: boardMemUncheckedCreateNestedManyWithoutInBoardInput
    boardText?: markdowntextUncheckedCreateNestedManyWithoutTextBoardInput
  }

  export type boardCreateOrConnectWithoutBoardTaskInput = {
    where: boardWhereUniqueInput
    create: XOR<boardCreateWithoutBoardTaskInput, boardUncheckedCreateWithoutBoardTaskInput>
  }

  export type boardUpsertWithoutBoardTaskInput = {
    update: XOR<boardUpdateWithoutBoardTaskInput, boardUncheckedUpdateWithoutBoardTaskInput>
    create: XOR<boardCreateWithoutBoardTaskInput, boardUncheckedCreateWithoutBoardTaskInput>
    where?: boardWhereInput
  }

  export type boardUpdateToOneWithWhereWithoutBoardTaskInput = {
    where?: boardWhereInput
    data: XOR<boardUpdateWithoutBoardTaskInput, boardUncheckedUpdateWithoutBoardTaskInput>
  }

  export type boardUpdateWithoutBoardTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    owner?: userUpdateOneRequiredWithoutHasBoardNestedInput
    hasUser?: boardMemUpdateManyWithoutInBoardNestedInput
    boardText?: markdowntextUpdateManyWithoutTextBoardNestedInput
  }

  export type boardUncheckedUpdateWithoutBoardTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUncheckedUpdateManyWithoutInBoardNestedInput
    boardText?: markdowntextUncheckedUpdateManyWithoutTextBoardNestedInput
  }

  export type boardCreateWithoutBoardTextInput = {
    id?: string
    boardName: string
    boardDes: string
    owner: userCreateNestedOneWithoutHasBoardInput
    hasUser?: boardMemCreateNestedManyWithoutInBoardInput
    boardTask?: tasksCreateNestedManyWithoutTaskBoardInput
  }

  export type boardUncheckedCreateWithoutBoardTextInput = {
    id?: string
    ownerId: string
    boardName: string
    boardDes: string
    hasUser?: boardMemUncheckedCreateNestedManyWithoutInBoardInput
    boardTask?: tasksUncheckedCreateNestedManyWithoutTaskBoardInput
  }

  export type boardCreateOrConnectWithoutBoardTextInput = {
    where: boardWhereUniqueInput
    create: XOR<boardCreateWithoutBoardTextInput, boardUncheckedCreateWithoutBoardTextInput>
  }

  export type boardUpsertWithoutBoardTextInput = {
    update: XOR<boardUpdateWithoutBoardTextInput, boardUncheckedUpdateWithoutBoardTextInput>
    create: XOR<boardCreateWithoutBoardTextInput, boardUncheckedCreateWithoutBoardTextInput>
    where?: boardWhereInput
  }

  export type boardUpdateToOneWithWhereWithoutBoardTextInput = {
    where?: boardWhereInput
    data: XOR<boardUpdateWithoutBoardTextInput, boardUncheckedUpdateWithoutBoardTextInput>
  }

  export type boardUpdateWithoutBoardTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    owner?: userUpdateOneRequiredWithoutHasBoardNestedInput
    hasUser?: boardMemUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUpdateManyWithoutTaskBoardNestedInput
  }

  export type boardUncheckedUpdateWithoutBoardTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    boardName?: StringFieldUpdateOperationsInput | string
    boardDes?: StringFieldUpdateOperationsInput | string
    hasUser?: boardMemUncheckedUpdateManyWithoutInBoardNestedInput
    boardTask?: tasksUncheckedUpdateManyWithoutTaskBoardNestedInput
  }

  export type boardMemCreateManyUserBoardInput = {
    boardMem?: string
    inBoardId: string
    role?: $Enums.Role
  }

  export type boardMemUpdateWithoutUserBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    inBoard?: boardUpdateOneRequiredWithoutHasUserNestedInput
  }

  export type boardMemUncheckedUpdateWithoutUserBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    inBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemUncheckedUpdateManyWithoutUserBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    inBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemCreateManyInBoardInput = {
    boardMem?: string
    userBoardId: string
    role?: $Enums.Role
  }

  export type tasksCreateManyTaskBoardInput = {
    taskid?: string
    name: string
    description?: string | null
  }

  export type markdowntextCreateManyTextBoardInput = {
    textid?: string
    content: string
  }

  export type boardMemUpdateWithoutInBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    userBoard?: userUpdateOneRequiredWithoutHasUserNestedInput
  }

  export type boardMemUncheckedUpdateWithoutInBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    userBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type boardMemUncheckedUpdateManyWithoutInBoardInput = {
    boardMem?: StringFieldUpdateOperationsInput | string
    userBoardId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type tasksUpdateWithoutTaskBoardInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateWithoutTaskBoardInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUncheckedUpdateManyWithoutTaskBoardInput = {
    taskid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type markdowntextUpdateWithoutTextBoardInput = {
    textid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type markdowntextUncheckedUpdateWithoutTextBoardInput = {
    textid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type markdowntextUncheckedUpdateManyWithoutTextBoardInput = {
    textid?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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