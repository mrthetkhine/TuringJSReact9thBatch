import {useState} from "react";
import * as PropTypes from "prop-types";


export function TodoInput({addTodo})
{
    const [newTodo,setNewTodo] = useState('');

    const newTodoOnChangeHandler = (event)=>{
        setNewTodo(event.target.value);
    }
    const onAddHandler =()=>{
        console.log('On Add ',newTodo);
        addTodo(newTodo);
        setNewTodo('');
    };

    return (<div>
        <form>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Todo:</label>
                <input type={"text"}
                       className={"form-control"}
                       value={newTodo}
                        onChange={newTodoOnChangeHandler}/>
            </div>
            <div className="form-group">

                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={onAddHandler}>Add </button>
            </div>
        </form>
    </div>);
}

export function TodoItem({todo,onDelete,onUpdate}) {
    const [editMode,setEditMode] = useState(false);
    const [todoText,setTodoText] = useState(todo.title||'');
    const onChangeHandler = (event)=>{
        setTodoText(event.target.value);
    }
    const onEditBtnClick = ()=>{
        if(editMode){
            const todoToUpdate = {
                ...todo,
                title :todoText
            }
            console.log('Update ',todoToUpdate);
            onUpdate(todoToUpdate);
        }
        setEditMode(!editMode);

    }
    return (<div>
        {
            editMode ? <input type={"text"} value={todoText} onChange={onChangeHandler}/>
                : todoText
        }

        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onEditBtnClick}>
            {editMode?'Update':'Edit'}
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-danger"}
                onClick={onDelete}>Delete
        </button>
    </div>);
}


export function TodoList({todos,onDelete,onUpdate}) {
    return (<div>
        {
            todos.map(todo => <TodoItem key={todo.id}
                                        todo={todo}
                                        onUpdate={onUpdate}
                                        onDelete={() => onDelete(todo)}/>)
        }
    </div>);
}

export default function TodoContainer() {
    console.log('Render TodoContainer');
    const [todos,setTodos] = useState([
        {
            id : 1,
            title : 'Task 1'
        },
        {
            id : 2,
            title : 'Task 2'
        }
    ]);
    const addNewTodo= (todo)=>{
        console.log('Add New Todo ',todo);
        const newTodo = {
            id : crypto.randomUUID(),
            title : todo,
        }
        setTodos([...todos,newTodo]);
    };
    const onDeleteHandler =(todoToDelete)=>{
        console.log('OnDelete Handler ',todoToDelete);
        setTodos(todos.filter(todo=> todo.id!=todoToDelete.id));
    }
    const onUpdateHandler =(todoToUpdate)=>{
        console.log('onUpdateHandler Handler ',todoToUpdate);
        const newTodos = todos.map(todo=>todo.id==todoToUpdate.id? todoToUpdate: todo);
        setTodos(newTodos);
    }
    return (<div>
        Todo container
        <TodoInput addTodo={addNewTodo}/>
        <TodoList todos={todos}
                  onUpdate = {onUpdateHandler}
                  onDelete={onDeleteHandler}/>
    </div>);
}