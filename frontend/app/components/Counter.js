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

        <button onClick={incHandler} className={"btn btn-primary"}>
          &nbsp;  + &nbsp;
        </button>
        Counter {counter}
        <button onClick={decHandler} className={"btn btn-primary"}>
            &nbsp;  - &nbsp;
        </button>
       {/* <button className={"btn btn-primary"}
            onClick={()=>setAnotherCount(anotherCounter+1)}> Change </button>*/}
    </div>)
}