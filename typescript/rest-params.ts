function sum(a:number,...rest:number[])
{
    let total = 0;
    for(let i = 0; i < rest.length; i++)
    {
        total += rest[i];
    }
    return total;
}
console.log( sum(1,3,4));