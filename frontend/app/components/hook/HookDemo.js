import {useEffect, useState} from "react";

function hello()
{
    const [state,setState] = useState();
    return "Hello";
}
export default function HookDemo()
{
    const [state,setState] = useState(0);
    let data = hello();

    useEffect(()=>{
        console.log('Second level');
        //invalid
        //const [state,setState] = useState();

    },[]);
    return (<div>
        Hook Demo
        {
           data
        }
    </div>);
}