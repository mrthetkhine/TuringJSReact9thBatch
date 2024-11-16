function greet(message:string)
{
    console.log(message);
}
greet('Hello World');
//greet(123);

function add(a:number,b:number):number
{
    return a+b;
}
let result = add(1,2);
console.log('Result ',result);

const names = ['Apples','Orange',"Banan"]
names.forEach(data=>console.log(data.toUpperCase()))