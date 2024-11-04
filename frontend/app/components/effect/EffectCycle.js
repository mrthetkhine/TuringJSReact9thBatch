import {useEffect, useState} from "react";

export default function EffectCycle() {

    const [count,setCount] = useState(0);
    const [another,setAnother] = useState(0);
    const btnIncHandler=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
       console.log('First effect run only if counter change');
    },[count]);
    useEffect(()=>{
        console.log('Second effect');
    });
    useEffect(()=>{
        console.log('Only run once effect');
    },[]);

    useEffect(()=>{
        console.log('Third effect count ,another');
    },[count,another]);
    console.log('Render');

    const btnAnotherHandler=()=>{
        setAnother(another+1);
    }
    return(<div>
        Effect cycle

        <h1>Counter {count}</h1>
        <h1>Another {another}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnIncHandler}> Inc </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnAnotherHandler}> Another Inc </button>
        &nbsp;
    </div>);
}