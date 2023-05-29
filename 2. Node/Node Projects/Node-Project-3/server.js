/* Project 3: Simple Client-Server Interaction
*/

/* 
Step 1: Create a server in Node.js that listens on port 3000 and responds with a JSON object containing a message like "Hello, World!" when it receives a GET request to the path "/hello". 
 */

// **Copied a lot of this from other sources**

// This imports the module
const http = require("node:http");

const server = http.createServer((req, res) => {
    // Check if the request method is GET and the request URL is /hello
    if (req.url === "/hello" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        // Send the response as a JSON string
        res.end(JSON.stringify({ message: "Hello, World!" }));
    } else {
        // If the request is not valid, return a 404 response
        res.writeHead(404);
        res.end();
    }
});
// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log("Server listening on Port 3000");
});


/* 
Step 3: Run the server and client and verify that the client receives the expected response from the
server.
*/