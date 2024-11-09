import {useState} from "react";

export default function RenderProperty({children})
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
            {
                children(position)
            }
        </div>
    </div>);
}