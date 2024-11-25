"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function TodoProblem()
{
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(data=>setTodos(data));
    },[]);
    return (<div>
        Todo problem
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}