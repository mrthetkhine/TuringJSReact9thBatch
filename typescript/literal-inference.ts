let obj = {
    name : "John",
    age:30
};
type Human ={
    name:string,
    age : number
}
type Another ={
    name:string,
    age : number
} 
let data :Another = {
    name : "John",
    age : 30
};
console.log(data);
let obj2 : Human = {
    name: "Jhon Wick",
    age : 30
};
data = obj2;