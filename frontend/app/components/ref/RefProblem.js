import {useRef, useState} from "react";

export default function RefProblem()
{
    console.log('Render');
    const [count,setCount] = useState(0);

    let anotherCounter = useRef(0);
    const onIncHandler = ()=>{
        setCount(count+1);
    }
    const anotherCounterHandler = ()=>{
        anotherCounter.current++;
        console.log('Another counter ',anotherCounter);
    }
    return (<div>
        Ref Problem
        &nbsp;{ count }&nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onIncHandler}>Inc</button>

        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={anotherCounterHandler}>Another</button>
    </div>);
}