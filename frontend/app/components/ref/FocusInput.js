import {useRef} from "react";

export default function FocusInput()
{
    const inputRef = useRef(null);
    const onClickHandler = ()=>{
        console.log('OnClick');
        inputRef.current.focus();
    }
    return (<div>
        <input type={"text"} ref={inputRef}/>
        <button type={"button"} className={"btn btn-primary"}
                    onClick={onClickHandler}>
            Focus
        </button>
    </div>);
}