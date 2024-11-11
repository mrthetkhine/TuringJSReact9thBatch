'use client';
import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export default  function TodoFetch()
{

    const {data:todos,loading,error} = useFetch('https://jsonplaceholder.typicode.com/todos');
    console.log('Render');
    return (<div>
        Todo fetch from server
        {
            loading && !error && <h4>Loading ...</h4>
        }
        {
            error && <h4>API Error</h4>
        }
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}