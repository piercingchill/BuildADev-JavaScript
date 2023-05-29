// Step 1: Import the required modules
const http = require("node:http"); // Import the 'http' module

// Step 2: Using hte `http` module create a GET request to a URL
const options = {
  hostname: "localhost",
  port: 10000,
  path: "/",
  method: "GET",
};

// Step 3: Create a HTTP request for the response
const req = http.request(options, (res) => {
  // Step 4: Set the encoding to UTF-8
  res.setEncoding("utf8");

  // Step 4: Set up event listeners for the `data` event
  res.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
    // Do something with the received chunk of data
  });

  // Step 5: Set up event listeners for the `end` event
  res.on("end", () => {
    console.log("Response complete");
    // Step : When the response is complete,log it to the console
    // Do something when the response is complete
  });

  // Step 6: Listen for the error event to handle any errors
  res.on("error", (err) => {
    // Step : 7Log a message to the console in case of an error
    console.error("An error occurred:", err);
    // Handle any errors that occur during the request
  });
});
// Step 8: End the HTTP request
req.end();
