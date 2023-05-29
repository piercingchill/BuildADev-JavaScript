/* 
Create a post request
Create a delete request 
The server should respond for both 
*/

// Import the necessary modules
const http = require("node:http");

// Make a POST request to a specified URL
const options = {
  hostname: "localhost",
  port: 4000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },