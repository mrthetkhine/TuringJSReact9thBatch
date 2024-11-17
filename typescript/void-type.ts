function greet():void
{
    console.log('Greet');
}
function hello():void
{
    console.log('Hello');
}
type Fun = () => void;
let fun:Fun = hello;
fun();

fun = greet;
fun();