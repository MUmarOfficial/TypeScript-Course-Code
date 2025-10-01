import * as readline from "readline"; // (We are importing the 'readline' library, which helps in taking input from the user and showing output to them.)

const rl = readline.createInterface({
  //(We are creating a special object (rl) that will interact with the user.)
  input: process.stdin, // (Telling this object where to take input from – our keyboard (standard input).)
  output: process.stdout, // (And where to show the output – on our screen (standard output).)
});

function getRandomInt(min: number, max: number): number {
  // (This is a function that generates a random number, between the min and max limits.)
  min = Math.ceil(min); // (Rounding up the minimum number, so there are no issues with decimal values.)
  max = Math.floor(max); // (Rounding down the maximum number.)
  return Math.floor(Math.random() * (max - min + 1)) + min; // (The actual random number is made here. Math.random() gives a number between 0 and 1, then we adjust it for our range.)
}

async function askQuestion(query: string): Promise<string> {
  // (This is an 'async' function that asks the user a question (query) and waits for their answer.)
  return new Promise((resolve) => rl.question(query, resolve)); // (It creates a Promise, which will 'resolve' when the user gives an answer.)
}

async function main() {
  // (This is the main function of our game, all the work starts from here.)
  const randomNumber = getRandomInt(1, 100); // (The computer thinks of a secret random number between 1 and 100.)
  let no_of_guesses = 0; // (This will keep count of how many times you've guessed. Starting at 0.)
  let guessed_number: number | null = null; // (The number you will guess, currently nothing (null).)

  do {
    // (This is a "do...while" loop. It means the code inside will run at least once.)
    const answer = await askQuestion("Guess the number(b/w 1 - 100): "); // (We ask the user to guess the number and wait for their answer.)
    guessed_number = parseInt(answer, 10); // (We convert the user's answer (which is string) into a number.)

    if (isNaN(guessed_number)) {
      // (If the user typed something other than a number (like "hello"), this will check it.)
      console.log("Please enter a valid number!"); // (We tell the user to enter a valid number.)
      continue; // (Skip the current loop iteration and go to the next one.)
    }

    if (guessed_number > randomNumber) {
      //  (If your guess is greater than the computer's secret number...)
      console.log("Lower number please!"); // (Then the computer will say "tell a lower number".)
    } else if (guessed_number < randomNumber) {
      // (If your guess is smaller than the computer's secret number...)
      console.log("Higher number please!"); // (Then the computer will say "tell a higher number".)
    } else {
      // (If it's neither greater nor smaller, it means your guess is correct!)
      console.log("Congrats!!"); //  (It will tell you "Congrats!!".)
    }
    no_of_guesses++; // (Every time you guess, this counter increases by one.)
  } while (guessed_number !== randomNumber); // (This loop will keep running until your guessed_number is equal to the computer's randomNumber.)

  console.log(`You guessed the number in ${no_of_guesses} guesses`); // (When the game ends, it will tell you in how many guesses you won.)
  rl.close(); // (We close the interface that talks to the user.)
}

main(); // (We call the 'main' function to start our game.)
