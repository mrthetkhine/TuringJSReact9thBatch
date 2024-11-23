import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {selectTodo, Todo} from "@/lib/features/todos/todoSlice";
import TodoItem from "@/app/components/todos/TodoItem";
import TodoInput from "@/app/components/todos/TodoInput";


export default function TodoList()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);
    return (<div>
        <TodoInput/>
        {
            todos.map(todo=><TodoItem key={todo.id}
                                      todo={todo}/>)
        }

    </div>);
}