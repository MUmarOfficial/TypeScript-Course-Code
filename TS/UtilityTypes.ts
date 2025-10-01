// * Utility Types
// * TypeScript provides built-in utility types that help us transform existing types
// * without rewriting them. They make code reusable, flexible, and clean.

// * Partial
// * Partial<T> makes all properties optional
// ? Useful when updating part of an object
interface UserRecord {
  name: string;
  age: number;
  email: string;
}

const UpdateUser = (user: Partial<UserRecord>) => {
  console.log(user); // * user can have some or no properties
};

// * Required
// * Required<T> makes all properties mandatory
type User456 = Required<UserRecord>;

let user789: User456 = {
  name: "Denial",
  age: 30,
  email: "denial30@gmail.com",
};

// * Readonly
// * Readonly<T> makes properties immutable after initialization
// ! Once assigned, you cannot reassign values
class Library {
  readonly books: string;

  constructor(books: string) {
    this.books = books; // * Allowed during construction
  }

  toreBooks(tore: string): void {
    // ! this.books = tore; // Error: cannot reassign readonly
    console.log(tore);
  }
}

// * Pick
// * Pick<T, K> selects specific keys from a type
type UserInfo = Pick<UserRecord, "name" | "email">;

const userInfo: UserInfo = {
  name: "Johnny",
  email: "johnny@gmail.com",
};

// * Omit
// * Omit<T, K> removes specific keys from a type
type userWithoutEmail = Omit<UserRecord, "email">;

const userOmitEmail: userWithoutEmail = {
  name: "Ema",
  age: 19,
};

// * Record
// * Record<K, T> creates an object type with keys K and values of type T
type Role = "admin" | "user" | "guest";
const userRole: Record<Role, string> = {
  admin: "Maxwell",
  user: "Johnny",
  guest: "Dickinson",
};

// * Exclude
// * Exclude<T, U> removes types from T that are assignable to U
type ServerResponse = 200 | 404 | 500;
type ExcludeSError = Exclude<ServerResponse, 500>; // * Result: 200 | 404
const resp: ExcludeSError = 200;

// * Extract
// * Extract<T, U> picks only types from T that match U
type ExtractSuccess = Extract<ServerResponse, 200>; // * Result: 200
const newResp: ExtractSuccess = 200;

// * Non Nullable
// * NonNullable<T> removes null and undefined
type MayBeUser = string | null | undefined;
type UserOnly = NonNullable<MayBeUser>; // * Only string left

const anotherUser: UserOnly = "Null and Undefined is ignored.";

// * Return Type
// * ReturnType<T> extracts function return type
function getUser() {
  return {
    fruit: "apple",
    quantity: 10,
  };
}

type FetchedFromRTOfF = ReturnType<typeof getUser>; // * { fruit: string, quantity: number }
const fruitBucket: FetchedFromRTOfF = {
  fruit: "banana",
  quantity: 12,
};

// * Parameters
// * Parameters<T> extracts function parameter types as tuple
function updateUserData(name: string, age: number) {
  console.log(name, age);
}

type FetchFromPOfF = Parameters<typeof updateUserData>; // * [string, number]
const paramsUser: FetchFromPOfF = ["Umar", 18];

// * Constructor Parameters
// * ConstructorParameters<T> extracts constructor args as tuple
class UserCData {
  constructor(public name: string, public age?: number) {}
}

type UserCParams = ConstructorParameters<typeof UserCData>; // * [string, (number | undefined)?]
const userCParams: UserCParams = ["Omar"];
