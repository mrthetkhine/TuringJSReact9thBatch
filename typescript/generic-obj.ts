interface Box{
    content:string;
}
let stringBox :Box = {
    content : "Hello"
}

interface GenericBox<T>{
    content:T;
}
let numBox:GenericBox<number> = {
    content : 123
}
let strBox :GenericBox<string> = {
    content : "Hello"
}