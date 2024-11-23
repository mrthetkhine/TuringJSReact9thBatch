import {deleteTodo, Todo} from "@/lib/features/todos/todoSlice";
import {useAppDispatch} from "@/lib/hooks";
import {useState} from "react";

export default function TodoItem({todo}: { todo: Todo }) {
    const dispatch = useAppDispatch();

    const [editMode,setEditMode] = useState(false);

    const onDeleteHandler = ()=>{
        dispatch(deleteTodo(todo));
    };
    const onEditClickHandler = ()=>{
        setEditMode(!editMode);
    }
    return <div>
        {todo.title}
        &nbsp;
        <button type={"button"} className={"btn btn-primary"}
                onClick={onEditClickHandler}>
            Edit
        </button>
        &nbsp;
        <button type={"button"} className={"btn btn-primary"}
                onClick={onDeleteHandler}>
            Delete
        </button>
    </div>;
}
