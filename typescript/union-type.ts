let data : string|number;
data = "Hello";
//console.log(data*2);
data = 123;
console.log(data);


function print(id: number|string):string  
{
    if(typeof id === "number")
    {
        return id+"";
    }
    else
    {
        return id.toUpperCase();
    }
    
}
console.log(print(1234));
console.log(print("Hello"));
