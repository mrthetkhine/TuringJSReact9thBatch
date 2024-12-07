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
    delay(3000);
    console.log('Api todos routes');
    let todos = await todoService.getAllTodos();
    res.json(todos);
}
async function getTodoById(req,res,next){
    let id = req.params.id;
    console.log(id);
    try
    {
        let todo = await todoService.getTodoById(id);
        res.json(todo);
    }
    catch (err)
    {
        res.status(404).json({
            errorMessage : "Id "+id+" not found"
        })
    }
}
async function saveTodo(req,res,next){
    //delay(3000);
    console.log("Post todo ",req.body);
    try
    {
        let todo = await todoService.saveTodo(req.body);
        res.status(201).json(todo);
    }
    catch(err)
    {
        res.status(400).json({
            errorMessage : err.message
        });
    }

}
async function updateTodo(req,res,next){
    delay(3000);
    console.log('update Todo id ',req.params.id);
    try
    {
        let id = req.params.id;
        let updatedTodo = await todoService.updateTodoById(id,req.body);
        res.status(200).json(updatedTodo);
    }
    catch(err)
    {
        //console.log(err);
        res.status(400).json({
            errorMessage : err.toString()
        });
    }

}
function delay(ms)
{
    let start = new Date();
    while ( (new Date()-start) < ms) ;
}
async function deleteTodoById(req,res,next)
{
    delay(3000);
    let id = req.params.id;
    try
    {
        let deletedTodo = await todoService.deleteTodoById(id);
        res.json(deletedTodo);
    }
    catch(err)
    {
        res.status(400).json({
            errorMessage : err.toString()
        });
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodoById,
};