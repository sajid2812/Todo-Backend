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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
