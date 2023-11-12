/**
 * VALUES AND PROMISES
 * Please, make sure to read the "05-Values-and-promises.md" file form exercise-info folder
 * @task
 * Create a function `attachTitle` which follows the requirements:
 * * prepends `'DR. '` to its first argument and returns the result.
 * Example: export const attachTitle = (arg) => {<Your_code>}
 *          export const Promise
 */

export const attachTitle = (arg) => {
  // Your code goes here...
  //   console.log(`DR. ${arg}`);
  //   console.log("this is arg: ", arg);
  return `DR. ${arg}`;
  // console.log(attachTitle("SomeName"));
};

/**
 * @task
 * Create a function that follows the requirements:
 * * Returns a fulfilled promise with a value of `'MANHATTAN'`.
 * * Build a promise chain off the promise we just constructed that first calls `attachTitle` then calls `console.log`.
 * If your program runs successfully, it should print out and return “DR. MANHATTAN” which is extremely exciting.
 */

export const getPromise = () => {
  // Your code goes here...

  const promise = new Promise((res, err) => res("MANHATTAN"));

  return promise
    .then((val) => console.log(attachTitle(val)))
    .catch((err) => console.log(err));
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
