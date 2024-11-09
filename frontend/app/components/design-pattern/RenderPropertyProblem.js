import {useState} from "react";

export default function RenderPropertyProblem()
{
    const [position,setPosition]  = useState({
        x:0,
        y:0,
    })
    const handler= (event)=>{
        //console.log('Handler ',event.clientY);
        setPosition({
            x: event.clientX,
            y:event.clientY
        })
    };
    return (<div onMouseOver={handler}>
        Render property
        <div>
            <h4> X {position.x}</h4>
            <h4> Y {position.y}</h4>
        </div>
    </div>);
}