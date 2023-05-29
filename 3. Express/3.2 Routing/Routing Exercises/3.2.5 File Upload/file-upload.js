/* 
File Upload:
• Create an Express application with a form to upload files.
• Define a route ("/upload") that handles the file upload and saves the uploaded
file to a specific directory.
• Implement file validation and handle any errors that may occur during the upload
process.
• Start the server and test the file upload functionality by submitting a file through
the form. 
*/
const express = require("express");
const http = require("http");
const fs = require("fs");

const app = express();
const port = 3120;

// Set up the necessary middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Define a route to render the upload form
app.get("/", (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <input type="submit" value="Upload" />
    </form>
  `);
});

// Define a route to handle the file upload
app.post("/upload", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No file uploaded.");
  }

  const file = req.files.file;

  // Perform file validation here if needed

  const uploadPath = `uploads/${file.name}`;

  // Move the file to the specified path
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.send("File uploaded successfully.");
  });
});

// Start the server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
