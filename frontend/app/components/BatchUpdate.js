import {useState} from "react";

export default function BatchUpdate(props) {
    console.log('Render');
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>{number}</h1>
            <h2>counter {counter}</h2>
            <button onClick={() => {
                /*setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);*/
                //setNumber(number + 5);

                //setCounter(counter + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3
            </button>
        </>
    )
}