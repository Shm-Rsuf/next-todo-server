const express = require("express");
const {
  addTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");

/* ROUTER */
const router = express.Router();

router.get("/", getAllTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
