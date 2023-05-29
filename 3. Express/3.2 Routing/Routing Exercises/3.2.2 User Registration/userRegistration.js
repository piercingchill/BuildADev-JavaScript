/* 
User Registration:
• Create an Express application with a form to register a new user.
• Define a route for the registration form ("/register") that displays the form.
• Define a route to handle the form submission ("/register") that captures the
user's input and displays a success message.
• Start the server and test the registration form in a web browser. 
*/

const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = 3110;

let users = [];

/*Middleware
- Used before the route
- Here, it is used to convert the HTML data to JSON
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This allows us to parse this stuff into JSON and send it off

app.get("/registration", (req, res) => {
  /* res.send(`
    <h1>User Registration</h1>
    <form method="POST" action ="/register">
        <label for="name">Name:</label>
        <input type="text" id="name" name ="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="text" id="email" name ="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name ="password" required>
        <br>
        <button type ="submit">Registration</button>
    </form>
    ` */
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.post("/register, (req, res)");
const { name, email, password } = req.body; // Destructuring

const user = { name, email, password }; // Same as User = {name:name,email:email,password:password}
users.push(user);

res.send("<h1>Registration Successful!<h1>");
//});

app.listen(port, () => {
  console.log("The server is running on Port 3110");
});
