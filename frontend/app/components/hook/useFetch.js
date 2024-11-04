import {useEffect, useState} from "react";

export default function useFetch(url)
{
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [data,setData] = useState([]);

    async function loadUrl()
    {
        try {

            console.log('loading URl ',url);
            let response = await fetch(url);
            let json = await  response.json();
            console.log('Data done ',json);
            setData(json);
            setLoading(false);
        }
        catch(e)
        {
            setError(e);
            setLoading(false);
        }

    }
    useEffect(()=>{
        loadUrl();
    },[])
    return {data,loading,error};
}