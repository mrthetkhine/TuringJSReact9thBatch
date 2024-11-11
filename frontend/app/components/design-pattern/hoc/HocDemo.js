import Page1 from "./Page1";
import {useState} from "react";
import Page2 from "./Page2";
import useLoader from "./useLoader";

export default function HocDemo()
{
    const [loading,setLoading]  = useState(true);

    const btnStopLoadingHandler= ()=>{
        setLoading(!loading);
    }
    const PageWithLoading = useLoader(Page1,loading);
    const Page2WithLoading = useLoader(Page2,loading);
    return(<div>
        <button type={"button"} className={"btn btn-primary"}
                onClick={btnStopLoadingHandler}>Toogle </button>
        {PageWithLoading}
        {Page2WithLoading}
    </div>);
}