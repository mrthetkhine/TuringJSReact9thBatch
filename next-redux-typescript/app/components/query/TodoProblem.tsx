"use client";
import {TodoModel, useDeleteTodoMutation, useGetAllTodosQuery, useUpdateTodoMutation } from "@/lib/features/todos-api/todoApiSlice";
import {ChangeEvent, useState } from "react";
import { useEffect } from "react";
import TodoEntry from './TodoEntry';
import {useRouter} from "next/navigation";
function TodoItem({todo}: { todo: TodoModel }) {
    const [deleteTodo,result] = useDeleteTodoMutation();
    const [updateTodo,updateTodoResult] = useUpdateTodoMutation();
    const [edit,setEdit] = useState(false);
    const [editText,setEditText] = useState(todo.title);

    const router = useRouter();
    const editOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setEditText(event.target.value);
    }
    const onDeleteHandler = ()=>{
        console.log('OnDelete ',todo);
        deleteTodo(todo._id??'')
            .unwrap()
            .then(data=>{
                console.log('Todo successfully deleted ',result);
            })
    };
    const onEditHandler = ()=>{
        if(edit)
        {
            const todoToUpdate = {
                ...todo,
                title: editText
            }
            console.log('Updated ',todoToUpdate);
            updateTodo(todoToUpdate)
                .unwrap()
                .then(data=>{
                    console.log('Todo update successfully ',data);
                },err=>{
                    console.log('Error in todo update');
                });
        }
        setEdit(!edit);
    };
    const onDetailsHandler= ()=>{
        console.log('Details ');
        router.push(`/todos/${todo._id}`);
    };
    return <div>

        { !edit && editText }
        {edit &&
            <input type={"text"} value={editText}
                                 onChange={editOnChange}/>

        }
        &nbsp;


        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onEditHandler}>
            {edit?'Update' : 'Edit'}
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onDeleteHandler}>
            Delete
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onDetailsHandler}>
            Details
        </button>
    </div>;
}

export default function TodoProblem()
{
    //console.log('useGetAllTodosQuery ',useGetAllTodosQuery);
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodosQuery(undefined,{
        //pollingInterval: 1000,
    });

    const forceReloadHandler = ()=>{
        console.log('Refetch API');
        refetch();
    };
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isSuccess) {
        return (<div>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={forceReloadHandler}
                >Force Reload</button>
            <TodoEntry/>
            {
                data.map(todo=><TodoItem key={todo._id} todo={todo}/>)
            }
        </div>);
    }
    /*const [todos,setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(data=>setTodos(data));
    },[]);*/

}