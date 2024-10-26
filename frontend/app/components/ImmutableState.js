import {useState} from "react";

function GrandChild()
{
    console.log('GrandChild render');
    return(<div>
        GrandChild
    </div>);
}
function ChildComponent()
{
    console.log('ChildComponent render');
    return(<div>
        Child
        <GrandChild/>
    </div>);
}
export default function ImmutableState()
{
    const [state,setState]= useState("Hello");
    console.log('Render immutable state');
    const handler = () =>{
        console.log('Button click');
        setState(new String("Hello"));
    };
    return (<div>
        {state}
        <button onClick={handler}>Hello</button>
        <ChildComponent/>
    </div>);
}