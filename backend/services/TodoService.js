const Todo = require('./../models/ToDo');

async function getAllTodos()
{
    console.log('service getAllTodos');
    return Todo.find();
}
module.exports = {
    getAllTodos,
}