import {useMemo, useState} from "react";

function factorial(n) {
    console.log('Compute factorial ',n);
    let result = 1;
    for (let i = 1; i <= n; i++)
    {
        result *=i;
    }
    return result;
}
export default function UseMemoDemo()
{
    let [input,setInput] = useState("");
    let [num,setNum] = useState(0);
    console.log('Render');
    const fact = useMemo(()=>{
        console.log('Recompute ',num);
        return factorial(num);
    },[num]);
    /*let fact = factorial(num);*/
    const btnHandler = ()=>{
        console.log('Compute');
        setNum(input);
    };
    return (<div>
        Factorial value {fact}
        <input type={"text"}
               value={input}
               onChange={(e)=> setInput(e.target.value)}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnHandler}>Compute</button>
    </div>)
}