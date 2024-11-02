import {useReducer, useState} from "react";
import {TodoInput, TodoList} from "../todos/TodoContainer";
import todoReducer from "./todoReducer";

const initState = [{
        id : 1,
        title : 'Task 1'
    },
    {
        id : 2,
        title : 'Task 2'
    }];
export default function TodoWithReducer()
{
    const [todos,dispatch] = useReducer(todoReducer,initState);
    const addNewTodo= (todo)=>{
        console.log('Add New Todo ',todo);
        const payload = {
            id :crypto.randomUUID(),
            title : todo
        };
        dispatch({
            type : "ADD_TODO",
            payload
        })

    };
    const onDeleteHandler =(todoToDelete)=>{
        console.log('OnDelete Handler ',todoToDelete);
        dispatch({
            type : "DELETE_TODO",
            payload:todoToDelete
        })
    }
    const onUpdateHandler =(todoToUpdate)=>{
        console.log('onUpdateHandler Handler ',todoToUpdate);
        dispatch({
            type : "UPDATE_TODO",
            payload:todoToUpdate
        })
    }
    return (<div>
        Todo with reducer
        Todo container
        <TodoInput addTodo={addNewTodo}/>
        <TodoList todos={todos}
                  onUpdate = {onUpdateHandler}
                  onDelete={onDeleteHandler}/>
    </div>);
}