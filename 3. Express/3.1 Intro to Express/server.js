const express = require("express");
const app = express();
const port = 5000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log("The server is listening on port: ${port}");
});
