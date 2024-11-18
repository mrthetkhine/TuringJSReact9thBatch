import React, {useContext, useState} from "react";
import ThemeContext, {Theme} from "@/app/components/context/ThemeContext";

function Child()
{
    const theme= useContext<Theme>(ThemeContext)
    return (<div style={{color:theme}}>
        This is theme
    </div>);
}
export default function ContextDemo()
{
    const [theme,setTheme] = useState<Theme>('green')
    const handler = (event:React.MouseEvent)=>{
        setTheme('blue');
    }
    return (<div>
        Context
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={handler}>
            Change
        </button>
        <ThemeContext.Provider value={theme}>
            <Child/>
        </ThemeContext.Provider>
    </div>);
}