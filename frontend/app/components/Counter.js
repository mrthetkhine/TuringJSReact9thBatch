import {useState} from "react";

export default function Counter()
{
    console.log("counter render");
    let [counter,setCounter] = useState(0);
    let [anotherCounter,setAnotherCount] = useState(0);
    const incHandler=()=>{
        setCounter(counter+1);
        console.log(counter);
    };
    const decHandler=()=>{
        setCounter(counter-1);
        console.log(counter);
    }
    return (<div>

        <button onClick={incHandler}>
          &nbsp;  + &nbsp;
        </button>
        Counter {counter}
        <button onClick={decHandler}>
            &nbsp;  - &nbsp;
        </button>
        <button onClick={()=>setAnotherCount(anotherCounter+1)}> Change </button>
    </div>)
}