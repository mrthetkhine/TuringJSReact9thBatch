import counterReducer, {CounterState} from "@/app/components/reducer/counterReducer";
import React, {useReducer} from "react";

const initState : CounterState = {
    value :0
}
export default function CounterWithReducer()
{
    const [counter,dispatch] = useReducer(counterReducer,initState);
    const incHandler =(event:React.MouseEvent)=>{
        dispatch({
            type:"INC"
        });
    }
    const decHandler =(event:React.MouseEvent)=>{
        dispatch({
            type:"DEC"
        });
    }
    return (<div>
        Counter with reducer
        <div>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={incHandler}>+</button>
            <h1>{counter.value}</h1>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={decHandler}>-</button>
        </div>

    </div>)
}