import {useState} from "react";

export default function useCustomReducer(reducer,initialState)
{
    const [state,setState] = useState(initialState);
    function dispatch(action)
    {
        const newState = reducer(state,action);
        setState(newState);
    }
    return [state,dispatch];
}