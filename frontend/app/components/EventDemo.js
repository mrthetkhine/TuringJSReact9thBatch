'use client';
export default function EventDemo(props) {
    let handler = (event )=>{
        console.log("clicked ",event);
    };
    return (<div>
        <button type={"button"} onClick={handler}>Click me</button>

    </div>)
}