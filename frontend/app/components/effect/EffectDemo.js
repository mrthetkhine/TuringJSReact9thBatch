import {useEffect, useRef, useState} from "react";

export default function EffectDemo()
{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    const parentDiv = useRef(null);
    console.log('Render ');
    useEffect(()=>{
        console.log('Effect fire');
        console.log('ParentDiv width  ',parentDiv.current.clientWidth);
    },[count]);
    function hello()
    {
        console.log('Hello invoked in render');
        return "Hello";
    }

    const btnIncHandler=()=>{
        setCount(count+1);
    }
    const btnIncHandler2=()=>{
        setCount2(count2+1);
    }
    return (<div ref={parentDiv}>
        Parent
        <div style={{
            width:100,
            height:200
        }
        }>
            Child {hello()}

            <h1>Counter {count}</h1>
            <h1>Counter {count2}</h1>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnIncHandler}> Inc </button>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnIncHandler2}> Inc </button>
        </div>
    </div>);
}