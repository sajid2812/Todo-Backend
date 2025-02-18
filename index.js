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

// update
app.put("/", (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === req.body.id) {
      todos[i].title = req.body.title;
      break;
    }
  }
  res.status(200).json({ message: "Todo updated successfully." });
});

//delete
app.delete("/:id", (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === req.params.id) {
      index = i;
      todos.splice(i, 1);
      break;
    }
  }
  res.status(200).json({ message: "Todo deleted successfully." });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
