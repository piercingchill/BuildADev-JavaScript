// Routing Exercise 1 - Hello World

// Step 1: Create a basic Express application.
// Basically copied form the Express docs
const express = require("express");
const http = require("http");
const app = express();
const port = 3500;

// Step 2: Define a route for the root URL ("/") that sends the message "Hello, World!" as the response.
app.get("/", (req, res) => {
  const options = {
    hostname: "localhost",
  };
  res.send("Hello, World!");
});
// Step 3: Start the server and test the route in a web browser.
app.listen(port, () => {
  console.log("Server is running on port 3500");
});
