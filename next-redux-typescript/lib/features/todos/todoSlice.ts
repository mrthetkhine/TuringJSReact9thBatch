import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";

export interface Todo
{
    id:number,
    title:string,
    completed:boolean
}
interface TodoState {
  todos:Todo[]
}
const dummyTodo:Todo[] = [
    {
        id:1,
        title:'Task 1',
        completed:false
    },
    {
        id:2,
        title:'Task 2',
        completed:true
    }
]
const initialState:TodoState = {
    todos:dummyTodo
}
export const todoSlice = createAppSlice({
    name: "todo",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: (create) => ({
        addTodo: create.reducer((state,action:PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state,action:PayloadAction<Todo>) => {
            state.todos = state.todos.filter(todo=>todo.id != action.payload.id)
        }),

    }),
    selectors: {
        selectTodo: (todo) => todo.todos,
    },
});
export const {addTodo,deleteTodo} = todoSlice.actions;
export const {selectTodo} = todoSlice.selectors;