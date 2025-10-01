// * Highlight: keyof Operator
// * Important: The "keyof" operator in TypeScript creates a union of all property keys of a type or interface
// * Example: For an interface { name: string; age: number }, "keyof" produces "name" | "age"

// * Highlight: Defining an interface "NewUser"
interface NewUser {
  name: string; // * Important: Property of type string
  age: number; // * Important: Property of type number
  email: string; // * Important: Property of type string
}

// * Highlight: Using keyof operator
// * Important: keyof NewUser gives us a union type of all keys → "name" | "age" | "email"
// * Benefit: Helps us restrict variables or parameters to only valid property names
type PersonKeys = keyof NewUser;

// * Highlight: Declaring a variable of type PersonKeys
let key: PersonKeys = "name";
// * Important: "key" can only take values "name", "age", or "email"
// ! Alert: If you try key = "username", TypeScript will throw an error (not part of NewUser)

// * Highlight: Generic function using keyof for type-safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example usage:
const user: NewUser = { name: "John", age: 30, email: "john@example.com" };
const userName = getProperty(user, "name"); // Returns string
const userAge = getProperty(user, "age");   // Returns number
console.log(`Name: ${userName}, Age: ${userAge}`);


// ? Question: Should we combine keyof with "typeof" to reflect keys of actual objects at runtime?
