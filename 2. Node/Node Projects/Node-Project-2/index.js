/* Project 2: Hello World
Goal: Create a simple Node.js script that outputs "Hello, world!" to the console.

1. Create a new directory for your project and navigate to it in your terminal.
2. Initialize your project with npm init and follow the prompts to create a package.json file.
3. Install the chalk module as a dependency, which will be used to add color to the console
output.
4. Create a new file called index.js and require the chalk module at the top of the file.
5. Write a script that outputs "Hello, world!" to the console using chalk.
6. Test your script by running the following command: node index.js
7. You should see output like the following: Hello, world!
 */

// Step 1. Create a new directory for your project and navigate to it in your terminal.
/* 
PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects> mkdir Node-Project-2


    Directory: D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----          5/7/2023     20:22                Node-Project-2


PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects> cd Node-Project-2

// Step 2. Initialize your project with npm init and follow the prompts to create a package.json file.
/* 
PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node-project-2) node-project-2
version: (1.0.0)
description: My solution for Project 2
entry point: (index.js)
test command:
git repository:
keywords:
author: RC
license: (ISC)
About to write to D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\package.json:

{
  "name": "node-project-2",
  "version": "1.0.0",
  "description": "My solution for Project 2",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "RC",
  "license": "ISC"
}


Is this OK? (yes)

*/

// Step 3. Install the chalk module as a dependency, which will be used to add color to the console output.
/* PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2> npm install chalk

added 1 package, and audited 2 packages in 2s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 */

// Step 4. Create a new file called index.js and require the chalk module at the top of the file.
// Q. The touch command did not work for me in the Terminal, I just had to create a file manually
/* 
PS D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2> touch index.js
touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling
of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ touch index.js
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 */

// Step 5. Write a script that outputs "Hello, world!" to the console using chalk.
// This imports the chalk module into hte script
// import chalk from "chalk";
const chalk = require("chalk");

console.log(chalk.blue("Hello, world!"));

// Step 6. Test your script by running the following command: node index.js - This gives me an error which I can't seem to resolve.

/* let chalk = require("chalk");
            ^

Error [ERR_REQUIRE_ESM]: require() of ES Module D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\node_modules\chalk\source\index.js from D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\index.js not supported.
Instead change the require of D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\node_modules\chalk\source\index.js in D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (D:\Programming\Microsoft Visual Studio Code\BuildADev\Node\Node Projects\Node-Project-2\index.js:97:13) {
  code: 'ERR_REQUIRE_ESM'
}
 */

// Step 7. You should see output like the following: Hello, world!
