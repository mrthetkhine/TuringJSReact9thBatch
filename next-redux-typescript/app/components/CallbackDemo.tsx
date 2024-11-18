import React, {useState} from "react";

function Child({callback}:{callback:(event:React.MouseEvent)=>void})
{
    const [name,setName] = useState('');
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    }

    return(<div>
        <div className={"form-group"}>
            <label>Name</label>
            <input type={"text"} className={"form-control"}
                value={name}
                onChange={handleChange}/>
        </div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={callback}>Click Me</button>
    </div>);
}
export default function CallbackDemo() {
    let callback=(event:React.MouseEvent)=>{
        console.log('Event ',event);
    }
    return (<div >
        Callback
        <Child callback={callback}/>
    </div>);
}