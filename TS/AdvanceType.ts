// * Highlight: Demonstrating advanced TypeScript types (null, undefined, any, tuple, enum, unknown, never, inference, assertions, union, narrowing)

// Type Null and Undefined
// * Important: Null represents an intentional absence of any value,
// while Undefined means a variable has been declared but not assigned a value.

let emptyValue: null = null;
// * Highlight: `null` means "no value". TypeScript forces this variable to only hold null.

let uninitializedValue: undefined;
// * Important: Declared but not given any value → automatically `undefined`.
// * Highlight: `undefined` is the default value for variables not initialized.

console.log("emptyValue:", emptyValue);
console.log("uninitializedValue:", uninitializedValue);

// Type Any
// * Important: The 'any' type allows you to assign any value to a variable, bypassing type checking.
// * Alert: This should be avoided when possible, as it defeats the purpose of TypeScript's type safety.
let dynamicValue: any;
dynamicValue = 42; // number
dynamicValue = "Hello"; // string
dynamicValue = true; // boolean
// * Highlight: You can assign ANYTHING, no errors. But this removes type protection.

// * Important: In functions, we should declare parameters with specific types for better safety.
function ForAnyUnderstanding(params: any) {
  console.log(params);
}
// ? Should we refactor this to use `unknown` instead of `any` for stricter type safety?

// Type Tuple
// * Important: Tuples are a special type of array that can hold a fixed number of elements with specific types.
let tuple: [string, number, boolean] = ["Umar", 18, true];
// * Highlight: Tuple must follow order → string first, then number, then boolean.

let [name1, age1, isStudent1] = tuple; // Destructuring the tuple
console.log(`Name: ${name1}, Age: ${age1}, Is Student: ${isStudent1}`);

let coordinates: [number, number] = [10.5, 20.3];
// Example: x, y coordinate pair.

let response: [number, string] = [200, "Success"];
// Example: HTTP response → status code + message.

// Type Enum
// * Important: Enums are a way to define a set of named constants.
// * Highlight: They can be numeric or string-based. Useful for fixed sets of options.
enum AppInfo {
  AppName = "TypeScript Demo",
  Version = "1.0.0",
  Author = "Umar",
}
// * Highlight: By default, enums are numeric, but here we explicitly made them string-based.

console.log(`App Name: ${AppInfo.AppName}`);
console.log(`Version: ${AppInfo.Version}`);
console.log(`Author: ${AppInfo.Author}`);

let enumExample: AppInfo = AppInfo.AppName; // Using the enum
console.log("Enum Example:", enumExample);

// Type Unknown
// * Important: The 'unknown' type is similar to 'any', but safer.
// * Highlight: It requires type checking before performing operations.
let unknownValue: unknown;
unknownValue = "This could be anything";

if (typeof unknownValue === "string") {
  console.log("Unknown Value is a string:", unknownValue.toUpperCase());
} else if (typeof unknownValue === "number") {
  console.log("Unknown Value is a number:", unknownValue.toFixed(2));
}
// * Highlight: Without type checks, TS would error, unlike `any` which allows everything blindly.

// Type Never
// * Important: The 'never' type represents values that never occur.
// * Highlight: Used for functions that throw errors or loop forever.
function throwError(message: string): never {
  throw new Error(message); // function never "returns"
}

function infiniteLoop(): never {
  while (true) {
    console.log("This will run forever"); // no exit point
  }
}

// Type Inference
let username = "Jack";
// * Highlight: TypeScript automatically infers the type as `string`.
// Even without `: string`, `username` is treated as string.

// Type Assertions
let someValue: any = "Hello World";
// ! Alert: `any` here disables type checking.
// * Important: But we KNOW it’s a string, so we "assert" it.

let stringLength: number = (someValue as string).length;
// * Highlight: `as string` tells TS: "Trust me, this is a string".
// Now TS lets us call `.length`.
console.log(stringLength);

// Type Union
// * Important: Union types allow a variable to hold more than one type.
let id: string | number;
id = "Something"; // ✅ valid
id = 1; // ✅ valid

function printId(id: string | number) {
  console.log(`id : ${id}`);
}

printId("!"); // string case
printId(11); // number case

// Type Narrowing
// * Important: Narrowing means reducing a union type down to one specific type
// by checking its type at runtime.
function printIdFn(id: string | number) {
  if (typeof id === "string") {
    console.log("id is a string", id.toUpperCase());
    // * Highlight: Here, TypeScript narrows type → id is definitely a string.
  } else {
    console.log(`id is a number: ${id.toFixed(2)}`);
    // * Highlight: Here, id is definitely a number.
  }
}
