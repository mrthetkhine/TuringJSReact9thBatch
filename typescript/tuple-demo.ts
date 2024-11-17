type Tuple = [number,any]

function div(a:number,b:number):Tuple
{
   if( isNaN(a) || isNaN(b))
   {
    return [0,new Error('Division by zero')]
   }
   else
   {
        return [a/b,null]
   }
}
let [result,error] = div(10,2);
if (error)
{
    console.log('Error ',error);
}
else
{
    console.log('Result ',result)
}
console.log('Div ',div(3,4)[0]);