// * Class Example
class Student {
  name: string;
  age: number;
  section: string;
  roll: number;

  // * Constructor
  // - Special method to initialize object properties
  constructor(name: string, age: number, section: string, roll: number) {
    this.name = name;
    this.age = age;
    this.section = section;
    this.roll = roll;
  }

  // * Method
  IntroduceYourself(): string {
    return `Hello My name is ${this.name}, I'm ${this.age} years old, I'm from ${this.section} and my roll number is ${this.roll}.`;
  }
}

const new_student0 = new Student("Umar", 18, "PICSB-1", 119);
console.log(new_student0.IntroduceYourself());

/*
 * Access Modifiers
 * ----------------
 * public    → Accessible everywhere (default if not specified).
 * private   → Accessible only inside the class itself.
 * protected → Accessible inside the class + its subclasses.
 */

class PersonalCar {
  public company: string; // * Anyone can access
  public model: string;
  private color: string; // * Hidden → cannot access outside
  protected year: number; // * Accessible in subclass but not outside

  constructor(company: string, model: string, color: string, year: number) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  public getModel(): string {
    return `The Car model is ${this.model}.`;
  }
}

const myCar = new PersonalCar("Audi", "r8", "Black", 2025);
console.log(myCar.getModel());
// console.log(myCar.color); ❌ Error: private property
// console.log(myCar.year); ❌ Error: protected property

// * Inheritance
// - Classes can extend other classes and reuse/override behavior.
class Animal {
  constructor(public name: string, protected eats: boolean) {
    this.name = name;
    this.eats = eats;
  }

  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name: string, eats: boolean, public type: string) {
    super(name, eats); // * Call parent constructor
  }

  // * Method Overriding
  makeSound(): void {
    console.log("Woo Woo Woo W");
  }
}

const dog = new Dog("Puppy", true, "German sheafed");
console.log(dog.name); // ✅ public property → accessible
dog.makeSound();

// * Abstract Classes
// - Cannot be instantiated directly.
// - Used as "blueprints" → child classes must implement abstract methods.
abstract class Shape {
  abstract getArea(): number; // * Must be implemented by subclasses

  printArea(): void {
    console.log(`The area is: ${this.getArea()}. `);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(2, 4);
rect.printArea(); // ✅ "The area is: 8"

// * Getters and Setters
// - Allow controlled access to private properties.
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // * Getter → acts like a property
  get radius(): number {
    return this._radius;
  }

  // * Setter → validates before updating
  set radius(value: number) {
    if (value <= 0) {
      throw new Error("Radius must be positive and non-zero.");
    }
    this._radius = value;
  }
}

const circle = new Circle(10);
console.log(circle.radius); // ✅ 10 (calls getter)
circle.radius = 12; // ✅ updates via setter
console.log(circle.radius); // ✅ 12
// circle.radius = -5; ❌ Error: invalid assignment
