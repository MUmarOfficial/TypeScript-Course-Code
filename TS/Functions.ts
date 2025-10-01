// * Regular Function
// - Classic way to define functions.
// - Parameters + return type explicitly typed.
function addNum(a: number, b: number): number {
  return a + b;
}
console.log("addNum:", addNum(2, 3)); // ✅ 5

// * Function Expression
// - Function assigned to a variable.
// - Useful when passing as values.
const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log("multiply:", multiply(3, 4)); // ✅ 12

// * Arrow Functions
// - Shorter syntax.
// - Lexical `this` → inherits context (unlike regular functions).
const divide = (a: number, b: number): number => {
  return a / b;
};
console.log("divide:", divide(10, 2)); // ✅ 5

// * Optional Parameter
// - Parameter marked with `?` → may or may not be passed.
// - Must come after required parameters.
function greet0(name: string, greeting?: string): string {
  return `${greeting ? greeting : ""} ${name}`;
}
console.log(greet0("Umar")); // ✅ " Umar"
console.log(greet0("Umar", "Hi")); // ✅ "Hi Umar"

// * Default Parameter
// - If not passed, fallback value is used.
function greet1(name: string, greeting: string = "Hello"): string {
  return `${greeting} ${name}`;
}
console.log(greet1("Umar")); // ✅ "Hello Umar"
console.log(greet1("Umar", "Salam")); // ✅ "Salam Umar"

// * Function Overloading
// - Multiple signatures for one function.
// - Same function body handles different parameter types.
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length;
}

console.log(getLength("hello")); // ✅ 5
console.log(getLength([1, 2, 3])); // ✅ 3
// getLength(123); ❌ Error: No overload matches this call.

// * Rest Parameters
// - Collects multiple arguments into an array.
// - Must be the last parameter.
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}
console.log(sum(1, 2, 3, 4)); // ✅ 10

function greetMultiplePeople(greeting: string, ...names: string[]): void {
  names.forEach((name) => {
    console.log(`${greeting}! ${name}`);
  });
}
greetMultiplePeople("Hello", "Umar", "Usman", "Taha", "Ali");
// ✅
// Hello! Umar
// Hello! Usman
// Hello! Taha
// Hello! Ali
