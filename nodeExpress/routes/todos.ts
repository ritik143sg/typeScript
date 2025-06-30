import { Router } from "express";

import { Todo } from "../models/todo";

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res) => {
  res.status(201).json({ msg: "All todos", todos: todos });
});

router.post("/todo", (req, res) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ msg: "Todo added", todo: newTodo });
});

router.delete("/deleteTodo/:id", (req, res) => {
  const id: string = req.params.id;
  let flag = 0;

  todos = todos.filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      flag = 1;
    }
  });
  if (flag === 0) {
    res.status(201).json({ msg: "Todo not found" });
  }

  res.status(201).json({ msg: "Todo deleted" });
});

router.patch("/updateTodo/:id", (req, res) => {
  const id: string = req.params.id;
  let flag = 0;

  todos = todos.filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      flag = 1;
      todo.text = req.body.text;
      return todo;
    }
  });
  if (flag === 0) {
    res.status(201).json({ msg: "Todo not found" });
  }

  res.status(201).json({ msg: "Todo Edited", todos: todos });
});

export default router;
