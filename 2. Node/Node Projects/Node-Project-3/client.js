/* 
Step 2: Create a client in Node.js that sends a GET request to the server at "http://localhost:3000/hello" and logs the response to the console.
 */

// Copied a lot of this too.

const http = require("node:http");

http.get("http://localhost:3000/hello", (res) => {
    // Created the variable to store the data
    let data = "";
    // Listen for the 'data' event, which is emitted when a chunk of data is received
    res.on("data", (chunk) => {
        // Append the data chunk to the data variable
        data += chunk;
    });
    // Listen for the 'end' event, which is emitted when all data has been received
    res.on("end", () => {
        // Parse the response data as a JSON object and log it to the console
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    // If an error occurs, log it to the console
    console.error(err);
});
