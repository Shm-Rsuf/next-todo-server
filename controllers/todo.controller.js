const mongoose = require("mongoose");
const Todo = require("../models/todo.model");

/* GETALLTODOS */
const getAllTodos = async (req, res) => {
  try {
    const attTodos = await Todo.find({});
    res.status(200).json(attTodos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* add a new todo */
const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      ...req.body,
    });
    res.status(200).json({ todo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* DELETE TODO */
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  //isValid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("Invalid id");
  }
  try {
    const deleteTodoId = await Todo.findOneAndDelete({ _id: id });
    res.status(200).json(deleteTodoId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* UPDATE TODOS*/
const updateTodo = async (req, res) => {
  const { id } = req.params;

  //isValid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("Invalid id");
  }
  try {
    const updateTodoId = await Todo.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updateTodoId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  addTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
};
