import {createContext} from "react";

export type Theme = "green" | "blue" ;
const ThemeContext = createContext<Theme>("green");
export default ThemeContext;