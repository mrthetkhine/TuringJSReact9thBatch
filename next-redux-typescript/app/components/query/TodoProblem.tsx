"use client";
import { useGetAllTodosQuery } from "@/lib/features/todos-api/todoApiSlice";
import { useState } from "react";
import { useEffect } from "react";
import TodoEntry from './TodoEntry';

export default function TodoProblem()
{
    //console.log('useGetAllTodosQuery ',useGetAllTodosQuery);
    const { data, isError, isLoading, isSuccess } = useGetAllTodosQuery(undefined);

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
            <TodoEntry/>
            {
                data.map(todo=><div key={todo._id}>
                    {todo.title}
                </div>)
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