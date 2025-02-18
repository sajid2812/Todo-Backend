const express = require("express");
const app = express();

const todos = [];

// create
app.post("/", (req, res) => {
  todos.push({
    id: todos.length + 1,
    title: req.body.title,
  });
  res.status(200).json({ message: "Todo added successfully." });
});

// read
app.get("/:id", (req, res) => {
  const todo = todos.find((todo) => {
    return todo.id === req.params.id;
  });
  return res.status(200).json(todo);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
