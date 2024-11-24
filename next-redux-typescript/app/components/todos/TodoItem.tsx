import {deleteTodo,updateTodo, Todo} from "@/lib/features/todos/todoSlice";
import {useAppDispatch} from "@/lib/hooks";
import {ChangeEvent, useEffect, useState} from "react";

export default function TodoItem({todo}: { todo: Todo }) {
    const dispatch = useAppDispatch();

    const [editMode,setEditMode] = useState(false);
    const [editTodo,setEditTodo] = useState(todo.title);

    useEffect(()=>{
        setEditTodo(todo.title);
    },[todo])
    const onDeleteHandler = ()=>{
        dispatch(deleteTodo(todo));
    };
    const onEditClickHandler = ()=>{
        if(editMode)
        {
            const todoToUpdate:Todo = {
                ...todo,
                title:editTodo
            };
            dispatch(updateTodo(todoToUpdate));
        }
        setEditMode(!editMode);
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setEditTodo(e.target.value);
    };
    return <div>

        {!editMode && editTodo}
        {editMode && <input type="text"
                            className="form-control"
                            value={editTodo}
                            onChange={onChangeHandler}
                        />}
        &nbsp;
        <button type={"button"} className={"btn btn-primary"}
                onClick={onEditClickHandler}>
            { editMode?'Update':'Edit'}
        </button>
        &nbsp;
        <button type={"button"} className={"btn btn-primary"}
                onClick={onDeleteHandler}>
            Delete
        </button>
    </div>;
}
