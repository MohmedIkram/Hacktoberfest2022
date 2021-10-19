const express = require("express");

const app = express();

const tasks = [];

app.get("/get", (req, res) => {
  return res.status(200).send({ tasks });
});

app.post("/create", (req, res) => {
  const { name, status } = req.body;
  const task = { name, status };
  tasks.push(task);
  return res.status(201).send(task);
});

app.patch("/update", (req, res) => {
  const { name, status } = req.body;
  const findTaskIndex = tasks.findIndex((task) => task.name === name);
  tasks[findTaskIndex] = { name, status };
  return res.status(200).send({ task: tasks[findTaskIndex] });
});
app.delete("/delete", (req, res) => {
  const { name } = req.body;
  const findTaskIndex = tasks.findIndex((task) => task.name === name);
  tasks.splice(findTaskIndex, 1);
  return res.status(200).send({ deletedTask: tasks[findTaskIndex] });
});

app.listen(5000, () => {
  console.log("App run on port 5000");
});
