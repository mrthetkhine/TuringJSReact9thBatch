import {useEffect, useState} from "react";

export default function EffectExactOnce()
{
    const [count,setCount] = useState(0);
    console.log('Render ');
    useEffect(()=>{
        console.log('Effected execute once');
    },[]);
    const btnIncHandler=()=>{
        setCount(count+1);
    }
    return (<div>
        Exact once
        <h1>Counter {count}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnIncHandler}> Inc </button>
        &nbsp;
    </div>);
}