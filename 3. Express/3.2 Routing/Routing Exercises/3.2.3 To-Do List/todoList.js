/*
Todo List:
• Create an Express application with a todo list functionality.
• Define routes to display the list of to-dos ("/todos"), add a new todo
("/todos/new"), and delete a todo ("/todos/:id/delete").
• Implement the logic to store and manage todos using an array or a database
(e.g., MongoDB).
• Start the server and test the todo list functionality in a web browser.
 */

const express = require("express");
const http = require("http");
const app = express();
const port = 3131;

let todos = ["item1", "item2", "item3"];

app.get("/todos", (req, res) => {
  // To display the To-do's
  res.json(todos);
});

// For adding a new To-do
app.post("/todos/new", (req, res) => {
  /* // const { todos } = req.body; This is called destructuring
  const x = {x,y,z}
  x: x
  y: y
  z:z */
  const todo = req.body.todo;
  if (todo) {
    todos.push(todo);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});
// Compete the one for deleting items based on the index
app.delete("/todos/delete/:item", (req, res) => {
  const item = req.params.item;
  const index = todos.indexOf(item);
  if (index !== -1) {
    todos.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

// Complete one for delete all
app.delete("/todos/delete/all", (req, res) => {
  todos = [];
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log("The server is running on Port 3131");
});
