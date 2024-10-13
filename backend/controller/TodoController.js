const todoService = require('./../services/TodoService')
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
]
async function getAllTodos(req,res,next){
    console.log('Api todos routes');
    let todos = await todoService.getAllTodos();
    res.json(todos);
}
async function getTodoById(req,res,next){
    let id = req.params.id;
    console.log(id);
    let todo = todos.find(todo=>todo.id==id);
    res.json(todo);
}
async function saveTodo(req,res,next){
    console.log("Post todo ",req.body);
    res.status(201).json(req.body);
}
async function updateTodo(req,res,next){
    console.log('update Todo id ',req.params.id);
    res.status(200).json(req.body);
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
};