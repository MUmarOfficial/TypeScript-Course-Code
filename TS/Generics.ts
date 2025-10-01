/*
 * Generics
 * Generics are a way to create reusable components (FUNCTIONS, CLASSES, INTERFACES).
 * They work with different data types while preserving TYPE SAFETY.
 * Instead of writing the same logic multiple times for different types,
 * we can use a generic type parameter <T> to make our code more flexible.
 */

// * Highlight: Generics with functions
// * "T" is a type placeholder (Type Variable).
// * It ensures the return type is the same as the input type.
function genericIdentity<T>(param: T): T {
  return param;
}

// * Important: If no <type> is provided explicitly, TypeScript infers `any` (less safe).
console.log(genericIdentity(undefined));

// * Important: If we don’t specify <type>, TS infers the type from the argument itself.
console.log(genericIdentity("value")); // inferred as string

// * Highlight: Explicit type assignment
// * Here, we tell TS: param must be number.
console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>("Nothing"));

// * Highlight: Generics with interfaces
// * We can define interfaces that work with multiple types using type parameters.
interface KeyPair<T, U> {
  key: T;
  value: U;
}

// * Example: string for key, number for value.
const keyObj: KeyPair<string, number> = {
  key: "key123",
  value: 456,
};

// * Highlight: Generic Constraints
// * Sometimes we want generics to work only on certain shapes of data.
// * `T extends { length: number }` means: T must have a length property.
function getLenght<T extends { length: number }>(items: T): number {
  return items.length;
}

// * Example with string (has length property)
console.log(getLenght("SomeValue"));
// * Example with array (also has length property)
console.log(getLenght([1, 2, 3, 4, 5]));
// ! Alert: This won’t work → getLenght(123) ❌ (numbers don’t have length)

// * Highlight: Generics with classes
// * We can use <T> in class definitions, so the same class can store different types.
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

// * Highlight: Generic Stack Class (LIFO - Last In, First Out)
// * Flexible class that works with any type (number, string, objects, etc.)
class Stack<T> {
  private items: T[] = [];

  // * Push: Add new element to stack
  push(items: T): void {
    this.items.push(items);
  }

  // * Pop: Remove and return last element
  // ! Alert: Could return undefined if stack is empty
  pop(): T | undefined {
    return this.items.pop();
  }

  // * Get entire stack
  getStack(): T[] {
    return this.items;
  }
}

// * Highlight: Stack Example with Numbers
const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack.getStack()); // [10, 20, 30]

numberStack.pop(); // removes last item (30)

console.log(numberStack.getStack()); // [10, 20]

// * Highlight: Stack Example with Strings
const stringStack = new Stack<string>();

stringStack.push("val1");
stringStack.push("val2");
stringStack.push("val3");

console.log(stringStack.getStack()); // ["val1", "val2", "val3"]

stringStack.pop(); // removes "val3"

console.log(stringStack.getStack()); // ["val1", "val2"]

// TODO: Add a Stack example for custom objects (e.g. User type) to show real-world use.
