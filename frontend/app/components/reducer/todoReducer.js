/*
        {
            id : 1,
            title : 'Task 1'
        },
        {
            id : 2,
            title : 'Task 2'
        }
* */
export default function todoReducer(todos,action)
{
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...todos,action.payload];
        case 'DELETE_TODO':
            return todos.filter(todo=>todo.id!=action.payload.id);
        case 'UPDATE_TODO':
            return todos.map(todo=>todo.id==action.payload.id? action.payload:todo);
    }
}