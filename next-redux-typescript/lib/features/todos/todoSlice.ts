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
  todos:Todo[],
  status:'loading'|'completed'|'failed'
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
    todos:dummyTodo,
    status:'loading'
}
export const todoSlice = createAppSlice({
    name: "todo",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: (create) => ({
        loading: create.reducer((state) => {
            state.status ='loading';
        }),
        completed: create.reducer((state) => {
            state.status ='completed';
        }),
        addTodo: create.reducer((state,action:PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state,action:PayloadAction<Todo>) => {
            state.todos = state.todos.filter(todo=>todo.id != action.payload.id)
        }),
        updateTodo: create.reducer((state,action:PayloadAction<Todo>) => {
            state.todos = state.todos.map(todo=>todo.id == action.payload.id ?action.payload:todo);
        }),
        loadAllTodoAsync: create.asyncThunk(
            async (undefined, {dispatch,getState,rejectWithValue,fulfillWithValue}) => {
                //console.log('Thunk Api ',getState().counter);
                dispatch(loading());
                try
                {
                    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                    const json = await response.json();
                    dispatch(completed());
                    return json;
                }
                catch(err)
                {
                    return rejectWithValue('Error fetching data');
                }

            },
            {
                pending: (state) => {
                    //state.status = "loading";
                },
                fulfilled: (state, action) => {
                    //state.status = "idle";
                    state.todos= action.payload;
                },
                rejected: (state) => {
                    console.log('Rejected');
                    state.status = "failed";
                },
            },
        ),
    }),
    selectors: {
        selectTodo: (state) => state.todos,
        selectCompletedTodoCount:(state)=>state.todos.filter(todo=>todo.completed).length
    },
});
export const {addTodo,deleteTodo,updateTodo,loadAllTodoAsync,loading,completed} = todoSlice.actions;
export const {selectTodo,selectCompletedTodoCount} = todoSlice.selectors;