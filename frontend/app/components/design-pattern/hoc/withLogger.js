import Error from "next/error";
import {useEffect} from "react";

export default function withLogger(Element)
{
    return (props)=>{
        useEffect(()=>{
            console.log('Element ',Element.name, "Rendered ");
        },[]);
        return (<Element/>);
    }
}