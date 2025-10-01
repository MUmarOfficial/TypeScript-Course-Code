let a = 5;
a = "hello";

function add_J(a, b) {
  return a + b; //No type checking
}

function subtract_J(a, b) {
  return a - b; //No type checking
}

console.log(add_J(5, 10)); // This will work fine
console.log(subtract_J(5, 10)); // This will work fine
