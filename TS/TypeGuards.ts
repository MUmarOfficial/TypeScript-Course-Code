/*

    * Type Guard
    * Highlight: Type guards allow us to narrow down types at runtime
    * Important: They help TypeScript understand what exact type a variable is, 
    *            so we can safely access type-specific properties or methods.
    * We can use type guards through:
    * 1. typeof operator (for primitive types like string, number, boolean)
    * 2. instanceof operator (for class instances)
    * 3. custom type guard functions (using "pet is Fish" style syntax)

*/

// * Highlight: Function demonstrating typeof type guard
function printID(id: string | number) {
  // * Important: typeof checks the runtime type of a primitive
  if (typeof id === "string") {
    // * Highlight: Inside this block, TypeScript knows id is a string
    console.log(`The id is a string: ${id}`);
  } else if (typeof id === "number") {
    // * Highlight: Inside this block, TypeScript knows id is a number
    console.log(`The id is a number: ${id}`);
  }
}

// * Highlight: Class Dog1 with a bark() method
class Dog1 {
  bark(): void {
    console.log(`Woof Woof`);
  }
}

// * Highlight: Class Cat with a meow() method
class Cat {
  meow(): void {
    console.log(`meow meow`);
  }
}

// * Highlight: Function demonstrating instanceof type guard
function handlePet(pet: Dog1 | Cat) {
  // * Important: instanceof checks if the object is created from a specific class
  if (pet instanceof Dog1) {
    // * Highlight: pet is now known as Dog1
    pet.bark();
  } else {
    // * Highlight: pet is now known as Cat
    pet.meow();
  }
}

// * Highlight: Interfaces for Fish and Bird
interface Fish {
  swim(): void; // * Important: Fish type must have a swim() method
}

interface Bird {
  fly(): void; // * Important: Bird type must have a fly() method
}

// * Highlight: Custom type guard function
// * Important: "pet is Fish" tells TypeScript this function checks if pet is Fish
// ? Question: Why not just use "in" operator (like 'if ("swim" in pet)') instead of casting?
function isFish(pet: Fish | Bird): pet is Fish {
  // * Important: We use a type assertion (pet as Fish) and check if swim exists
  return (pet as Fish).swim !== undefined;
}

// * Highlight: Function that uses the custom type guard
function move(pet: Fish | Bird): void {
  if (isFish(pet)) {
    // * Highlight: Inside this block, TypeScript knows pet is a Fish
    pet.swim();
  } else {
    // * Highlight: Inside this block, TypeScript knows pet is a Bird
    pet.fly();
  }
}

// * Highlight: Example of using 'in' operator for type guarding
function moveWithInOperator(pet: Fish | Bird): void {
    if ('swim' in pet) {
        // * Highlight: TypeScript knows pet is Fish because it has 'swim' property
        pet.swim();
    } else {
        // * Highlight: TypeScript knows pet is Bird
        pet.fly();
    }
}

// ! Alert: Be careful with type assertions (pet as Fish) — misuse can cause runtime errors
//// Old approach: direct property check without type guard was unsafe
//// if ((pet as any).swim) pet.swim();  // ! Deprecated: Do not use anymore
