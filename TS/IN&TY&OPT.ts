// * Highlight: Interface with optional property
interface Person {
  name: string; // * Important: required property (must always exist)
  age: number; // * Important: required property
  greet(): void; // * Highlight: method signature → must return nothing (void)
  phone?: number; // * Highlight: optional property → may or may not exist
  // greet: () => void; // Alternative way to define a method type
}

function greet() {
  console.log(`Hi`);
}

// * Highlight: Using Person interface
const person1: Person = {
  name: "Duck",
  age: 1,
  greet() {
    console.log(`Hi ${this.name}`);
  },
  // greet, // ? Could also reuse external "greet" function
};

person1.greet();
// Output: "Hi Duck"

// * Highlight: Function Interface
// * Important: Interfaces can describe function signatures too
interface MathOperations {
  (a: number, b: number): number;
  // * Meaning: Any function with two number params
  //            and a number return type is valid
}

// ! Note: Type alias is usually cleaner for function types:
// type MathOperations = (a: number, b: number) => number;

const add: MathOperations = (x, y) => x + y; // ✅ valid
const subtract: MathOperations = (x, y) => x - y; // ✅ valid

console.log(`${add(1, 2)} \n ${subtract(2, 1)}`);

// * Highlight: Type Alias
// * Important: A type alias is just a new name for an existing type
type UserID = string;
// ! Alert: Redundant here, because UserID is just string under the hood
// * Benefit: Improves readability in complex cases

let userId: UserID = "user123";

// * Highlight: Using alias inside another type
type User = {
  id: UserID;
  name: string;
};

const user: User = {
  id: userId,
  name: "John Doe",
};

// * Highlight: Union alias
type ID = string | number;
// * Important: ID can be either string OR number

// * Highlight: Interfaces vs Type Aliases
// * Interfaces → best for objects/classes, can be extended
// * Type aliases → more flexible (can do unions, intersections, primitives, etc.)

interface Family {
  Father: string;
  Mother: string;
}

interface ExtendFamily extends Family {
  Children: number; // * Highlight: inheritance-like behavior
}

let family: ExtendFamily;
// * Must include Father, Mother, Children when assigned

// * Highlight: Type alias + intersection
type Vehicle = {
  name: string;
  model: number;
};

type ExtendVehicle = Vehicle & {
  color: string;
  isElectric: boolean;
};
// * Important: Intersection (&) merges Vehicle + new fields

let Car: ExtendVehicle;
// * Must include name, model, color, and isElectric

// * Highlight: Literal union with type alias
type status = "active" | "inactive" | "pending";
// * Important: status can only take one of these values

let userStatus: status = "active"; // ✅
// userStatus = "blocked"; ❌ error → not in union

// * Highlight: Intersection type with inline objects
let config: { server: string; port: number } & {
  secure: boolean;
  timeOut: number;
} = {
  server: "localhost",
  port: 8080,
  secure: true,
  timeOut: 5000,
};
// * Important: Final type must have ALL properties from both sides
// ! Alert: If you miss any → TS error
