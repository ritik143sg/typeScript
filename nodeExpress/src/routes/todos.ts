import { Router } from "express";

import { Todo } from "../models/todo";

let todos: Todo[] = [];
type requestBody = {
  text: string;
};

type requestParams = {
  id: string;
};

const router = Router();

router.get("/", (req, res) => {
  res.status(201).json({ msg: "All todos", todos: todos });
});

router.post("/todo", (req, res) => {
  const body = req.body as requestBody;

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ msg: "Todo added", todo: newTodo });
});

router.delete("/deleteTodo/:id", (req, res) => {
  const params = req.params as requestParams;
  const id: string = params.id;
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
  const params = req.params as requestParams;
  const body = req.body as requestBody;
  const id: string = params.id;
  let flag = 0;

  todos = todos.filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      flag = 1;
      todo.text = body.text;
      return todo;
    }
  });
  if (flag === 0) {
    res.status(201).json({ msg: "Todo not found" });
  }

  res.status(201).json({ msg: "Todo Edited", todos: todos });
});

export default router;
