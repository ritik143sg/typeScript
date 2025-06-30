"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(201).json({ msg: "All todos", todos: todos });
});
router.post("/todo", (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ msg: "Todo added", todo: newTodo });
});
router.delete("/deleteTodo/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    let flag = 0;
    todos = todos.filter((todo) => {
        if (todo.id !== id) {
            return todo;
        }
        else {
            flag = 1;
        }
    });
    if (flag === 0) {
        res.status(201).json({ msg: "Todo not found" });
    }
    res.status(201).json({ msg: "Todo deleted" });
});
router.patch("/updateTodo/:id", (req, res) => {
    const params = req.params;
    const body = req.body;
    const id = params.id;
    let flag = 0;
    todos = todos.filter((todo) => {
        if (todo.id !== id) {
            return todo;
        }
        else {
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
exports.default = router;
