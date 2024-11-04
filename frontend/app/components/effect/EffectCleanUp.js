import {useEffect, useState} from "react";

export default function EffectCleanUp()
{
    const [now,setNow] = useState(new Date());
    useEffect(()=>{
      console.log('Effect fired');
      let timer = setInterval(()=>{
            console.log('Set interval fired');
            setNow(new Date());
        },1000);
      return ()=>{
        console.log('Clean up');
        clearInterval(timer);
      };
    },[]);
    console.log('Render EffectCleanUp');
    return (<div>

        EffectCleanUp
        Time {now.toLocaleTimeString()}
    </div>);
}