type Color = { color: string };
type Border = { width   : number };
type BorderWithColor= Color & Border;
let borderWithColor : BorderWithColor = {
    color : "red",
    width : 1
}