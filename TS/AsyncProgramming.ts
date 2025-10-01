// * Highlight: Synchronous Programming
// * Code executes line by line, in order.
// * Each task must finish before the next one starts.
function task1() {
  console.log("Task 1");
}

function task2() {
  console.log("Task 2");
}

task1();
task2(); // * Executes immediately after task1

// * Highlight: Asynchronous Programming
// * Non-blocking → tasks can be delayed and executed later (via event loop).
// * Example: setTimeout schedules code for later execution.
function task12() {
  setTimeout(() => {
    console.log("Task 12");
  }, 1000); // delayed by 1 second
}

function task22() {
  console.log("Task 22");
}

task12(); // * Runs async, scheduled for later
task22(); // * Runs immediately (before task12 logs)

// * Highlight: Promises
// * A Promise represents a value that may be available now, in the future, or never.
// * States: pending → fulfilled (resolved) or rejected.
type response = "success" | "failure";

// * fetchData simulates async operation (like API call).
const fetchData = (response: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (response === "success") {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000); // resolves after 2 sec
    } else {
      reject(new Error("Failed to fetch data."));
    }
  });
};

// * Using .then and .catch with Promise
fetchData("success")
  .then((data) => {
    console.log(`Success: ${data}`);
    // * Returning another value → demonstrates promise chaining
    return "more data for chaining concept.";
  })
  .then((moreData) => {
    console.log(moreData);
  })
  .catch((data) => {
    console.log(`Failure: ${data}`);
  });

fetchData("failure")
  .then((data) => {
    console.log(`Success: ${data}`);
  })
  .catch((data) => {
    console.log(`Failure: ${data}`);
  });

// * Highlight: Async / Await
// * Cleaner syntax for working with Promises.
// * Async function automatically returns a Promise.
async function fetchNewData(): Promise<string> {
  return "Only a example text";
}

// * Still possible to use .then/.catch
fetchNewData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// * Await pauses execution until Promise resolves/rejects
async function getData(): Promise<void> {
  try {
    const data = await fetchNewData();
    const data1 = await fetchNewData();
    console.log(data);
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
}

// * Highlight: Working with API using fetch
// * fetch() returns a Promise that resolves to a Response object.
interface Posts {
  userId: string;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(): Promise<Posts[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseJson = await response.json();
    return responseJson;
  } catch (error: any) {
    throw new Error(error);
  }
}

fetchPost()
  .then((data) => {
    console.log(data); // * Array of posts
  })
  .catch((error) => {
    console.log(error);
  });

// * Highlight: Concurrent Promises with Promise.all
// * Runs multiple async tasks in parallel.
// * Promise.all resolves when ALL promises are fulfilled, rejects if ANY fails.
async function tsk1(): Promise<string> {
  console.log("task 1");
  return "task 1";
}

async function tsk2(): Promise<string> {
  console.log("task 2");
  return "task 2";
}

async function fetchData2(): Promise<[string, string]> {
  const [data1, data2] = await Promise.all([tsk1(), tsk2()]);
  return [data1, data2];
}

// TODO: Add example with Promise.race() (resolves/rejects with first settled promise).
// TODO: Add error handling demo for Promise.all (when one fails).
// ! Alert: Avoid unhandled promises — always use .catch or try/catch.
// ? Should we demonstrate finally() with promises for cleanup tasks?
