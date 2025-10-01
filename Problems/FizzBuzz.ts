let i: number = 1;

while (i <= 100) {
  // Most specific case first: divisible by both 3 and 5 (or 15)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Next, check for divisibility by only 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Then, check for divisibility by only 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Finally, print the number if none of the above are true
  else {
    console.log(i);
  }

  i++;
}
