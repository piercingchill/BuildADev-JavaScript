const express = require("express");
const http = require("http");
const { json } = require("stream/consumers");

const app = express();
const port = 3100;

// Define the route to fetch data from the API
app.get("/api/data", (req, res) => {
  const options = {
    hostname: "rickandmortyapi.com",
    path: "api/character/108",
    method: "GET",
  };
  const request = http.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      res.json(JSON.parse(data));
    });
    response.on("error", (error) => {
      console.error("error", error.message);
    });
    request.end();
  });
});
app.listen(port, () => {
  console.log("The server is running on Port 3100");
});
