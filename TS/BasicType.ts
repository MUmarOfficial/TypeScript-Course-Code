// * Highlight: Demonstrating TypeScript primitive & reference types (number, string, boolean, object, array, void)

// Type number with underscores for readability
// * Important: Underscores in numeric literals improve readability but don’t affect value.
// For example: 1_000_000 is easier to read than 1000000.
let num: number = 10_12_34;
// * Highlight: num is of type number.
// 10_12_34 is interpreted as 101234 (underscores are ignored at runtime).

let num1: bigint = 10_12_34_56_78_95252478570n; // bigint with underscores
// * Important: BigInt type is used for handling very large integers beyond Number.MAX_SAFE_INTEGER.
// Notice the trailing `n` → tells TS/JS this literal is a BigInt, not a normal number.

let num2: number = 123.54;
// Standard floating-point number (decimal).
// * Highlight: TypeScript treats this as number (same type for integers & floats).

console.log("num:", num);
console.log("num1:", num1);
console.log("num2:", num2);

// Type String with template literals
// * Important: Template literals allow for multi-line strings & string interpolation.
// They use backticks `` instead of single '' or double "" quotes.
let personName: string = "Umar";
// Explicitly typed as string.

let greeting: string = `Hello, ${personName}! Welcome to TypeScript.`;
// * Highlight: `${personName}` is interpolation → directly inserts variable’s value.
// ? Why use template literals? → Easier and cleaner than "Hello " + personName + " ..."

console.log(greeting);

// Type Boolean
let isActive: boolean = true; // Boolean → can only be true or false.
let isComplete: boolean = false;

console.log("isActive:", isActive);
console.log("isComplete:", isComplete);

// Type object
// * Important: The broad `object` type means any non-primitive value.
let person: object = {
  name: "Umar",
  age: 30,
  isEmployed: true,
};
// * Alert: Declaring as `object` is not strict → any shape of object is allowed.
// TypeScript won’t enforce required properties here.

// * Better Approach: Use exact inline type definition
let student: { name: string; age: number; absence: boolean } = {
  name: "Umar",
  age: 30,
  absence: true,
};
// * Highlight: TS enforces the structure → must have all required props with correct types.

// Spread operator example
person = { ...person, gender: "male" };
// `{...person}` copies all existing properties, then adds/overwrites `gender`.
// * Highlight: Safer immutable way to extend objects.

// Type Array
// * Important: Arrays can be strongly typed → ensures all elements match defined type.

let numArray: number[] = [1, 2, 3, 4, 5];
// Only numbers allowed. Trying to push a string → ❌ compile-time error.
console.log("Number array:", numArray);

let strArray: string[] = ["apple", "banana", "cherry"];
// Only strings allowed.

let boolArray: boolean[] = [true, false, true];
// Only booleans allowed.

numArray.push(6); // ✅ valid
// numArray.push("seven"); // ❌ Error: Argument of type 'string' not assignable to parameter of type 'number'.

// * Highlight: Array Iteration Examples
strArray.forEach((item) => {
  console.log(item.toUpperCase());
  // .toUpperCase() is string-only method → safe since TS knows items are strings.
});

boolArray.forEach((item) => {
  console.log(item ? "Yes" : "No");
  // Ternary operator → condition ? trueCase : falseCase
  // true → "Yes", false → "No".
});

// Type Void
// * Important: The `void` type means "no value".
// Commonly used for functions that don’t return anything.
function logMessage(message: string): void {
  console.log(message);
}
// * Highlight: logMessage prints but doesn’t return.
// If you try to `return message;` → TS error, since void forbids return values.
