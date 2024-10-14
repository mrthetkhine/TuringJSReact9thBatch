const Todo = require('./../models/ToDo');

async function getAllTodos()
{
    console.log('service getAllTodos');
    return Todo.find();
}
async function getTodoById(id)
{
    let todo = await Todo.findById(id);
    return todo;
}
async function saveTodo(todo)
{
    let newToDo = new Todo(todo);
    return newToDo.save();
}
async function updateTodoById(id,todo)
{
    let existingTodo = await Todo.findById(id);
    if(!existingTodo)
    {
        throw new Error('Todo id '+id+' not found')
    }
    else
    {
        return Todo.findByIdAndUpdate(id,todo,{new :true})
    }

}
async function deleteTodoById(id)
{
    let existingTodo = await Todo.findById(id);
    if(!existingTodo)
    {
        throw new Error('Todo id '+id+' not found')
    }
    else
    {
        return Todo.findByIdAndDelete(id);
    }

}
module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodoById,
    deleteTodoById,
}