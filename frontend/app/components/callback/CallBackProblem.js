import {memo, useCallback, useState} from "react";

let savedHandler;
function Child({handler})
{
    console.log('Child render');
    if(!savedHandler)
    {
        savedHandler = handler;
    }
    console.log('is same' ,savedHandler ==handler );
    savedHandler = handler;
    return(<div>
        <button className={"btn btn-primary"} onClick={handler}>Click</button>
    </div>);
}
Child = memo(Child);
export default function CallBackProblem()
{
    const [count,setCount] = useState(0);
    console.log('Parent render');
   /* const handler=()=>{
      console.log('Callback');
    };
*/
    const handler = useCallback(()=>{
        console.log('Callback');
    },[]);

    const incHandler = ()=>{
        setCount(count+1);
    }
    return (<div>
        Parent
        <h1>
            {
            count
            }
        </h1>
        <Child handler={handler}/>

        <button type={"button"} className={"btn btn-primary"} onClick={incHandler}>
            Inc
        </button>
    </div>);
}