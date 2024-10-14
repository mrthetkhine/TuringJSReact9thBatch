var express = require('express');
var todos = require('./../controller/TodoController');
var router = express.Router();

router.get('/',todos.getAllTodos);
router.get('/:id',todos.getTodoById);

router.post('/',todos.saveTodo);
router.put('/:id',todos.updateTodo);
router.delete('/:id',todos.deleteTodoById);
module.exports = router;