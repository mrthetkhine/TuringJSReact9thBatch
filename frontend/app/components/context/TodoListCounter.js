import {TodoListContext} from "./TodoContext";
import {useContext} from "react";

export default function TodoListCounter()
{
    const todos = useContext(TodoListContext);
    return (<div>
        <h1>Todo count {todos.length} </h1>
    </div>);
}