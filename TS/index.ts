console.log("Script started");
let a1: number = 5;
a1 = 10;

function add_T(a: number, b: number): number {
  return a + b; //type checking
}

const result = add_T(5, 10); // This will work fine
console.log(result); // Output: 15
