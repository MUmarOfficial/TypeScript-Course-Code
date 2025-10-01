/*

    * Decorators are a special kind of declaration in TypeScript.
    * They can be attached to classes, methods, properties, or parameters
    * to modify or extend their behavior without changing the core logic.

    * They provide "meta-programming" — adding extra behavior by annotating code.
    * Widely used in frameworks (e.g., Angular, NestJS) for dependency injection, logging, validation.

    Types of Decorators:
    1) Class decorators        → applied to entire classes
    2) Method decorators       → applied to class methods
    3) Accessor & Property     → applied to getters, setters, or properties
    4) Parameter decorators    → applied to parameters inside methods

    * Note: You must enable `"experimentalDecorators": true` in tsconfig.json to use them.
*/

// * Highlight: Class Decorator
// * A decorator that attaches behavior to a class definition.
function Logger(Constructor1: Function) {
  console.log(`Logging creation of class: ${Constructor1.name}`);
}

// * Attaching the decorator to the class
@Logger
class People {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new People("Nothing");
console.log(p.name);

// * Directly calling decorator function (without @ syntax).
Logger(function Nothing() {
  return "Nothing";
});

// * Highlight: Method Decorator
// * Modifies or replaces a method at runtime.
function LogMethod(
  target: Object, // The prototype of the class
  propertyKey: string, // The name of the method
  descriptor: PropertyDescriptor // Controls method’s behavior
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...arg: any[]) {
    console.log(`method called: ${propertyKey}`);
    return originalMethod.apply(this, arg);
  };

  console.log(target); // * Logs prototype of the class
}

class CalcOp {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const c12 = new CalcOp();
c12.add(2, 3); // Logs "method called: add"

// * Highlight: Accessor & Property Decorators
// * Can be used to lock down or customize property behavior.
function Readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false, // prevents reassignment
  });
}

class Kawasaki {
  @Readonly
  model: string = "Ninja H2r";
}

const kawasakiBikes = new Kawasaki();
console.log(kawasakiBikes.model);
// ! Alert: kawasakiBikes.model = "ZX-10R"; ❌ will throw error in strict mode

// * Highlight: Parameter Decorator
// * Used to inspect or modify parameters of a method.
function LogParameters(
  target: Object, // class prototype
  propertyKey: string, // method name
  parameterIndex: number // position of parameter in method
) {
  console.log(target);
  console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`);
}

class UserParams {
  createUser(@LogParameters name: string, @LogParameters age: number) {
    console.log(`User: ${name}, Age: ${age}`);
  }
}

const userParams = new UserParams();
userParams.createUser("umar", 18);

// TODO: Add an example of a decorator factory (decorator that accepts arguments).
// ? Should we combine multiple decorators on a single class/method to show decorator stacking?
// ! Alert: Decorators execute when the class is DEFINED, not when it is instantiated.
