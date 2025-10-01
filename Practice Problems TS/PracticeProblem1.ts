// Todo 0: Create a TypeScript function for calculating factorial of any number.

// Recursive method
const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Iterative method (more efficient for large numbers)
const factorialIterative = (num: number): number => {
  let result: number = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(4));
console.log(factorialIterative(5));

// Todo 1: Define a function that accepts a user object and returns a formatted string.

interface UserData {
  name: string;
  age: number;
  email: string;
}

const FormatUserInfo = (user: UserData): string => {
  return `User: ${user.name} age of ${user.age} yrs and can be contacted via this email: ${user.email}`;
};

console.log(
  FormatUserInfo({ name: "Umar", age: 18, email: "umar123@gmail.com" })
);

// Todo 2: Write a TypeScript function that calculate total price of an array of products object.
// ! Each product has a price and quantity

interface Product {
  price: number;
  quantity: number;
}

function calculateTotal(products: Product[]): number {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}

const cart: Product[] = [
  { price: 100, quantity: 5 },
  { price: 400, quantity: 2 },
];

console.log(calculateTotal(cart));

/* 
    Todo 3: Define a union type for a vehicle that can be either be a car or a bike with different properties.
    Todo 3: Write a function to log details based on vehicle type.
*/

type carData = {
  type: "car";
  company: string;
  model: string;
  year: number;
};

type bikeData = {
  type: "bike";
  company: string;
  cc: number;
  year: number;
};

type vehicleData = bikeData | carData;

function getVehicleDetails(vehicle: vehicleData): void {
  if (vehicle.type === "car") {
    console.log(
      `Car Info: ${vehicle.company} its model is ${vehicle.model} and is of year ${vehicle.year}`
    );
  } else if (vehicle.type === "bike") {
    console.log(
      `Bike Info: ${vehicle.company} it is of ${vehicle.cc}cc and is of year ${vehicle.year}`
    );
  }
}

const myPersonalCar: vehicleData = {
  type: "car",
  company: "BMW",
  model: "i7",
  year: 2025,
};

getVehicleDetails(myPersonalCar);
