function execute(cb:(messsage:string)=>void)
{
    cb('Hello');
}

function greet(x:string)
{
    console.log('Greet ',x);
}
function another(x:string)
{   
    console.log('Another ',x);
}
execute(greet);
execute(another);