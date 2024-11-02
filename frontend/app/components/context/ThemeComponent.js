import {useContext, useState} from "react";
import {ThemeContext} from "./ThemeContext";
import Greeting from "../Greeting";
function GrandChild()
{
    const context = useContext(ThemeContext);
    console.log('Child ',context);
    return (<div style={context}>
        Grand Child
    </div>);
}
function Child()
{

    return (<div>
        Theme Child
        <GrandChild/>
    </div>);
}
function Parent()
{
    return (<div>
       Theme parent
        <Child/>
    </div>);
}
export default function ThemeComponent()
{

    const [theme,setTheme] = useState({
        color:'yellow'
    });
    const btnChangeTheme= ()=>{
        setTheme({
            color: 'blue'
        })
    }
    return(<div>
        Theme component
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnChangeTheme}>
            Change
        </button>
        <ThemeContext.Provider value={theme}>
            <Parent/>
        </ThemeContext.Provider>
        <GrandChild/>
    </div>);
}