function add(x:number,y:number):number{
    return x+y;
}
function subtract(x:number,y:number):number{
    return x-y;
}
type BinaryOperation = (x:number,y:number)=>number;

let fn: BinaryOperation = add;
console.log('Add ',fn(1,2));

fn = subtract;
console.log('Subtract ',fn(10,2));