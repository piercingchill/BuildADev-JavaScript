// Exercise 2: Creating a Simple Server

// Step 1: Import the necessary modules.
const http = require("node:http");

// Step 2: Use the http module to create an HTTP server.
const server = http.createServer();

// Step 3: Set up event listeners for the request event.
server.on("request", (req, res) => {
  // Step 4: When a request is received, set the appropriate headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write a simple message as the response.
  res.write("Hello, World!");

  // Step 5: End the response.
  res.end();
});

server.listen(7000, () => {
  console.log("Server listening on port 7000");
});
