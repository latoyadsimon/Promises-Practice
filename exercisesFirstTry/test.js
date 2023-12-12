/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

export function onReject(error) {
    // Your code goes here...
    return console.log(`${error.message}`)
  }

export function onRejected(arg) {
   
    return arg.message ? onReject(arg) : arg;
}