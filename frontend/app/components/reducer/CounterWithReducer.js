import counterReducer from "./counterReducer";
import {useReducer} from "react";
import useCustomReducer from "./useCustomReducer";

const initState= {
    count :0
}
export default function CounterWithReducer() {
    //const [state, dispatch] = useReducer(counterReducer, initState);
    const [state, dispatch] = useCustomReducer(counterReducer, initState);
    const incHandler= ()=>{
      dispatch({
          type:"INC"
      });
    };
    const decHandler = ()=>{
        dispatch({
            type:"DEC"
        })
    }
    console.log('Render counterwithReducer');
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={incHandler}>+</button>
        Counter &nbsp;
        {
            state.count
        }
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={decHandler}>-</button>
    </div>);
}