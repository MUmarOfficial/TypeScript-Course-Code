// Non null assertions
// * Important: In TypeScript, "non-null assertions" allow you to tell the compiler
// * that a value will definitely be assigned before it is used, even if it looks undefined.

/**
 * * Class: Teacher
 * * A class is a blueprint for creating objects with properties and methods.
 * * Here, Teacher has properties (name, age, phone) and a method (teaches).
 */
class Teacher {
  // * Property: name
  // * Highlight: A string property to hold the teacher's name
  name: string;

  // * Property: age
  // * Highlight: A number property to hold the teacher's age
  age: number;

  // * Property: phone
  // * Important: "phone!: number" uses the "definite assignment assertion operator (!)"
  // * This tells TypeScript that even though "phone" is not initialized in the constructor,
  // * it WILL definitely be assigned before being used.
  // ! Alert: If you forget to assign "phone", this will cause a runtime error.
  phone!: number; // phone: number | undefined; (Alternative way: explicitly allow undefined)

  /**
   * * Constructor
   * * Special method used for object creation
   * @param name - Teacher's name
   * @param age - Teacher's age
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // * Method: teaches
  // * Highlight: Demonstrates class methods
  // * This method logs a message to the console
  teaches(): void {
    console.log("Teacher teaches students.");
  }
}

// * Object Creation
// * Highlight: Creating an instance of Teacher using "new"
// * This calls the constructor with arguments ("Farhan", 32)
const computerTeacher = new Teacher("Farhan", 32);

// * Method Call
// * Calling the "teaches()" method on the computerTeacher instance
computerTeacher.teaches();

// * Assigning phone later
// * Because we used "!" on phone, we can assign it after object creation
computerTeacher.phone = 987737282;

// ? Alternative logging
// console.log(computerTeacher!.phone)   // * Non-null assertion operator (!) at usage level
// console.log(computerTeacher.phone?.phone) // ? Optional chaining: checks if "phone" is defined before accessing nested "phone"

// * Final Log
// * This prints the assigned phone number
console.log(computerTeacher.phone);
