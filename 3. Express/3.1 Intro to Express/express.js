const express = require("express");
const app = express();

app.app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

const port = 3000;
app.listen(port, () => {
  console.console.log("The server is running on Port: $(port)");
});
