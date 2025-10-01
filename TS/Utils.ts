// * Highlight: Utils.ts (Utility Module)
// * This file exports multiple utilities: functions, constants, a class, and a default logger.
// * Demonstrates all major export styles in TypeScript.

// * Highlight: Named Function Export
// * Calculates the remainder of two numbers using the modulus operator (%).
export function getRemainder(a: number, b: number): number {
  return a % b;
}

// * Highlight: Named Constant Export
// * Approximated value of π (Pi).
// ! Alert: This is only a rounded value (3.14). Consider using Math.PI for higher precision.
export const PI = 3.14;

// * Highlight: Exported Class
// * Calculator class provides basic arithmetic operations.
// * This can be imported and instantiated in other files.
export class Calculator {
  // * Adds two numbers
  add(a: number, b: number): number {
    return a + b;
  }

  // * Subtracts b from a
  subtract(a: number, b: number): number {
    return a - b;
  }

  // * Multiplies two numbers
  multiply(a: number, b: number): number {
    return a * b;
  }

  // * Divides a by b
  // ! Alert: Throws runtime error if divisor (b) is zero.
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is undefined");
    }
    return a / b;
  }
}

// * Highlight: Default Export
// * Default exports don’t need curly braces when imported.
// * By convention, used when the file has a single main purpose.
// * Here: simple logger function.
export default function log(message: string): void {
  console.log(message);
}

// ? Should we enhance the logger to include timestamps or log levels (info, warn, error)?
// TODO: Add advanced mathematical operations (power, sqrt, factorial) into Calculator class.
// ! Deprecated: Avoid using this Utils file for too many unrelated utilities. Split by domain if it grows.
