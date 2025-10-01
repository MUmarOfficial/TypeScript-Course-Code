/*

    * Literal Types
    * Important: Instead of allowing a variable to take ANY string/number/boolean,
    *            you restrict it to a fixed set of values.
    * Highlight: Great for safety → prevents typos, acts like enums but simpler.
    * Use Case: Perfect for statuses, flags, configuration values, etc.

*/

// * Highlight: String Literal Type
type OrderStatus = "delivered" | "pending" | "canceled";
// * Important: OrderStatus can ONLY be one of these exact three strings

let pizzaOrder: OrderStatus = "pending"; // ✅ valid

if (pizzaOrder === "pending") {
  console.log("Your pizza is on the way.");
} else if (pizzaOrder === "delivered") {
  console.log("Your pizza is delivered.");
} else if (pizzaOrder === "canceled") {
  console.log("You canceled your order.");
}

// ! Alert: If you try pizzaOrder = "in-progress"; TS will throw an error
//          because it's not part of the literal union

// * Highlight: Another string literal example
let answer: "yes" | "no";
answer = "yes"; // ✅ valid
// answer = "maybe"; ❌ invalid → "maybe" not part of the union

// * Highlight: Number Literal Type
let count: 0 | 1 | 2;
// * Important: "count" can ONLY be 0, 1, or 2
count = 2; // ✅ valid
// count = 3; ❌ invalid

// * Highlight: Boolean Literal Type
let isVisible: true | false;
// * Note: Same as boolean, but enforced as strictly true or strictly false
// * Use Case: More useful when combined with unions like (true | "auto")
isVisible = true;

// * Highlight: Mixed Literal Type
type LiteralMixedType = "value" | 2 | true | number[] | { name: string };
// * Important: This union mixes string, number, boolean, array, and object
let mixed: LiteralMixedType = { name: "Umar" }; // ✅ valid example

// * Highlight: Literal Union as function parameter
type Action = "add" | "update" | "delete";

// * Important: Restricts allowed function inputs to ONLY these strings
function takeActions(action: Action) {
  switch (action) {
    case "add":
      console.log("Add function");
      break;
    case "update":
      console.log("Update function");
      break;
    case "delete":
      console.log("Delete function");
      break;
    // * Highlight: No default needed because TS guarantees only 3 options exist
  }
}

// * Highlight: Literal Types inside Interfaces
interface Garments {
  size: "S" | "M" | "L" | "XL"; // restricts sizes to fixed set
  color: "black" | "blue" | "gray"; // restricts colors to fixed set
}

// * Highlight: Example usage
let shirt: Garments = {
  size: "M",
  color: "blue",
};
// shirt.size = "XXL"; ❌ error → not in union

// * Highlight: Combining literal types with template literals
type Status = "success" | "error";
type StatusCode = `${Status}-${number}`; // combines status with any number

// * Example usage
let responseStatus: StatusCode = "success-200"; // ✅ valid
let errorStatus: StatusCode = "error-404";     // ✅ valid
// let invalidStatus: StatusCode = "pending-200"; // ❌ invalid - 'pending' not in Status

// ? Question: Should we replace these literal unions with an enum if the list grows too large?
// ! Alert: Literal types work best for small, fixed sets → enums or const objects are better for large sets
