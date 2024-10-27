import {useState} from "react";
import {produce} from "immer";
let id = 1;
export default function ListUpdate(props) {
    const [todos,setTodos] = useState([
        {
            id : id,
            title: 'Task 1'
        }
    ]);
    const addHandler = ()=>{
        console.log('Add Handler');
        id ++;

        let newTodo = {
            id,
            title: 'Task '+id
        };
        setTodos(
            produce((draft) => {
                draft.push(newTodo);
            })
        );
        //setTodos([...todos,newTodo]);
    }
    const updateHandler = (item)=>{
        console.log('Item ',item);
        const updateTodo = {
            ...item,
            title : 'Updated '
        }
        const newTodos = todos.map(todo=> todo.id==item.id? updateTodo:todo);
        setTodos(newTodos);
    }
    const deleteHandler = (item)=>{
        console.log('Update Item ',item);
        setTodos(todos.filter(todo=>todo.id != item.id));
    }
    return (<div>
        List
        {
            todos.map((item,index)=> <div key={item.id}>
                {item.title}
                <button className={"btn btn-primary"} onClick={() => updateHandler(item)}>Update</button>
                &nbsp;
                <button className={"btn btn-primary"} onClick={() => deleteHandler(item)}>Delete</button>
            </div>)
        }
        <button type={"button"}
                className={"btn btn-primary"} onClick={addHandler}>Add</button>
    </div>);
}