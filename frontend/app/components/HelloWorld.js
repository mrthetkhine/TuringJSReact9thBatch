'use client';
export function Child()
{
    return(<div>
        <h1>Child component</h1>
        <h2>Child 2</h2>

    </div>)
}

console.log('Child ',Child());
export default function HelloWorld()
{
    console.log('HelloWorld Component');
    let str = "apple";
    return (<div>
        <h1>Hello World!</h1>
        <p>This is paragraph </p>
        {str.toUpperCase()}
        <Child/>

    </div>)
}