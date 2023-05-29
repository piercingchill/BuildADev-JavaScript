// Step 1: Import the required modules
const http = require("node:http"); // Import the 'http' module.
const fs = require("node:fs"); // Import the 'fs' module.

// Step 2: Create an HTTP server
const server = http.createServer((req, res) => {
  // Step 3: Set the Status Code to 200 and other headers
  res.writeHead(200, { "random header ": "random header type" });
  // Step 4: Create a stream to read the contents of the readme.md file
  const streamReader = fs.createReadStream("./readme.md");

  // Step 5: Set up the event listeners for the `data` event
  streamReader.on("data", (chunk) => {
    res.write(chunk);
  });
  // Step 6: Set up the event listeners for the `end` event
  streamReader.on("end", () => {
    res.end();
  });

  // Step 7: In case of an error, log the response to the console
  streamReader.on("error", (err) => {
    console.log(err);
    res.end();
  });
});

// Step 8: Start the server to listen on the port 10000
server.listen(10000, () => {
  console.log("port 10000");
});
