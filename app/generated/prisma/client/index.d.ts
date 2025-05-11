
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model ProblemComponent
 * 
 */
export type ProblemComponent = $Result.DefaultSelection<Prisma.$ProblemComponentPayload>
/**
 * Model FundamentalTruth
 * 
 */
export type FundamentalTruth = $Result.DefaultSelection<Prisma.$FundamentalTruthPayload>
/**
 * Model Solution
 * 
 */
export type Solution = $Result.DefaultSelection<Prisma.$SolutionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProblemStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProblemStatus = (typeof ProblemStatus)[keyof typeof ProblemStatus]

}

export type ProblemStatus = $Enums.ProblemStatus

export const ProblemStatus: typeof $Enums.ProblemStatus

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemComponent`: Exposes CRUD operations for the **ProblemComponent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemComponents
    * const problemComponents = await prisma.problemComponent.findMany()
    * ```
    */
  get problemComponent(): Prisma.ProblemComponentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundamentalTruth`: Exposes CRUD operations for the **FundamentalTruth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundamentalTruths
    * const fundamentalTruths = await prisma.fundamentalTruth.findMany()
    * ```
    */
  get fundamentalTruth(): Prisma.FundamentalTruthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solution`: Exposes CRUD operations for the **Solution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solutions
    * const solutions = await prisma.solution.findMany()
    * ```
    */
  get solution(): Prisma.SolutionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Problem: 'Problem',
    Template: 'Template',
    ProblemComponent: 'ProblemComponent',
    FundamentalTruth: 'FundamentalTruth',
    Solution: 'Solution'
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
      modelProps: "user" | "problem" | "template" | "problemComponent" | "fundamentalTruth" | "solution"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      ProblemComponent: {
        payload: Prisma.$ProblemComponentPayload<ExtArgs>
        fields: Prisma.ProblemComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          findFirst: {
            args: Prisma.ProblemComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          findMany: {
            args: Prisma.ProblemComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>[]
          }
          create: {
            args: Prisma.ProblemComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          createMany: {
            args: Prisma.ProblemComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>[]
          }
          delete: {
            args: Prisma.ProblemComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          update: {
            args: Prisma.ProblemComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          deleteMany: {
            args: Prisma.ProblemComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>[]
          }
          upsert: {
            args: Prisma.ProblemComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemComponentPayload>
          }
          aggregate: {
            args: Prisma.ProblemComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemComponent>
          }
          groupBy: {
            args: Prisma.ProblemComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemComponentCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemComponentCountAggregateOutputType> | number
          }
        }
      }
      FundamentalTruth: {
        payload: Prisma.$FundamentalTruthPayload<ExtArgs>
        fields: Prisma.FundamentalTruthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundamentalTruthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundamentalTruthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          findFirst: {
            args: Prisma.FundamentalTruthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundamentalTruthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          findMany: {
            args: Prisma.FundamentalTruthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>[]
          }
          create: {
            args: Prisma.FundamentalTruthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          createMany: {
            args: Prisma.FundamentalTruthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundamentalTruthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>[]
          }
          delete: {
            args: Prisma.FundamentalTruthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          update: {
            args: Prisma.FundamentalTruthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          deleteMany: {
            args: Prisma.FundamentalTruthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundamentalTruthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundamentalTruthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>[]
          }
          upsert: {
            args: Prisma.FundamentalTruthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundamentalTruthPayload>
          }
          aggregate: {
            args: Prisma.FundamentalTruthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundamentalTruth>
          }
          groupBy: {
            args: Prisma.FundamentalTruthGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundamentalTruthGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundamentalTruthCountArgs<ExtArgs>
            result: $Utils.Optional<FundamentalTruthCountAggregateOutputType> | number
          }
        }
      }
      Solution: {
        payload: Prisma.$SolutionPayload<ExtArgs>
        fields: Prisma.SolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          findFirst: {
            args: Prisma.SolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          findMany: {
            args: Prisma.SolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          create: {
            args: Prisma.SolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          createMany: {
            args: Prisma.SolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          delete: {
            args: Prisma.SolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          update: {
            args: Prisma.SolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          deleteMany: {
            args: Prisma.SolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          upsert: {
            args: Prisma.SolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          aggregate: {
            args: Prisma.SolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolution>
          }
          groupBy: {
            args: Prisma.SolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolutionCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionCountAggregateOutputType> | number
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
    user?: UserOmit
    problem?: ProblemOmit
    template?: TemplateOmit
    problemComponent?: ProblemComponentOmit
    fundamentalTruth?: FundamentalTruthOmit
    solution?: SolutionOmit
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
    problems: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
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
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    components: number
    fundamentalTruths: number
    solutions: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | ProblemCountOutputTypeCountComponentsArgs
    fundamentalTruths?: boolean | ProblemCountOutputTypeCountFundamentalTruthsArgs
    solutions?: boolean | ProblemCountOutputTypeCountSolutionsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemComponentWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountFundamentalTruthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundamentalTruthWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    problems: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | TemplateCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    progress: number | null
  }

  export type ProblemSumAggregateOutputType = {
    progress: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProblemStatus | null
    category: string | null
    progress: number | null
    userId: string | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.ProblemStatus | null
    category: string | null
    progress: number | null
    userId: string | null
    templateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    category: number
    progress: number
    userId: number
    templateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    progress?: true
  }

  export type ProblemSumAggregateInputType = {
    progress?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    category?: true
    progress?: true
    userId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    category?: true
    progress?: true
    userId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    category?: true
    progress?: true
    userId?: true
    templateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress: number
    userId: string
    templateId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    progress?: boolean
    userId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    components?: boolean | Problem$componentsArgs<ExtArgs>
    fundamentalTruths?: boolean | Problem$fundamentalTruthsArgs<ExtArgs>
    solutions?: boolean | Problem$solutionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    progress?: boolean
    userId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    progress?: boolean
    userId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    category?: boolean
    progress?: boolean
    userId?: boolean
    templateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "category" | "progress" | "userId" | "templateId" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | Problem$componentsArgs<ExtArgs>
    fundamentalTruths?: boolean | Problem$fundamentalTruthsArgs<ExtArgs>
    solutions?: boolean | Problem$solutionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Problem$templateArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      components: Prisma.$ProblemComponentPayload<ExtArgs>[]
      fundamentalTruths: Prisma.$FundamentalTruthPayload<ExtArgs>[]
      solutions: Prisma.$SolutionPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.ProblemStatus
      category: string
      progress: number
      userId: string
      templateId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    components<T extends Problem$componentsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fundamentalTruths<T extends Problem$fundamentalTruthsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$fundamentalTruthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solutions<T extends Problem$solutionsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends Problem$templateArgs<ExtArgs> = {}>(args?: Subset<T, Problem$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly status: FieldRef<"Problem", 'ProblemStatus'>
    readonly category: FieldRef<"Problem", 'String'>
    readonly progress: FieldRef<"Problem", 'Int'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly templateId: FieldRef<"Problem", 'String'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.components
   */
  export type Problem$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    where?: ProblemComponentWhereInput
    orderBy?: ProblemComponentOrderByWithRelationInput | ProblemComponentOrderByWithRelationInput[]
    cursor?: ProblemComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemComponentScalarFieldEnum | ProblemComponentScalarFieldEnum[]
  }

  /**
   * Problem.fundamentalTruths
   */
  export type Problem$fundamentalTruthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    where?: FundamentalTruthWhereInput
    orderBy?: FundamentalTruthOrderByWithRelationInput | FundamentalTruthOrderByWithRelationInput[]
    cursor?: FundamentalTruthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundamentalTruthScalarFieldEnum | FundamentalTruthScalarFieldEnum[]
  }

  /**
   * Problem.solutions
   */
  export type Problem$solutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    where?: SolutionWhereInput
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    cursor?: SolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Problem.template
   */
  export type Problem$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    popularity: number | null
  }

  export type TemplateSumAggregateOutputType = {
    popularity: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    popularity: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    popularity: number | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    steps: number
    popularity: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    popularity?: true
  }

  export type TemplateSumAggregateInputType = {
    popularity?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    popularity?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    popularity?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    steps?: true
    popularity?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    steps: JsonValue
    popularity: number
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    steps?: boolean
    popularity?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Template$problemsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    steps?: boolean
    popularity?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    steps?: boolean
    popularity?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    steps?: boolean
    popularity?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "steps" | "popularity" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Template$problemsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      problems: Prisma.$ProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      steps: Prisma.JsonValue
      popularity: number
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problems<T extends Template$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Template$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly title: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
    readonly steps: FieldRef<"Template", 'Json'>
    readonly popularity: FieldRef<"Template", 'Int'>
    readonly authorId: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.problems
   */
  export type Template$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model ProblemComponent
   */

  export type AggregateProblemComponent = {
    _count: ProblemComponentCountAggregateOutputType | null
    _min: ProblemComponentMinAggregateOutputType | null
    _max: ProblemComponentMaxAggregateOutputType | null
  }

  export type ProblemComponentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isCritical: boolean | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemComponentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isCritical: boolean | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemComponentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isCritical: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemComponentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isCritical?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemComponentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isCritical?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemComponentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isCritical?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemComponent to aggregate.
     */
    where?: ProblemComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemComponents to fetch.
     */
    orderBy?: ProblemComponentOrderByWithRelationInput | ProblemComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemComponents
    **/
    _count?: true | ProblemComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemComponentMaxAggregateInputType
  }

  export type GetProblemComponentAggregateType<T extends ProblemComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemComponent[P]>
      : GetScalarType<T[P], AggregateProblemComponent[P]>
  }




  export type ProblemComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemComponentWhereInput
    orderBy?: ProblemComponentOrderByWithAggregationInput | ProblemComponentOrderByWithAggregationInput[]
    by: ProblemComponentScalarFieldEnum[] | ProblemComponentScalarFieldEnum
    having?: ProblemComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemComponentCountAggregateInputType | true
    _min?: ProblemComponentMinAggregateInputType
    _max?: ProblemComponentMaxAggregateInputType
  }

  export type ProblemComponentGroupByOutputType = {
    id: string
    name: string
    description: string
    isCritical: boolean
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemComponentCountAggregateOutputType | null
    _min: ProblemComponentMinAggregateOutputType | null
    _max: ProblemComponentMaxAggregateOutputType | null
  }

  type GetProblemComponentGroupByPayload<T extends ProblemComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemComponentGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemComponentGroupByOutputType[P]>
        }
      >
    >


  export type ProblemComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isCritical?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemComponent"]>

  export type ProblemComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isCritical?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemComponent"]>

  export type ProblemComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isCritical?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemComponent"]>

  export type ProblemComponentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isCritical?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isCritical" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemComponent"]>
  export type ProblemComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemComponent"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      isCritical: boolean
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemComponent"]>
    composites: {}
  }

  type ProblemComponentGetPayload<S extends boolean | null | undefined | ProblemComponentDefaultArgs> = $Result.GetResult<Prisma.$ProblemComponentPayload, S>

  type ProblemComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemComponentCountAggregateInputType | true
    }

  export interface ProblemComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemComponent'], meta: { name: 'ProblemComponent' } }
    /**
     * Find zero or one ProblemComponent that matches the filter.
     * @param {ProblemComponentFindUniqueArgs} args - Arguments to find a ProblemComponent
     * @example
     * // Get one ProblemComponent
     * const problemComponent = await prisma.problemComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemComponentFindUniqueArgs>(args: SelectSubset<T, ProblemComponentFindUniqueArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemComponentFindUniqueOrThrowArgs} args - Arguments to find a ProblemComponent
     * @example
     * // Get one ProblemComponent
     * const problemComponent = await prisma.problemComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentFindFirstArgs} args - Arguments to find a ProblemComponent
     * @example
     * // Get one ProblemComponent
     * const problemComponent = await prisma.problemComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemComponentFindFirstArgs>(args?: SelectSubset<T, ProblemComponentFindFirstArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentFindFirstOrThrowArgs} args - Arguments to find a ProblemComponent
     * @example
     * // Get one ProblemComponent
     * const problemComponent = await prisma.problemComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemComponents
     * const problemComponents = await prisma.problemComponent.findMany()
     * 
     * // Get first 10 ProblemComponents
     * const problemComponents = await prisma.problemComponent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemComponentWithIdOnly = await prisma.problemComponent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemComponentFindManyArgs>(args?: SelectSubset<T, ProblemComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemComponent.
     * @param {ProblemComponentCreateArgs} args - Arguments to create a ProblemComponent.
     * @example
     * // Create one ProblemComponent
     * const ProblemComponent = await prisma.problemComponent.create({
     *   data: {
     *     // ... data to create a ProblemComponent
     *   }
     * })
     * 
     */
    create<T extends ProblemComponentCreateArgs>(args: SelectSubset<T, ProblemComponentCreateArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemComponents.
     * @param {ProblemComponentCreateManyArgs} args - Arguments to create many ProblemComponents.
     * @example
     * // Create many ProblemComponents
     * const problemComponent = await prisma.problemComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemComponentCreateManyArgs>(args?: SelectSubset<T, ProblemComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemComponents and returns the data saved in the database.
     * @param {ProblemComponentCreateManyAndReturnArgs} args - Arguments to create many ProblemComponents.
     * @example
     * // Create many ProblemComponents
     * const problemComponent = await prisma.problemComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemComponents and only return the `id`
     * const problemComponentWithIdOnly = await prisma.problemComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemComponent.
     * @param {ProblemComponentDeleteArgs} args - Arguments to delete one ProblemComponent.
     * @example
     * // Delete one ProblemComponent
     * const ProblemComponent = await prisma.problemComponent.delete({
     *   where: {
     *     // ... filter to delete one ProblemComponent
     *   }
     * })
     * 
     */
    delete<T extends ProblemComponentDeleteArgs>(args: SelectSubset<T, ProblemComponentDeleteArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemComponent.
     * @param {ProblemComponentUpdateArgs} args - Arguments to update one ProblemComponent.
     * @example
     * // Update one ProblemComponent
     * const problemComponent = await prisma.problemComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemComponentUpdateArgs>(args: SelectSubset<T, ProblemComponentUpdateArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemComponents.
     * @param {ProblemComponentDeleteManyArgs} args - Arguments to filter ProblemComponents to delete.
     * @example
     * // Delete a few ProblemComponents
     * const { count } = await prisma.problemComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemComponentDeleteManyArgs>(args?: SelectSubset<T, ProblemComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemComponents
     * const problemComponent = await prisma.problemComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemComponentUpdateManyArgs>(args: SelectSubset<T, ProblemComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemComponents and returns the data updated in the database.
     * @param {ProblemComponentUpdateManyAndReturnArgs} args - Arguments to update many ProblemComponents.
     * @example
     * // Update many ProblemComponents
     * const problemComponent = await prisma.problemComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemComponents and only return the `id`
     * const problemComponentWithIdOnly = await prisma.problemComponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemComponent.
     * @param {ProblemComponentUpsertArgs} args - Arguments to update or create a ProblemComponent.
     * @example
     * // Update or create a ProblemComponent
     * const problemComponent = await prisma.problemComponent.upsert({
     *   create: {
     *     // ... data to create a ProblemComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemComponent we want to update
     *   }
     * })
     */
    upsert<T extends ProblemComponentUpsertArgs>(args: SelectSubset<T, ProblemComponentUpsertArgs<ExtArgs>>): Prisma__ProblemComponentClient<$Result.GetResult<Prisma.$ProblemComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentCountArgs} args - Arguments to filter ProblemComponents to count.
     * @example
     * // Count the number of ProblemComponents
     * const count = await prisma.problemComponent.count({
     *   where: {
     *     // ... the filter for the ProblemComponents we want to count
     *   }
     * })
    **/
    count<T extends ProblemComponentCountArgs>(
      args?: Subset<T, ProblemComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemComponentAggregateArgs>(args: Subset<T, ProblemComponentAggregateArgs>): Prisma.PrismaPromise<GetProblemComponentAggregateType<T>>

    /**
     * Group by ProblemComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemComponentGroupByArgs} args - Group by arguments.
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
      T extends ProblemComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemComponentGroupByArgs['orderBy'] }
        : { orderBy?: ProblemComponentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemComponent model
   */
  readonly fields: ProblemComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemComponent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemComponent model
   */
  interface ProblemComponentFieldRefs {
    readonly id: FieldRef<"ProblemComponent", 'String'>
    readonly name: FieldRef<"ProblemComponent", 'String'>
    readonly description: FieldRef<"ProblemComponent", 'String'>
    readonly isCritical: FieldRef<"ProblemComponent", 'Boolean'>
    readonly problemId: FieldRef<"ProblemComponent", 'String'>
    readonly createdAt: FieldRef<"ProblemComponent", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemComponent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemComponent findUnique
   */
  export type ProblemComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter, which ProblemComponent to fetch.
     */
    where: ProblemComponentWhereUniqueInput
  }

  /**
   * ProblemComponent findUniqueOrThrow
   */
  export type ProblemComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter, which ProblemComponent to fetch.
     */
    where: ProblemComponentWhereUniqueInput
  }

  /**
   * ProblemComponent findFirst
   */
  export type ProblemComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter, which ProblemComponent to fetch.
     */
    where?: ProblemComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemComponents to fetch.
     */
    orderBy?: ProblemComponentOrderByWithRelationInput | ProblemComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemComponents.
     */
    cursor?: ProblemComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemComponents.
     */
    distinct?: ProblemComponentScalarFieldEnum | ProblemComponentScalarFieldEnum[]
  }

  /**
   * ProblemComponent findFirstOrThrow
   */
  export type ProblemComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter, which ProblemComponent to fetch.
     */
    where?: ProblemComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemComponents to fetch.
     */
    orderBy?: ProblemComponentOrderByWithRelationInput | ProblemComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemComponents.
     */
    cursor?: ProblemComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemComponents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemComponents.
     */
    distinct?: ProblemComponentScalarFieldEnum | ProblemComponentScalarFieldEnum[]
  }

  /**
   * ProblemComponent findMany
   */
  export type ProblemComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter, which ProblemComponents to fetch.
     */
    where?: ProblemComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemComponents to fetch.
     */
    orderBy?: ProblemComponentOrderByWithRelationInput | ProblemComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemComponents.
     */
    cursor?: ProblemComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemComponents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemComponents.
     */
    skip?: number
    distinct?: ProblemComponentScalarFieldEnum | ProblemComponentScalarFieldEnum[]
  }

  /**
   * ProblemComponent create
   */
  export type ProblemComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemComponent.
     */
    data: XOR<ProblemComponentCreateInput, ProblemComponentUncheckedCreateInput>
  }

  /**
   * ProblemComponent createMany
   */
  export type ProblemComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemComponents.
     */
    data: ProblemComponentCreateManyInput | ProblemComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemComponent createManyAndReturn
   */
  export type ProblemComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemComponents.
     */
    data: ProblemComponentCreateManyInput | ProblemComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemComponent update
   */
  export type ProblemComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemComponent.
     */
    data: XOR<ProblemComponentUpdateInput, ProblemComponentUncheckedUpdateInput>
    /**
     * Choose, which ProblemComponent to update.
     */
    where: ProblemComponentWhereUniqueInput
  }

  /**
   * ProblemComponent updateMany
   */
  export type ProblemComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemComponents.
     */
    data: XOR<ProblemComponentUpdateManyMutationInput, ProblemComponentUncheckedUpdateManyInput>
    /**
     * Filter which ProblemComponents to update
     */
    where?: ProblemComponentWhereInput
    /**
     * Limit how many ProblemComponents to update.
     */
    limit?: number
  }

  /**
   * ProblemComponent updateManyAndReturn
   */
  export type ProblemComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * The data used to update ProblemComponents.
     */
    data: XOR<ProblemComponentUpdateManyMutationInput, ProblemComponentUncheckedUpdateManyInput>
    /**
     * Filter which ProblemComponents to update
     */
    where?: ProblemComponentWhereInput
    /**
     * Limit how many ProblemComponents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemComponent upsert
   */
  export type ProblemComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemComponent to update in case it exists.
     */
    where: ProblemComponentWhereUniqueInput
    /**
     * In case the ProblemComponent found by the `where` argument doesn't exist, create a new ProblemComponent with this data.
     */
    create: XOR<ProblemComponentCreateInput, ProblemComponentUncheckedCreateInput>
    /**
     * In case the ProblemComponent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemComponentUpdateInput, ProblemComponentUncheckedUpdateInput>
  }

  /**
   * ProblemComponent delete
   */
  export type ProblemComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
    /**
     * Filter which ProblemComponent to delete.
     */
    where: ProblemComponentWhereUniqueInput
  }

  /**
   * ProblemComponent deleteMany
   */
  export type ProblemComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemComponents to delete
     */
    where?: ProblemComponentWhereInput
    /**
     * Limit how many ProblemComponents to delete.
     */
    limit?: number
  }

  /**
   * ProblemComponent without action
   */
  export type ProblemComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemComponent
     */
    select?: ProblemComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemComponent
     */
    omit?: ProblemComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemComponentInclude<ExtArgs> | null
  }


  /**
   * Model FundamentalTruth
   */

  export type AggregateFundamentalTruth = {
    _count: FundamentalTruthCountAggregateOutputType | null
    _min: FundamentalTruthMinAggregateOutputType | null
    _max: FundamentalTruthMaxAggregateOutputType | null
  }

  export type FundamentalTruthMinAggregateOutputType = {
    id: string | null
    truth: string | null
    description: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundamentalTruthMaxAggregateOutputType = {
    id: string | null
    truth: string | null
    description: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundamentalTruthCountAggregateOutputType = {
    id: number
    truth: number
    description: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FundamentalTruthMinAggregateInputType = {
    id?: true
    truth?: true
    description?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundamentalTruthMaxAggregateInputType = {
    id?: true
    truth?: true
    description?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundamentalTruthCountAggregateInputType = {
    id?: true
    truth?: true
    description?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FundamentalTruthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundamentalTruth to aggregate.
     */
    where?: FundamentalTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundamentalTruths to fetch.
     */
    orderBy?: FundamentalTruthOrderByWithRelationInput | FundamentalTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundamentalTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundamentalTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundamentalTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundamentalTruths
    **/
    _count?: true | FundamentalTruthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundamentalTruthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundamentalTruthMaxAggregateInputType
  }

  export type GetFundamentalTruthAggregateType<T extends FundamentalTruthAggregateArgs> = {
        [P in keyof T & keyof AggregateFundamentalTruth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundamentalTruth[P]>
      : GetScalarType<T[P], AggregateFundamentalTruth[P]>
  }




  export type FundamentalTruthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundamentalTruthWhereInput
    orderBy?: FundamentalTruthOrderByWithAggregationInput | FundamentalTruthOrderByWithAggregationInput[]
    by: FundamentalTruthScalarFieldEnum[] | FundamentalTruthScalarFieldEnum
    having?: FundamentalTruthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundamentalTruthCountAggregateInputType | true
    _min?: FundamentalTruthMinAggregateInputType
    _max?: FundamentalTruthMaxAggregateInputType
  }

  export type FundamentalTruthGroupByOutputType = {
    id: string
    truth: string
    description: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: FundamentalTruthCountAggregateOutputType | null
    _min: FundamentalTruthMinAggregateOutputType | null
    _max: FundamentalTruthMaxAggregateOutputType | null
  }

  type GetFundamentalTruthGroupByPayload<T extends FundamentalTruthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundamentalTruthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundamentalTruthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundamentalTruthGroupByOutputType[P]>
            : GetScalarType<T[P], FundamentalTruthGroupByOutputType[P]>
        }
      >
    >


  export type FundamentalTruthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truth?: boolean
    description?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundamentalTruth"]>

  export type FundamentalTruthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truth?: boolean
    description?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundamentalTruth"]>

  export type FundamentalTruthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truth?: boolean
    description?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundamentalTruth"]>

  export type FundamentalTruthSelectScalar = {
    id?: boolean
    truth?: boolean
    description?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FundamentalTruthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "truth" | "description" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["fundamentalTruth"]>
  export type FundamentalTruthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type FundamentalTruthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type FundamentalTruthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $FundamentalTruthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundamentalTruth"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      truth: string
      description: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fundamentalTruth"]>
    composites: {}
  }

  type FundamentalTruthGetPayload<S extends boolean | null | undefined | FundamentalTruthDefaultArgs> = $Result.GetResult<Prisma.$FundamentalTruthPayload, S>

  type FundamentalTruthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundamentalTruthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundamentalTruthCountAggregateInputType | true
    }

  export interface FundamentalTruthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundamentalTruth'], meta: { name: 'FundamentalTruth' } }
    /**
     * Find zero or one FundamentalTruth that matches the filter.
     * @param {FundamentalTruthFindUniqueArgs} args - Arguments to find a FundamentalTruth
     * @example
     * // Get one FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundamentalTruthFindUniqueArgs>(args: SelectSubset<T, FundamentalTruthFindUniqueArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundamentalTruth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundamentalTruthFindUniqueOrThrowArgs} args - Arguments to find a FundamentalTruth
     * @example
     * // Get one FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundamentalTruthFindUniqueOrThrowArgs>(args: SelectSubset<T, FundamentalTruthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundamentalTruth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthFindFirstArgs} args - Arguments to find a FundamentalTruth
     * @example
     * // Get one FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundamentalTruthFindFirstArgs>(args?: SelectSubset<T, FundamentalTruthFindFirstArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundamentalTruth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthFindFirstOrThrowArgs} args - Arguments to find a FundamentalTruth
     * @example
     * // Get one FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundamentalTruthFindFirstOrThrowArgs>(args?: SelectSubset<T, FundamentalTruthFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundamentalTruths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundamentalTruths
     * const fundamentalTruths = await prisma.fundamentalTruth.findMany()
     * 
     * // Get first 10 FundamentalTruths
     * const fundamentalTruths = await prisma.fundamentalTruth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundamentalTruthWithIdOnly = await prisma.fundamentalTruth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundamentalTruthFindManyArgs>(args?: SelectSubset<T, FundamentalTruthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundamentalTruth.
     * @param {FundamentalTruthCreateArgs} args - Arguments to create a FundamentalTruth.
     * @example
     * // Create one FundamentalTruth
     * const FundamentalTruth = await prisma.fundamentalTruth.create({
     *   data: {
     *     // ... data to create a FundamentalTruth
     *   }
     * })
     * 
     */
    create<T extends FundamentalTruthCreateArgs>(args: SelectSubset<T, FundamentalTruthCreateArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundamentalTruths.
     * @param {FundamentalTruthCreateManyArgs} args - Arguments to create many FundamentalTruths.
     * @example
     * // Create many FundamentalTruths
     * const fundamentalTruth = await prisma.fundamentalTruth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundamentalTruthCreateManyArgs>(args?: SelectSubset<T, FundamentalTruthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundamentalTruths and returns the data saved in the database.
     * @param {FundamentalTruthCreateManyAndReturnArgs} args - Arguments to create many FundamentalTruths.
     * @example
     * // Create many FundamentalTruths
     * const fundamentalTruth = await prisma.fundamentalTruth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundamentalTruths and only return the `id`
     * const fundamentalTruthWithIdOnly = await prisma.fundamentalTruth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundamentalTruthCreateManyAndReturnArgs>(args?: SelectSubset<T, FundamentalTruthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundamentalTruth.
     * @param {FundamentalTruthDeleteArgs} args - Arguments to delete one FundamentalTruth.
     * @example
     * // Delete one FundamentalTruth
     * const FundamentalTruth = await prisma.fundamentalTruth.delete({
     *   where: {
     *     // ... filter to delete one FundamentalTruth
     *   }
     * })
     * 
     */
    delete<T extends FundamentalTruthDeleteArgs>(args: SelectSubset<T, FundamentalTruthDeleteArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundamentalTruth.
     * @param {FundamentalTruthUpdateArgs} args - Arguments to update one FundamentalTruth.
     * @example
     * // Update one FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundamentalTruthUpdateArgs>(args: SelectSubset<T, FundamentalTruthUpdateArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundamentalTruths.
     * @param {FundamentalTruthDeleteManyArgs} args - Arguments to filter FundamentalTruths to delete.
     * @example
     * // Delete a few FundamentalTruths
     * const { count } = await prisma.fundamentalTruth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundamentalTruthDeleteManyArgs>(args?: SelectSubset<T, FundamentalTruthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundamentalTruths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundamentalTruths
     * const fundamentalTruth = await prisma.fundamentalTruth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundamentalTruthUpdateManyArgs>(args: SelectSubset<T, FundamentalTruthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundamentalTruths and returns the data updated in the database.
     * @param {FundamentalTruthUpdateManyAndReturnArgs} args - Arguments to update many FundamentalTruths.
     * @example
     * // Update many FundamentalTruths
     * const fundamentalTruth = await prisma.fundamentalTruth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundamentalTruths and only return the `id`
     * const fundamentalTruthWithIdOnly = await prisma.fundamentalTruth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FundamentalTruthUpdateManyAndReturnArgs>(args: SelectSubset<T, FundamentalTruthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundamentalTruth.
     * @param {FundamentalTruthUpsertArgs} args - Arguments to update or create a FundamentalTruth.
     * @example
     * // Update or create a FundamentalTruth
     * const fundamentalTruth = await prisma.fundamentalTruth.upsert({
     *   create: {
     *     // ... data to create a FundamentalTruth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundamentalTruth we want to update
     *   }
     * })
     */
    upsert<T extends FundamentalTruthUpsertArgs>(args: SelectSubset<T, FundamentalTruthUpsertArgs<ExtArgs>>): Prisma__FundamentalTruthClient<$Result.GetResult<Prisma.$FundamentalTruthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundamentalTruths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthCountArgs} args - Arguments to filter FundamentalTruths to count.
     * @example
     * // Count the number of FundamentalTruths
     * const count = await prisma.fundamentalTruth.count({
     *   where: {
     *     // ... the filter for the FundamentalTruths we want to count
     *   }
     * })
    **/
    count<T extends FundamentalTruthCountArgs>(
      args?: Subset<T, FundamentalTruthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundamentalTruthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundamentalTruth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundamentalTruthAggregateArgs>(args: Subset<T, FundamentalTruthAggregateArgs>): Prisma.PrismaPromise<GetFundamentalTruthAggregateType<T>>

    /**
     * Group by FundamentalTruth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundamentalTruthGroupByArgs} args - Group by arguments.
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
      T extends FundamentalTruthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundamentalTruthGroupByArgs['orderBy'] }
        : { orderBy?: FundamentalTruthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundamentalTruthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundamentalTruthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundamentalTruth model
   */
  readonly fields: FundamentalTruthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundamentalTruth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundamentalTruthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FundamentalTruth model
   */
  interface FundamentalTruthFieldRefs {
    readonly id: FieldRef<"FundamentalTruth", 'String'>
    readonly truth: FieldRef<"FundamentalTruth", 'String'>
    readonly description: FieldRef<"FundamentalTruth", 'String'>
    readonly problemId: FieldRef<"FundamentalTruth", 'String'>
    readonly createdAt: FieldRef<"FundamentalTruth", 'DateTime'>
    readonly updatedAt: FieldRef<"FundamentalTruth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundamentalTruth findUnique
   */
  export type FundamentalTruthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter, which FundamentalTruth to fetch.
     */
    where: FundamentalTruthWhereUniqueInput
  }

  /**
   * FundamentalTruth findUniqueOrThrow
   */
  export type FundamentalTruthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter, which FundamentalTruth to fetch.
     */
    where: FundamentalTruthWhereUniqueInput
  }

  /**
   * FundamentalTruth findFirst
   */
  export type FundamentalTruthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter, which FundamentalTruth to fetch.
     */
    where?: FundamentalTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundamentalTruths to fetch.
     */
    orderBy?: FundamentalTruthOrderByWithRelationInput | FundamentalTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundamentalTruths.
     */
    cursor?: FundamentalTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundamentalTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundamentalTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundamentalTruths.
     */
    distinct?: FundamentalTruthScalarFieldEnum | FundamentalTruthScalarFieldEnum[]
  }

  /**
   * FundamentalTruth findFirstOrThrow
   */
  export type FundamentalTruthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter, which FundamentalTruth to fetch.
     */
    where?: FundamentalTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundamentalTruths to fetch.
     */
    orderBy?: FundamentalTruthOrderByWithRelationInput | FundamentalTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundamentalTruths.
     */
    cursor?: FundamentalTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundamentalTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundamentalTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundamentalTruths.
     */
    distinct?: FundamentalTruthScalarFieldEnum | FundamentalTruthScalarFieldEnum[]
  }

  /**
   * FundamentalTruth findMany
   */
  export type FundamentalTruthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter, which FundamentalTruths to fetch.
     */
    where?: FundamentalTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundamentalTruths to fetch.
     */
    orderBy?: FundamentalTruthOrderByWithRelationInput | FundamentalTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundamentalTruths.
     */
    cursor?: FundamentalTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundamentalTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundamentalTruths.
     */
    skip?: number
    distinct?: FundamentalTruthScalarFieldEnum | FundamentalTruthScalarFieldEnum[]
  }

  /**
   * FundamentalTruth create
   */
  export type FundamentalTruthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * The data needed to create a FundamentalTruth.
     */
    data: XOR<FundamentalTruthCreateInput, FundamentalTruthUncheckedCreateInput>
  }

  /**
   * FundamentalTruth createMany
   */
  export type FundamentalTruthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundamentalTruths.
     */
    data: FundamentalTruthCreateManyInput | FundamentalTruthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundamentalTruth createManyAndReturn
   */
  export type FundamentalTruthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * The data used to create many FundamentalTruths.
     */
    data: FundamentalTruthCreateManyInput | FundamentalTruthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundamentalTruth update
   */
  export type FundamentalTruthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * The data needed to update a FundamentalTruth.
     */
    data: XOR<FundamentalTruthUpdateInput, FundamentalTruthUncheckedUpdateInput>
    /**
     * Choose, which FundamentalTruth to update.
     */
    where: FundamentalTruthWhereUniqueInput
  }

  /**
   * FundamentalTruth updateMany
   */
  export type FundamentalTruthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundamentalTruths.
     */
    data: XOR<FundamentalTruthUpdateManyMutationInput, FundamentalTruthUncheckedUpdateManyInput>
    /**
     * Filter which FundamentalTruths to update
     */
    where?: FundamentalTruthWhereInput
    /**
     * Limit how many FundamentalTruths to update.
     */
    limit?: number
  }

  /**
   * FundamentalTruth updateManyAndReturn
   */
  export type FundamentalTruthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * The data used to update FundamentalTruths.
     */
    data: XOR<FundamentalTruthUpdateManyMutationInput, FundamentalTruthUncheckedUpdateManyInput>
    /**
     * Filter which FundamentalTruths to update
     */
    where?: FundamentalTruthWhereInput
    /**
     * Limit how many FundamentalTruths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundamentalTruth upsert
   */
  export type FundamentalTruthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * The filter to search for the FundamentalTruth to update in case it exists.
     */
    where: FundamentalTruthWhereUniqueInput
    /**
     * In case the FundamentalTruth found by the `where` argument doesn't exist, create a new FundamentalTruth with this data.
     */
    create: XOR<FundamentalTruthCreateInput, FundamentalTruthUncheckedCreateInput>
    /**
     * In case the FundamentalTruth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundamentalTruthUpdateInput, FundamentalTruthUncheckedUpdateInput>
  }

  /**
   * FundamentalTruth delete
   */
  export type FundamentalTruthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
    /**
     * Filter which FundamentalTruth to delete.
     */
    where: FundamentalTruthWhereUniqueInput
  }

  /**
   * FundamentalTruth deleteMany
   */
  export type FundamentalTruthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundamentalTruths to delete
     */
    where?: FundamentalTruthWhereInput
    /**
     * Limit how many FundamentalTruths to delete.
     */
    limit?: number
  }

  /**
   * FundamentalTruth without action
   */
  export type FundamentalTruthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundamentalTruth
     */
    select?: FundamentalTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundamentalTruth
     */
    omit?: FundamentalTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundamentalTruthInclude<ExtArgs> | null
  }


  /**
   * Model Solution
   */

  export type AggregateSolution = {
    _count: SolutionCountAggregateOutputType | null
    _min: SolutionMinAggregateOutputType | null
    _max: SolutionMaxAggregateOutputType | null
  }

  export type SolutionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    feasibility: string | null
    impact: string | null
    cost: string | null
    time: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    feasibility: string | null
    impact: string | null
    cost: string | null
    time: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    feasibility: number
    impact: number
    cost: number
    time: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolutionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    feasibility?: true
    impact?: true
    cost?: true
    time?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    feasibility?: true
    impact?: true
    cost?: true
    time?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    feasibility?: true
    impact?: true
    cost?: true
    time?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solution to aggregate.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solutions
    **/
    _count?: true | SolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionMaxAggregateInputType
  }

  export type GetSolutionAggregateType<T extends SolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateSolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolution[P]>
      : GetScalarType<T[P], AggregateSolution[P]>
  }




  export type SolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionWhereInput
    orderBy?: SolutionOrderByWithAggregationInput | SolutionOrderByWithAggregationInput[]
    by: SolutionScalarFieldEnum[] | SolutionScalarFieldEnum
    having?: SolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionCountAggregateInputType | true
    _min?: SolutionMinAggregateInputType
    _max?: SolutionMaxAggregateInputType
  }

  export type SolutionGroupByOutputType = {
    id: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: SolutionCountAggregateOutputType | null
    _min: SolutionMinAggregateOutputType | null
    _max: SolutionMaxAggregateOutputType | null
  }

  type GetSolutionGroupByPayload<T extends SolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionGroupByOutputType[P]>
        }
      >
    >


  export type SolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    feasibility?: boolean
    impact?: boolean
    cost?: boolean
    time?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    feasibility?: boolean
    impact?: boolean
    cost?: boolean
    time?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    feasibility?: boolean
    impact?: boolean
    cost?: boolean
    time?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    feasibility?: boolean
    impact?: boolean
    cost?: boolean
    time?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "feasibility" | "impact" | "cost" | "time" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["solution"]>
  export type SolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solution"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      feasibility: string
      impact: string
      cost: string
      time: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solution"]>
    composites: {}
  }

  type SolutionGetPayload<S extends boolean | null | undefined | SolutionDefaultArgs> = $Result.GetResult<Prisma.$SolutionPayload, S>

  type SolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionCountAggregateInputType | true
    }

  export interface SolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solution'], meta: { name: 'Solution' } }
    /**
     * Find zero or one Solution that matches the filter.
     * @param {SolutionFindUniqueArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolutionFindUniqueArgs>(args: SelectSubset<T, SolutionFindUniqueArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolutionFindUniqueOrThrowArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, SolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindFirstArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolutionFindFirstArgs>(args?: SelectSubset<T, SolutionFindFirstArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindFirstOrThrowArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, SolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solutions
     * const solutions = await prisma.solution.findMany()
     * 
     * // Get first 10 Solutions
     * const solutions = await prisma.solution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solutionWithIdOnly = await prisma.solution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolutionFindManyArgs>(args?: SelectSubset<T, SolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solution.
     * @param {SolutionCreateArgs} args - Arguments to create a Solution.
     * @example
     * // Create one Solution
     * const Solution = await prisma.solution.create({
     *   data: {
     *     // ... data to create a Solution
     *   }
     * })
     * 
     */
    create<T extends SolutionCreateArgs>(args: SelectSubset<T, SolutionCreateArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solutions.
     * @param {SolutionCreateManyArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solution = await prisma.solution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolutionCreateManyArgs>(args?: SelectSubset<T, SolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solutions and returns the data saved in the database.
     * @param {SolutionCreateManyAndReturnArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solution = await prisma.solution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solutions and only return the `id`
     * const solutionWithIdOnly = await prisma.solution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, SolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solution.
     * @param {SolutionDeleteArgs} args - Arguments to delete one Solution.
     * @example
     * // Delete one Solution
     * const Solution = await prisma.solution.delete({
     *   where: {
     *     // ... filter to delete one Solution
     *   }
     * })
     * 
     */
    delete<T extends SolutionDeleteArgs>(args: SelectSubset<T, SolutionDeleteArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solution.
     * @param {SolutionUpdateArgs} args - Arguments to update one Solution.
     * @example
     * // Update one Solution
     * const solution = await prisma.solution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolutionUpdateArgs>(args: SelectSubset<T, SolutionUpdateArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solutions.
     * @param {SolutionDeleteManyArgs} args - Arguments to filter Solutions to delete.
     * @example
     * // Delete a few Solutions
     * const { count } = await prisma.solution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolutionDeleteManyArgs>(args?: SelectSubset<T, SolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solutions
     * const solution = await prisma.solution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolutionUpdateManyArgs>(args: SelectSubset<T, SolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions and returns the data updated in the database.
     * @param {SolutionUpdateManyAndReturnArgs} args - Arguments to update many Solutions.
     * @example
     * // Update many Solutions
     * const solution = await prisma.solution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solutions and only return the `id`
     * const solutionWithIdOnly = await prisma.solution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, SolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solution.
     * @param {SolutionUpsertArgs} args - Arguments to update or create a Solution.
     * @example
     * // Update or create a Solution
     * const solution = await prisma.solution.upsert({
     *   create: {
     *     // ... data to create a Solution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solution we want to update
     *   }
     * })
     */
    upsert<T extends SolutionUpsertArgs>(args: SelectSubset<T, SolutionUpsertArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionCountArgs} args - Arguments to filter Solutions to count.
     * @example
     * // Count the number of Solutions
     * const count = await prisma.solution.count({
     *   where: {
     *     // ... the filter for the Solutions we want to count
     *   }
     * })
    **/
    count<T extends SolutionCountArgs>(
      args?: Subset<T, SolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolutionAggregateArgs>(args: Subset<T, SolutionAggregateArgs>): Prisma.PrismaPromise<GetSolutionAggregateType<T>>

    /**
     * Group by Solution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionGroupByArgs} args - Group by arguments.
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
      T extends SolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolutionGroupByArgs['orderBy'] }
        : { orderBy?: SolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solution model
   */
  readonly fields: SolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Solution model
   */
  interface SolutionFieldRefs {
    readonly id: FieldRef<"Solution", 'String'>
    readonly title: FieldRef<"Solution", 'String'>
    readonly description: FieldRef<"Solution", 'String'>
    readonly feasibility: FieldRef<"Solution", 'String'>
    readonly impact: FieldRef<"Solution", 'String'>
    readonly cost: FieldRef<"Solution", 'String'>
    readonly time: FieldRef<"Solution", 'String'>
    readonly problemId: FieldRef<"Solution", 'String'>
    readonly createdAt: FieldRef<"Solution", 'DateTime'>
    readonly updatedAt: FieldRef<"Solution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solution findUnique
   */
  export type SolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution findUniqueOrThrow
   */
  export type SolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution findFirst
   */
  export type SolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solutions.
     */
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution findFirstOrThrow
   */
  export type SolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solutions.
     */
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution findMany
   */
  export type SolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solutions to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution create
   */
  export type SolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Solution.
     */
    data: XOR<SolutionCreateInput, SolutionUncheckedCreateInput>
  }

  /**
   * Solution createMany
   */
  export type SolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solutions.
     */
    data: SolutionCreateManyInput | SolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solution createManyAndReturn
   */
  export type SolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * The data used to create many Solutions.
     */
    data: SolutionCreateManyInput | SolutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solution update
   */
  export type SolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Solution.
     */
    data: XOR<SolutionUpdateInput, SolutionUncheckedUpdateInput>
    /**
     * Choose, which Solution to update.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution updateMany
   */
  export type SolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solutions.
     */
    data: XOR<SolutionUpdateManyMutationInput, SolutionUncheckedUpdateManyInput>
    /**
     * Filter which Solutions to update
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to update.
     */
    limit?: number
  }

  /**
   * Solution updateManyAndReturn
   */
  export type SolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * The data used to update Solutions.
     */
    data: XOR<SolutionUpdateManyMutationInput, SolutionUncheckedUpdateManyInput>
    /**
     * Filter which Solutions to update
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solution upsert
   */
  export type SolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Solution to update in case it exists.
     */
    where: SolutionWhereUniqueInput
    /**
     * In case the Solution found by the `where` argument doesn't exist, create a new Solution with this data.
     */
    create: XOR<SolutionCreateInput, SolutionUncheckedCreateInput>
    /**
     * In case the Solution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolutionUpdateInput, SolutionUncheckedUpdateInput>
  }

  /**
   * Solution delete
   */
  export type SolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter which Solution to delete.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution deleteMany
   */
  export type SolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solutions to delete
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to delete.
     */
    limit?: number
  }

  /**
   * Solution without action
   */
  export type SolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    category: 'category',
    progress: 'progress',
    userId: 'userId',
    templateId: 'templateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    steps: 'steps',
    popularity: 'popularity',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const ProblemComponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isCritical: 'isCritical',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemComponentScalarFieldEnum = (typeof ProblemComponentScalarFieldEnum)[keyof typeof ProblemComponentScalarFieldEnum]


  export const FundamentalTruthScalarFieldEnum: {
    id: 'id',
    truth: 'truth',
    description: 'description',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FundamentalTruthScalarFieldEnum = (typeof FundamentalTruthScalarFieldEnum)[keyof typeof FundamentalTruthScalarFieldEnum]


  export const SolutionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    feasibility: 'feasibility',
    impact: 'impact',
    cost: 'cost',
    time: 'time',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolutionScalarFieldEnum = (typeof SolutionScalarFieldEnum)[keyof typeof SolutionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProblemStatus'
   */
  export type EnumProblemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemStatus'>
    


  /**
   * Reference to a field of type 'ProblemStatus[]'
   */
  export type ListEnumProblemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    templates?: TemplateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    status?: EnumProblemStatusFilter<"Problem"> | $Enums.ProblemStatus
    category?: StringFilter<"Problem"> | string
    progress?: IntFilter<"Problem"> | number
    userId?: StringFilter<"Problem"> | string
    templateId?: StringNullableFilter<"Problem"> | string | null
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    components?: ProblemComponentListRelationFilter
    fundamentalTruths?: FundamentalTruthListRelationFilter
    solutions?: SolutionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    components?: ProblemComponentOrderByRelationAggregateInput
    fundamentalTruths?: FundamentalTruthOrderByRelationAggregateInput
    solutions?: SolutionOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    status?: EnumProblemStatusFilter<"Problem"> | $Enums.ProblemStatus
    category?: StringFilter<"Problem"> | string
    progress?: IntFilter<"Problem"> | number
    userId?: StringFilter<"Problem"> | string
    templateId?: StringNullableFilter<"Problem"> | string | null
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    components?: ProblemComponentListRelationFilter
    fundamentalTruths?: FundamentalTruthListRelationFilter
    solutions?: SolutionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    status?: EnumProblemStatusWithAggregatesFilter<"Problem"> | $Enums.ProblemStatus
    category?: StringWithAggregatesFilter<"Problem"> | string
    progress?: IntWithAggregatesFilter<"Problem"> | number
    userId?: StringWithAggregatesFilter<"Problem"> | string
    templateId?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    title?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    steps?: JsonFilter<"Template">
    popularity?: IntFilter<"Template"> | number
    authorId?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: ProblemListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    steps?: SortOrder
    popularity?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    problems?: ProblemOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    title?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    steps?: JsonFilter<"Template">
    popularity?: IntFilter<"Template"> | number
    authorId?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: ProblemListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    steps?: SortOrder
    popularity?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    title?: StringWithAggregatesFilter<"Template"> | string
    description?: StringWithAggregatesFilter<"Template"> | string
    category?: StringWithAggregatesFilter<"Template"> | string
    steps?: JsonWithAggregatesFilter<"Template">
    popularity?: IntWithAggregatesFilter<"Template"> | number
    authorId?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type ProblemComponentWhereInput = {
    AND?: ProblemComponentWhereInput | ProblemComponentWhereInput[]
    OR?: ProblemComponentWhereInput[]
    NOT?: ProblemComponentWhereInput | ProblemComponentWhereInput[]
    id?: StringFilter<"ProblemComponent"> | string
    name?: StringFilter<"ProblemComponent"> | string
    description?: StringFilter<"ProblemComponent"> | string
    isCritical?: BoolFilter<"ProblemComponent"> | boolean
    problemId?: StringFilter<"ProblemComponent"> | string
    createdAt?: DateTimeFilter<"ProblemComponent"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemComponent"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemComponentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isCritical?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemComponentWhereInput | ProblemComponentWhereInput[]
    OR?: ProblemComponentWhereInput[]
    NOT?: ProblemComponentWhereInput | ProblemComponentWhereInput[]
    name?: StringFilter<"ProblemComponent"> | string
    description?: StringFilter<"ProblemComponent"> | string
    isCritical?: BoolFilter<"ProblemComponent"> | boolean
    problemId?: StringFilter<"ProblemComponent"> | string
    createdAt?: DateTimeFilter<"ProblemComponent"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemComponent"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type ProblemComponentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isCritical?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemComponentCountOrderByAggregateInput
    _max?: ProblemComponentMaxOrderByAggregateInput
    _min?: ProblemComponentMinOrderByAggregateInput
  }

  export type ProblemComponentScalarWhereWithAggregatesInput = {
    AND?: ProblemComponentScalarWhereWithAggregatesInput | ProblemComponentScalarWhereWithAggregatesInput[]
    OR?: ProblemComponentScalarWhereWithAggregatesInput[]
    NOT?: ProblemComponentScalarWhereWithAggregatesInput | ProblemComponentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemComponent"> | string
    name?: StringWithAggregatesFilter<"ProblemComponent"> | string
    description?: StringWithAggregatesFilter<"ProblemComponent"> | string
    isCritical?: BoolWithAggregatesFilter<"ProblemComponent"> | boolean
    problemId?: StringWithAggregatesFilter<"ProblemComponent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemComponent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemComponent"> | Date | string
  }

  export type FundamentalTruthWhereInput = {
    AND?: FundamentalTruthWhereInput | FundamentalTruthWhereInput[]
    OR?: FundamentalTruthWhereInput[]
    NOT?: FundamentalTruthWhereInput | FundamentalTruthWhereInput[]
    id?: StringFilter<"FundamentalTruth"> | string
    truth?: StringFilter<"FundamentalTruth"> | string
    description?: StringFilter<"FundamentalTruth"> | string
    problemId?: StringFilter<"FundamentalTruth"> | string
    createdAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
    updatedAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type FundamentalTruthOrderByWithRelationInput = {
    id?: SortOrder
    truth?: SortOrder
    description?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
  }

  export type FundamentalTruthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundamentalTruthWhereInput | FundamentalTruthWhereInput[]
    OR?: FundamentalTruthWhereInput[]
    NOT?: FundamentalTruthWhereInput | FundamentalTruthWhereInput[]
    truth?: StringFilter<"FundamentalTruth"> | string
    description?: StringFilter<"FundamentalTruth"> | string
    problemId?: StringFilter<"FundamentalTruth"> | string
    createdAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
    updatedAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type FundamentalTruthOrderByWithAggregationInput = {
    id?: SortOrder
    truth?: SortOrder
    description?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FundamentalTruthCountOrderByAggregateInput
    _max?: FundamentalTruthMaxOrderByAggregateInput
    _min?: FundamentalTruthMinOrderByAggregateInput
  }

  export type FundamentalTruthScalarWhereWithAggregatesInput = {
    AND?: FundamentalTruthScalarWhereWithAggregatesInput | FundamentalTruthScalarWhereWithAggregatesInput[]
    OR?: FundamentalTruthScalarWhereWithAggregatesInput[]
    NOT?: FundamentalTruthScalarWhereWithAggregatesInput | FundamentalTruthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundamentalTruth"> | string
    truth?: StringWithAggregatesFilter<"FundamentalTruth"> | string
    description?: StringWithAggregatesFilter<"FundamentalTruth"> | string
    problemId?: StringWithAggregatesFilter<"FundamentalTruth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FundamentalTruth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FundamentalTruth"> | Date | string
  }

  export type SolutionWhereInput = {
    AND?: SolutionWhereInput | SolutionWhereInput[]
    OR?: SolutionWhereInput[]
    NOT?: SolutionWhereInput | SolutionWhereInput[]
    id?: StringFilter<"Solution"> | string
    title?: StringFilter<"Solution"> | string
    description?: StringFilter<"Solution"> | string
    feasibility?: StringFilter<"Solution"> | string
    impact?: StringFilter<"Solution"> | string
    cost?: StringFilter<"Solution"> | string
    time?: StringFilter<"Solution"> | string
    problemId?: StringFilter<"Solution"> | string
    createdAt?: DateTimeFilter<"Solution"> | Date | string
    updatedAt?: DateTimeFilter<"Solution"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type SolutionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feasibility?: SortOrder
    impact?: SortOrder
    cost?: SortOrder
    time?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
  }

  export type SolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolutionWhereInput | SolutionWhereInput[]
    OR?: SolutionWhereInput[]
    NOT?: SolutionWhereInput | SolutionWhereInput[]
    title?: StringFilter<"Solution"> | string
    description?: StringFilter<"Solution"> | string
    feasibility?: StringFilter<"Solution"> | string
    impact?: StringFilter<"Solution"> | string
    cost?: StringFilter<"Solution"> | string
    time?: StringFilter<"Solution"> | string
    problemId?: StringFilter<"Solution"> | string
    createdAt?: DateTimeFilter<"Solution"> | Date | string
    updatedAt?: DateTimeFilter<"Solution"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type SolutionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feasibility?: SortOrder
    impact?: SortOrder
    cost?: SortOrder
    time?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolutionCountOrderByAggregateInput
    _max?: SolutionMaxOrderByAggregateInput
    _min?: SolutionMinOrderByAggregateInput
  }

  export type SolutionScalarWhereWithAggregatesInput = {
    AND?: SolutionScalarWhereWithAggregatesInput | SolutionScalarWhereWithAggregatesInput[]
    OR?: SolutionScalarWhereWithAggregatesInput[]
    NOT?: SolutionScalarWhereWithAggregatesInput | SolutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Solution"> | string
    title?: StringWithAggregatesFilter<"Solution"> | string
    description?: StringWithAggregatesFilter<"Solution"> | string
    feasibility?: StringWithAggregatesFilter<"Solution"> | string
    impact?: StringWithAggregatesFilter<"Solution"> | string
    cost?: StringWithAggregatesFilter<"Solution"> | string
    time?: StringWithAggregatesFilter<"Solution"> | string
    problemId?: StringWithAggregatesFilter<"Solution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Solution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solution"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthCreateNestedManyWithoutProblemInput
    solutions?: SolutionCreateNestedManyWithoutProblemInput
    user: UserCreateNestedOneWithoutProblemsInput
    template?: TemplateCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentUncheckedCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput
    solutions?: SolutionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUpdateManyWithoutProblemNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    template?: TemplateUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTemplatesInput
    problems?: ProblemCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    problems?: ProblemUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentCreateInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutComponentsInput
  }

  export type ProblemComponentUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemComponentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutComponentsNestedInput
  }

  export type ProblemComponentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentCreateManyInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemComponentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthCreateInput = {
    id?: string
    truth: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutFundamentalTruthsInput
  }

  export type FundamentalTruthUncheckedCreateInput = {
    id?: string
    truth: string
    description: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundamentalTruthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutFundamentalTruthsNestedInput
  }

  export type FundamentalTruthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthCreateManyInput = {
    id?: string
    truth: string
    description: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundamentalTruthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionCreateInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolutionsInput
  }

  export type SolutionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolutionsNestedInput
  }

  export type SolutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionCreateManyInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumProblemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemStatus | EnumProblemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemStatusFilter<$PrismaModel> | $Enums.ProblemStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProblemComponentListRelationFilter = {
    every?: ProblemComponentWhereInput
    some?: ProblemComponentWhereInput
    none?: ProblemComponentWhereInput
  }

  export type FundamentalTruthListRelationFilter = {
    every?: FundamentalTruthWhereInput
    some?: FundamentalTruthWhereInput
    none?: FundamentalTruthWhereInput
  }

  export type SolutionListRelationFilter = {
    every?: SolutionWhereInput
    some?: SolutionWhereInput
    none?: SolutionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type ProblemComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundamentalTruthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumProblemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemStatus | EnumProblemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProblemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemStatusFilter<$PrismaModel>
    _max?: NestedEnumProblemStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    steps?: SortOrder
    popularity?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    popularity?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    popularity?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    popularity?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type ProblemComponentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isCritical?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isCritical?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemComponentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isCritical?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FundamentalTruthCountOrderByAggregateInput = {
    id?: SortOrder
    truth?: SortOrder
    description?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundamentalTruthMaxOrderByAggregateInput = {
    id?: SortOrder
    truth?: SortOrder
    description?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundamentalTruthMinOrderByAggregateInput = {
    id?: SortOrder
    truth?: SortOrder
    description?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feasibility?: SortOrder
    impact?: SortOrder
    cost?: SortOrder
    time?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feasibility?: SortOrder
    impact?: SortOrder
    cost?: SortOrder
    time?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    feasibility?: SortOrder
    impact?: SortOrder
    cost?: SortOrder
    time?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAuthorInput | TemplateUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAuthorInput | TemplateUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAuthorInput | TemplateUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAuthorInput | TemplateUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAuthorInput | TemplateUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAuthorInput | TemplateUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ProblemComponentCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput> | ProblemComponentCreateWithoutProblemInput[] | ProblemComponentUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemComponentCreateOrConnectWithoutProblemInput | ProblemComponentCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemComponentCreateManyProblemInputEnvelope
    connect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
  }

  export type FundamentalTruthCreateNestedManyWithoutProblemInput = {
    create?: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput> | FundamentalTruthCreateWithoutProblemInput[] | FundamentalTruthUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: FundamentalTruthCreateOrConnectWithoutProblemInput | FundamentalTruthCreateOrConnectWithoutProblemInput[]
    createMany?: FundamentalTruthCreateManyProblemInputEnvelope
    connect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
  }

  export type SolutionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput> | SolutionCreateWithoutProblemInput[] | SolutionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolutionCreateOrConnectWithoutProblemInput | SolutionCreateOrConnectWithoutProblemInput[]
    createMany?: SolutionCreateManyProblemInputEnvelope
    connect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutProblemsInput = {
    create?: XOR<TemplateCreateWithoutProblemsInput, TemplateUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutProblemsInput
    connect?: TemplateWhereUniqueInput
  }

  export type ProblemComponentUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput> | ProblemComponentCreateWithoutProblemInput[] | ProblemComponentUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemComponentCreateOrConnectWithoutProblemInput | ProblemComponentCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemComponentCreateManyProblemInputEnvelope
    connect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
  }

  export type FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput> | FundamentalTruthCreateWithoutProblemInput[] | FundamentalTruthUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: FundamentalTruthCreateOrConnectWithoutProblemInput | FundamentalTruthCreateOrConnectWithoutProblemInput[]
    createMany?: FundamentalTruthCreateManyProblemInputEnvelope
    connect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
  }

  export type SolutionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput> | SolutionCreateWithoutProblemInput[] | SolutionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolutionCreateOrConnectWithoutProblemInput | SolutionCreateOrConnectWithoutProblemInput[]
    createMany?: SolutionCreateManyProblemInputEnvelope
    connect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
  }

  export type EnumProblemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProblemStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProblemComponentUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput> | ProblemComponentCreateWithoutProblemInput[] | ProblemComponentUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemComponentCreateOrConnectWithoutProblemInput | ProblemComponentCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemComponentUpsertWithWhereUniqueWithoutProblemInput | ProblemComponentUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemComponentCreateManyProblemInputEnvelope
    set?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    disconnect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    delete?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    connect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    update?: ProblemComponentUpdateWithWhereUniqueWithoutProblemInput | ProblemComponentUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemComponentUpdateManyWithWhereWithoutProblemInput | ProblemComponentUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemComponentScalarWhereInput | ProblemComponentScalarWhereInput[]
  }

  export type FundamentalTruthUpdateManyWithoutProblemNestedInput = {
    create?: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput> | FundamentalTruthCreateWithoutProblemInput[] | FundamentalTruthUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: FundamentalTruthCreateOrConnectWithoutProblemInput | FundamentalTruthCreateOrConnectWithoutProblemInput[]
    upsert?: FundamentalTruthUpsertWithWhereUniqueWithoutProblemInput | FundamentalTruthUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: FundamentalTruthCreateManyProblemInputEnvelope
    set?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    disconnect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    delete?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    connect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    update?: FundamentalTruthUpdateWithWhereUniqueWithoutProblemInput | FundamentalTruthUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: FundamentalTruthUpdateManyWithWhereWithoutProblemInput | FundamentalTruthUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: FundamentalTruthScalarWhereInput | FundamentalTruthScalarWhereInput[]
  }

  export type SolutionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput> | SolutionCreateWithoutProblemInput[] | SolutionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolutionCreateOrConnectWithoutProblemInput | SolutionCreateOrConnectWithoutProblemInput[]
    upsert?: SolutionUpsertWithWhereUniqueWithoutProblemInput | SolutionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolutionCreateManyProblemInputEnvelope
    set?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    disconnect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    delete?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    connect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    update?: SolutionUpdateWithWhereUniqueWithoutProblemInput | SolutionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolutionUpdateManyWithWhereWithoutProblemInput | SolutionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolutionScalarWhereInput | SolutionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type TemplateUpdateOneWithoutProblemsNestedInput = {
    create?: XOR<TemplateCreateWithoutProblemsInput, TemplateUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutProblemsInput
    upsert?: TemplateUpsertWithoutProblemsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutProblemsInput, TemplateUpdateWithoutProblemsInput>, TemplateUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput> | ProblemComponentCreateWithoutProblemInput[] | ProblemComponentUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemComponentCreateOrConnectWithoutProblemInput | ProblemComponentCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemComponentUpsertWithWhereUniqueWithoutProblemInput | ProblemComponentUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemComponentCreateManyProblemInputEnvelope
    set?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    disconnect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    delete?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    connect?: ProblemComponentWhereUniqueInput | ProblemComponentWhereUniqueInput[]
    update?: ProblemComponentUpdateWithWhereUniqueWithoutProblemInput | ProblemComponentUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemComponentUpdateManyWithWhereWithoutProblemInput | ProblemComponentUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemComponentScalarWhereInput | ProblemComponentScalarWhereInput[]
  }

  export type FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput> | FundamentalTruthCreateWithoutProblemInput[] | FundamentalTruthUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: FundamentalTruthCreateOrConnectWithoutProblemInput | FundamentalTruthCreateOrConnectWithoutProblemInput[]
    upsert?: FundamentalTruthUpsertWithWhereUniqueWithoutProblemInput | FundamentalTruthUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: FundamentalTruthCreateManyProblemInputEnvelope
    set?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    disconnect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    delete?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    connect?: FundamentalTruthWhereUniqueInput | FundamentalTruthWhereUniqueInput[]
    update?: FundamentalTruthUpdateWithWhereUniqueWithoutProblemInput | FundamentalTruthUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: FundamentalTruthUpdateManyWithWhereWithoutProblemInput | FundamentalTruthUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: FundamentalTruthScalarWhereInput | FundamentalTruthScalarWhereInput[]
  }

  export type SolutionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput> | SolutionCreateWithoutProblemInput[] | SolutionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolutionCreateOrConnectWithoutProblemInput | SolutionCreateOrConnectWithoutProblemInput[]
    upsert?: SolutionUpsertWithWhereUniqueWithoutProblemInput | SolutionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolutionCreateManyProblemInputEnvelope
    set?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    disconnect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    delete?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    connect?: SolutionWhereUniqueInput | SolutionWhereUniqueInput[]
    update?: SolutionUpdateWithWhereUniqueWithoutProblemInput | SolutionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolutionUpdateManyWithWhereWithoutProblemInput | SolutionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolutionScalarWhereInput | SolutionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput> | ProblemCreateWithoutTemplateInput[] | ProblemUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTemplateInput | ProblemCreateOrConnectWithoutTemplateInput[]
    createMany?: ProblemCreateManyTemplateInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput> | ProblemCreateWithoutTemplateInput[] | ProblemUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTemplateInput | ProblemCreateOrConnectWithoutTemplateInput[]
    createMany?: ProblemCreateManyTemplateInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type ProblemUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput> | ProblemCreateWithoutTemplateInput[] | ProblemUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTemplateInput | ProblemCreateOrConnectWithoutTemplateInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutTemplateInput | ProblemUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ProblemCreateManyTemplateInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutTemplateInput | ProblemUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutTemplateInput | ProblemUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput> | ProblemCreateWithoutTemplateInput[] | ProblemUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTemplateInput | ProblemCreateOrConnectWithoutTemplateInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutTemplateInput | ProblemUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ProblemCreateManyTemplateInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutTemplateInput | ProblemUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutTemplateInput | ProblemUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemCreateNestedOneWithoutComponentsInput = {
    create?: XOR<ProblemCreateWithoutComponentsInput, ProblemUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutComponentsInput
    connect?: ProblemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProblemUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: XOR<ProblemCreateWithoutComponentsInput, ProblemUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutComponentsInput
    upsert?: ProblemUpsertWithoutComponentsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutComponentsInput, ProblemUpdateWithoutComponentsInput>, ProblemUncheckedUpdateWithoutComponentsInput>
  }

  export type ProblemCreateNestedOneWithoutFundamentalTruthsInput = {
    create?: XOR<ProblemCreateWithoutFundamentalTruthsInput, ProblemUncheckedCreateWithoutFundamentalTruthsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutFundamentalTruthsInput
    connect?: ProblemWhereUniqueInput
  }

  export type ProblemUpdateOneRequiredWithoutFundamentalTruthsNestedInput = {
    create?: XOR<ProblemCreateWithoutFundamentalTruthsInput, ProblemUncheckedCreateWithoutFundamentalTruthsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutFundamentalTruthsInput
    upsert?: ProblemUpsertWithoutFundamentalTruthsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutFundamentalTruthsInput, ProblemUpdateWithoutFundamentalTruthsInput>, ProblemUncheckedUpdateWithoutFundamentalTruthsInput>
  }

  export type ProblemCreateNestedOneWithoutSolutionsInput = {
    create?: XOR<ProblemCreateWithoutSolutionsInput, ProblemUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolutionsInput
    connect?: ProblemWhereUniqueInput
  }

  export type ProblemUpdateOneRequiredWithoutSolutionsNestedInput = {
    create?: XOR<ProblemCreateWithoutSolutionsInput, ProblemUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolutionsInput
    upsert?: ProblemUpsertWithoutSolutionsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolutionsInput, ProblemUpdateWithoutSolutionsInput>, ProblemUncheckedUpdateWithoutSolutionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProblemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemStatus | EnumProblemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemStatusFilter<$PrismaModel> | $Enums.ProblemStatus
  }

  export type NestedEnumProblemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemStatus | EnumProblemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemStatus[] | ListEnumProblemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProblemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemStatusFilter<$PrismaModel>
    _max?: NestedEnumProblemStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthCreateNestedManyWithoutProblemInput
    solutions?: SolutionCreateNestedManyWithoutProblemInput
    template?: TemplateCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentUncheckedCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput
    solutions?: SolutionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput>
  }

  export type TemplateCreateManyAuthorInputEnvelope = {
    data: TemplateCreateManyAuthorInput | TemplateCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    status?: EnumProblemStatusFilter<"Problem"> | $Enums.ProblemStatus
    category?: StringFilter<"Problem"> | string
    progress?: IntFilter<"Problem"> | number
    userId?: StringFilter<"Problem"> | string
    templateId?: StringNullableFilter<"Problem"> | string | null
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutAuthorInput, TemplateUncheckedUpdateWithoutAuthorInput>
    create: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutAuthorInput, TemplateUncheckedUpdateWithoutAuthorInput>
  }

  export type TemplateUpdateManyWithWhereWithoutAuthorInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    title?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    steps?: JsonFilter<"Template">
    popularity?: IntFilter<"Template"> | number
    authorId?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type ProblemComponentCreateWithoutProblemInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemComponentUncheckedCreateWithoutProblemInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemComponentCreateOrConnectWithoutProblemInput = {
    where: ProblemComponentWhereUniqueInput
    create: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput>
  }

  export type ProblemComponentCreateManyProblemInputEnvelope = {
    data: ProblemComponentCreateManyProblemInput | ProblemComponentCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type FundamentalTruthCreateWithoutProblemInput = {
    id?: string
    truth: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundamentalTruthUncheckedCreateWithoutProblemInput = {
    id?: string
    truth: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundamentalTruthCreateOrConnectWithoutProblemInput = {
    where: FundamentalTruthWhereUniqueInput
    create: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput>
  }

  export type FundamentalTruthCreateManyProblemInputEnvelope = {
    data: FundamentalTruthCreateManyProblemInput | FundamentalTruthCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type SolutionCreateWithoutProblemInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionUncheckedCreateWithoutProblemInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionCreateOrConnectWithoutProblemInput = {
    where: SolutionWhereUniqueInput
    create: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput>
  }

  export type SolutionCreateManyProblemInputEnvelope = {
    data: SolutionCreateManyProblemInput | SolutionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templates?: TemplateCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type TemplateCreateWithoutProblemsInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutProblemsInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutProblemsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutProblemsInput, TemplateUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemComponentUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemComponentWhereUniqueInput
    update: XOR<ProblemComponentUpdateWithoutProblemInput, ProblemComponentUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemComponentCreateWithoutProblemInput, ProblemComponentUncheckedCreateWithoutProblemInput>
  }

  export type ProblemComponentUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemComponentWhereUniqueInput
    data: XOR<ProblemComponentUpdateWithoutProblemInput, ProblemComponentUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemComponentUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemComponentScalarWhereInput
    data: XOR<ProblemComponentUpdateManyMutationInput, ProblemComponentUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemComponentScalarWhereInput = {
    AND?: ProblemComponentScalarWhereInput | ProblemComponentScalarWhereInput[]
    OR?: ProblemComponentScalarWhereInput[]
    NOT?: ProblemComponentScalarWhereInput | ProblemComponentScalarWhereInput[]
    id?: StringFilter<"ProblemComponent"> | string
    name?: StringFilter<"ProblemComponent"> | string
    description?: StringFilter<"ProblemComponent"> | string
    isCritical?: BoolFilter<"ProblemComponent"> | boolean
    problemId?: StringFilter<"ProblemComponent"> | string
    createdAt?: DateTimeFilter<"ProblemComponent"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemComponent"> | Date | string
  }

  export type FundamentalTruthUpsertWithWhereUniqueWithoutProblemInput = {
    where: FundamentalTruthWhereUniqueInput
    update: XOR<FundamentalTruthUpdateWithoutProblemInput, FundamentalTruthUncheckedUpdateWithoutProblemInput>
    create: XOR<FundamentalTruthCreateWithoutProblemInput, FundamentalTruthUncheckedCreateWithoutProblemInput>
  }

  export type FundamentalTruthUpdateWithWhereUniqueWithoutProblemInput = {
    where: FundamentalTruthWhereUniqueInput
    data: XOR<FundamentalTruthUpdateWithoutProblemInput, FundamentalTruthUncheckedUpdateWithoutProblemInput>
  }

  export type FundamentalTruthUpdateManyWithWhereWithoutProblemInput = {
    where: FundamentalTruthScalarWhereInput
    data: XOR<FundamentalTruthUpdateManyMutationInput, FundamentalTruthUncheckedUpdateManyWithoutProblemInput>
  }

  export type FundamentalTruthScalarWhereInput = {
    AND?: FundamentalTruthScalarWhereInput | FundamentalTruthScalarWhereInput[]
    OR?: FundamentalTruthScalarWhereInput[]
    NOT?: FundamentalTruthScalarWhereInput | FundamentalTruthScalarWhereInput[]
    id?: StringFilter<"FundamentalTruth"> | string
    truth?: StringFilter<"FundamentalTruth"> | string
    description?: StringFilter<"FundamentalTruth"> | string
    problemId?: StringFilter<"FundamentalTruth"> | string
    createdAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
    updatedAt?: DateTimeFilter<"FundamentalTruth"> | Date | string
  }

  export type SolutionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SolutionWhereUniqueInput
    update: XOR<SolutionUpdateWithoutProblemInput, SolutionUncheckedUpdateWithoutProblemInput>
    create: XOR<SolutionCreateWithoutProblemInput, SolutionUncheckedCreateWithoutProblemInput>
  }

  export type SolutionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SolutionWhereUniqueInput
    data: XOR<SolutionUpdateWithoutProblemInput, SolutionUncheckedUpdateWithoutProblemInput>
  }

  export type SolutionUpdateManyWithWhereWithoutProblemInput = {
    where: SolutionScalarWhereInput
    data: XOR<SolutionUpdateManyMutationInput, SolutionUncheckedUpdateManyWithoutProblemInput>
  }

  export type SolutionScalarWhereInput = {
    AND?: SolutionScalarWhereInput | SolutionScalarWhereInput[]
    OR?: SolutionScalarWhereInput[]
    NOT?: SolutionScalarWhereInput | SolutionScalarWhereInput[]
    id?: StringFilter<"Solution"> | string
    title?: StringFilter<"Solution"> | string
    description?: StringFilter<"Solution"> | string
    feasibility?: StringFilter<"Solution"> | string
    impact?: StringFilter<"Solution"> | string
    cost?: StringFilter<"Solution"> | string
    time?: StringFilter<"Solution"> | string
    problemId?: StringFilter<"Solution"> | string
    createdAt?: DateTimeFilter<"Solution"> | Date | string
    updatedAt?: DateTimeFilter<"Solution"> | Date | string
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TemplateUpsertWithoutProblemsInput = {
    update: XOR<TemplateUpdateWithoutProblemsInput, TemplateUncheckedUpdateWithoutProblemsInput>
    create: XOR<TemplateCreateWithoutProblemsInput, TemplateUncheckedCreateWithoutProblemsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutProblemsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutProblemsInput, TemplateUncheckedUpdateWithoutProblemsInput>
  }

  export type TemplateUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type ProblemCreateWithoutTemplateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthCreateNestedManyWithoutProblemInput
    solutions?: SolutionCreateNestedManyWithoutProblemInput
    user: UserCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutTemplateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentUncheckedCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput
    solutions?: SolutionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutTemplateInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput>
  }

  export type ProblemCreateManyTemplateInputEnvelope = {
    data: ProblemCreateManyTemplateInput | ProblemCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutTemplateInput, ProblemUncheckedUpdateWithoutTemplateInput>
    create: XOR<ProblemCreateWithoutTemplateInput, ProblemUncheckedCreateWithoutTemplateInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutTemplateInput, ProblemUncheckedUpdateWithoutTemplateInput>
  }

  export type ProblemUpdateManyWithWhereWithoutTemplateInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutTemplateInput>
  }

  export type ProblemCreateWithoutComponentsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fundamentalTruths?: FundamentalTruthCreateNestedManyWithoutProblemInput
    solutions?: SolutionCreateNestedManyWithoutProblemInput
    user: UserCreateNestedOneWithoutProblemsInput
    template?: TemplateCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutComponentsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fundamentalTruths?: FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput
    solutions?: SolutionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutComponentsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutComponentsInput, ProblemUncheckedCreateWithoutComponentsInput>
  }

  export type ProblemUpsertWithoutComponentsInput = {
    update: XOR<ProblemUpdateWithoutComponentsInput, ProblemUncheckedUpdateWithoutComponentsInput>
    create: XOR<ProblemCreateWithoutComponentsInput, ProblemUncheckedCreateWithoutComponentsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutComponentsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutComponentsInput, ProblemUncheckedUpdateWithoutComponentsInput>
  }

  export type ProblemUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundamentalTruths?: FundamentalTruthUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUpdateManyWithoutProblemNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    template?: TemplateUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutComponentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundamentalTruths?: FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateWithoutFundamentalTruthsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentCreateNestedManyWithoutProblemInput
    solutions?: SolutionCreateNestedManyWithoutProblemInput
    user: UserCreateNestedOneWithoutProblemsInput
    template?: TemplateCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutFundamentalTruthsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentUncheckedCreateNestedManyWithoutProblemInput
    solutions?: SolutionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutFundamentalTruthsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutFundamentalTruthsInput, ProblemUncheckedCreateWithoutFundamentalTruthsInput>
  }

  export type ProblemUpsertWithoutFundamentalTruthsInput = {
    update: XOR<ProblemUpdateWithoutFundamentalTruthsInput, ProblemUncheckedUpdateWithoutFundamentalTruthsInput>
    create: XOR<ProblemCreateWithoutFundamentalTruthsInput, ProblemUncheckedCreateWithoutFundamentalTruthsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutFundamentalTruthsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutFundamentalTruthsInput, ProblemUncheckedUpdateWithoutFundamentalTruthsInput>
  }

  export type ProblemUpdateWithoutFundamentalTruthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUpdateManyWithoutProblemNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    template?: TemplateUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutFundamentalTruthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateWithoutSolutionsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthCreateNestedManyWithoutProblemInput
    user: UserCreateNestedOneWithoutProblemsInput
    template?: TemplateCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutSolutionsInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    components?: ProblemComponentUncheckedCreateNestedManyWithoutProblemInput
    fundamentalTruths?: FundamentalTruthUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolutionsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolutionsInput, ProblemUncheckedCreateWithoutSolutionsInput>
  }

  export type ProblemUpsertWithoutSolutionsInput = {
    update: XOR<ProblemUpdateWithoutSolutionsInput, ProblemUncheckedUpdateWithoutSolutionsInput>
    create: XOR<ProblemCreateWithoutSolutionsInput, ProblemUncheckedCreateWithoutSolutionsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolutionsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolutionsInput, ProblemUncheckedUpdateWithoutSolutionsInput>
  }

  export type ProblemUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUpdateManyWithoutProblemNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    template?: TemplateUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    templateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyAuthorInput = {
    id?: string
    title: string
    description: string
    category: string
    steps: JsonNullValueInput | InputJsonValue
    popularity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUpdateManyWithoutProblemNestedInput
    template?: TemplateUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    popularity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentCreateManyProblemInput = {
    id?: string
    name: string
    description: string
    isCritical?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundamentalTruthCreateManyProblemInput = {
    id?: string
    truth: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionCreateManyProblemInput = {
    id?: string
    title: string
    description: string
    feasibility: string
    impact: string
    cost: string
    time: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemComponentUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemComponentUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isCritical?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundamentalTruthUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    truth?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    feasibility?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    cost?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateManyTemplateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.ProblemStatus
    category: string
    progress?: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUpdateManyWithoutProblemNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    components?: ProblemComponentUncheckedUpdateManyWithoutProblemNestedInput
    fundamentalTruths?: FundamentalTruthUncheckedUpdateManyWithoutProblemNestedInput
    solutions?: SolutionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumProblemStatusFieldUpdateOperationsInput | $Enums.ProblemStatus
    category?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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