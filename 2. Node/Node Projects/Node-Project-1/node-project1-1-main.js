/* Project 1: Random Quote Generator:
In this project, you will create a command-line tool that generates a random quote from a collection of quotes. You will use Node.js modules to organize your code and the random-item npm package to generate a random quote.
*/

//Step 1. Create a new Node.js project using npm init and set up a main.js file. --- Done
//Step 2. Install the random-item npm package using npm install random-item. --- Done

//Step 3. Create a new file called quotes.js. In this file, define an array of quotes. Each quote should be a string that includes the quote text and the name of the person who said it. --- Done

// Step 4. In main.js, use require to import the random-item module and the quotes module that you created in step 3. --- Done

const randomItem = require("random-item");
const quotes = require("./node-project1-2-quotes");

// Step 5. Define a function called getRandomQuote that uses the random-item module to select a random quote from the quotes array.

function getRandomQuote() {
  return randomItem(quotes);
}

// Step 5.2 Export the getRandomQuote function using module.exports. --- Done
module.exports = {
  getRandomQuote,
};

// Step 6. In main.js, call the getRandomQuote function and log the result to the console. --- Done

console.log(getRandomQuote());

// Step 7. Test your program by running node main.js multiple times and verifying that it generates a random quote each time.

// Getting this error

/* Node.js v20.0.0
PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects> node main.js
Debugger attached.
Waiting for the debugger to disconnect...
D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\main.js:12
const randomItem = require("./node_modules/random-item");
                   ^

Error [ERR_REQUIRE_ESM]: require() of ES Module D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\node_modules\random-item\index.js from D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\main.js not supported.
Instead change the require of index.js in D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\main.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\main.js:12:20) {
  code: 'ERR_REQUIRE_ESM'
} */
