// * Highlight: Different ways to import in TypeScript (ES Modules)
// * Each style of import serves a different purpose (namespace import, named import, default import).

// * Important: Import everything from Utils.ts into a namespace called "Utils".
// * Now all exported members must be accessed as Utils.something.
import * as Utils from "./Utils.ts";

// * Important: Import a specific named export directly (Calculator class).
// * Cleaner when you only need one or two things from a module.
import { Calculator } from "./Utils.ts";

// ! Deprecated: Old way (commented for demonstration).
// * This uses aliasing if you want to rename imports to avoid naming conflicts.
// import { Calculator as Calc } from "./Utils.ts"; // aliasing import

// * Highlight: Import the default export from Utils.ts
// * Only one default export can exist per file.
import log from "./Utils.ts";

// * Highlight: Using namespace import
console.log(Utils.getRemainder(2, 2)); // calls Utils function getRemainder
console.log(Utils.PI); // accessing exported constant

// * Highlight: Using named import (Calculator)
const calculator = new Calculator();

// * Example usage of Calculator methods
console.log(calculator.add(2, 2)); // 4
console.log(calculator.subtract(2, 2)); // 0
console.log(calculator.multiply(2, 2)); // 4
console.log(calculator.divide(4, 2)); // 2

// * Highlight: Using default import
// * Here "log" is the default exported function from Utils.ts
log("default Message");

// ? Question: Should we keep both namespace + named imports or stick to one style for clarity?
// TODO: Consider refactoring Utils.ts to separate constants, functions, and classes into different files for cleaner imports.
// ! Alert: Be careful with circular imports → If Utils.ts also imports from this file, it may cause runtime errors.
