import {useReducer} from "react";
import todoReducer from "../reducer/todoReducer";
import TodoWithReducer from "../reducer/TodoWithReducer";
import {TodoListContext,TodoDispatchContext} from "./TodoContext";
import TodoListCounter from "./TodoListCounter";
import useCustomReducer from "../reducer/useCustomReducer";

const initState = [{
    id : 1,
    title : 'Task 1'
},
    {
        id : 2,
        title : 'Task 2'
    }];
export default function TodoWithContext() {
    //const [todos,dispatch] = useReducer(todoReducer,initState);
    const [todos,dispatch] = useCustomReducer(todoReducer,initState);
    return (<div>
        Todo with context
        <TodoListContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoWithReducer/>
                <TodoListCounter/>
            </TodoDispatchContext.Provider>
        </TodoListContext.Provider>

    </div>);
}