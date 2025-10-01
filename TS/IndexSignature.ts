// * Highlight: Index Signature
// * Important: Index signatures allow us to describe types of objects
//              whose property names (keys) are not known in advance.
// * Use Case: Useful for arrays, dictionaries, or objects with dynamic keys.

// * Highlight: Interface with numeric index signature
interface StringArray {
  [index: number]: string;
  // * Important: This means any numeric index will return a string
  // * Example: strArr[0], strArr[1], ... must all be strings
}

// * Highlight: Using StringArray
let strArr: StringArray = ["Code", "with", "me"];
// * Important: This works because arrays in JavaScript are just objects
//              with numeric keys internally (0, 1, 2...).
console.log(strArr[0]);
// Output: "Code"

// * Highlight: Interface with string index signature
interface Fruit {
  [key: string]: string;
  // * Important: This means any string key will map to a string value
  // * Example: fruit["apple"], fruit["banana"], etc.
}

// * Highlight: Using Fruit
let frtArr: Fruit = {
  apple: "A red fruit",
  banana: "A yellow fruit",
};
// * Important: You can now add as many properties as you want with string keys
console.log(frtArr["apple"]);
// Output: "A red fruit"

// TODO: Add stricter types using unions → e.g. { [key in "apple" | "banana"]: string }
// ! Alert: Overusing string index signatures makes all properties flexible
//          (can reduce type safety if not restricted)
// ? Question: Should we enforce known keys (like "apple" | "banana")
//             or keep it fully dynamic?
