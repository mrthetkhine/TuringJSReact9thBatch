import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {loadAllTodoAsync, selectTodo,selectCompletedTodoCount, Todo} from "@/lib/features/todos/todoSlice";
import TodoItem from "@/app/components/todos/TodoItem";
import TodoInput from "@/app/components/todos/TodoInput";
import { useEffect } from "react";


export default function TodoList()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);
    const completedTodoCount = useAppSelector(selectCompletedTodoCount);

    useEffect(()=>{
        dispatch(loadAllTodoAsync())
            .unwrap()
            .then((data)=>{
                console.log('Loading completed ',data);
                });
    },[]);
    return (<div>
        <h1>Completed count {completedTodoCount} </h1>
        <TodoInput/>
        {
            todos.map(todo=><TodoItem key={todo.id}
                                      todo={todo}/>)
        }

    </div>);
}