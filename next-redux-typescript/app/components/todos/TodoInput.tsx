import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "@/lib/hooks";
import {addTodo, Todo} from "@/lib/features/todos/todoSlice";

function nextId()
{
    let id = 2;
    return function()
    {
        return ++id;
    }
}
const nextTodoId = nextId();
export default function TodoInput()
{
    const dispatch = useAppDispatch();
    const [todoText,setTodoText] = useState('');

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTodoText(event.target.value);
    }
    const addTodoHandler =()=>{
        let payload:Todo ={
            id : nextTodoId(),
            title : todoText,
            completed:false,
        }
        dispatch(addTodo(payload));
        setTodoText('');
    };
    return (<div className={"form-group"}>
        <input type={"text"}
               className={"from-control"}
                value={todoText}
                onChange={onChangeHandler}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={addTodoHandler}>
            Add Todo
        </button>
    </div>);
}