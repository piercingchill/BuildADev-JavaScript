// Exercise 1: Creating a Simple Client

// Step 1: Import the necessary modules.
const http = require("node:http");

// Step 2: Define the URL of the server you want to send a GET request to.
const url = "http://localhost:7000";

// Step 3: Use the http module to create a GET request to the specified URL.
http
  .get(url, (res) => {
    // Step 4: Set up event listeners for the response event and the data event.
    let data = "My Data";
    let space = " ";
    data += space;
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      // Step 6: When the response ends, log the complete response to the console.
      console.log(data);
    });
  })
  .on("error", (err) => {
    // If an error occurs while sending the request, log the error message to the console.
    console.log(err.message);
  });
