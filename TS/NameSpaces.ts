// * Highlight: Namespaces in TypeScript
// * A namespace is a way to logically group related code (variables, functions, classes).
// * They help organize large codebases and avoid naming collisions.
// * Everything inside a namespace is scoped, and only accessible outside if marked with "export".

namespace Geometry {
  // * Exported constant → can be accessed outside the namespace
  export const iP2: number = -1;

  // * Exported function → accessible from outside
  // * Calculates the area of a circle
  export function CalcArea(radius: number): number {
    return Math.PI * (radius * radius);
  }

  // * Exported class → accessible outside
  export class Rectangle {
    // * Calculates the area of a rectangle
    area(width: number, height: number): number {
      return width * height;
    }
  }
}

// * Accessing namespace members
// * Important: Since "iP2" was exported, it’s available as Geometry.iP2
console.log(Geometry.iP2); // -1

// Example usage of CalcArea function
console.log(Geometry.CalcArea(10)); // 314.159...

// Example usage of Rectangle class
const rect = new Geometry.Rectangle();
console.log(rect.area(5, 4)); // 20

// ! Alert: Namespaces are older TypeScript feature.
// ! Deprecated: Modern TypeScript projects often use ES Modules instead of namespaces.
// * Modules provide better tooling support, tree-shaking, and compatibility with JavaScript ecosystem.

// ? Should we migrate this namespace to a module structure with imports/exports?

// TODO: If project grows, split Geometry into separate files and export using ES modules.
