"use client"
export default function CustomButton({handler}) {
    return (<div onClick={handler}>
        Custom button
        <button onClick={()=>console.log('Inner button click')}>Click me!</button>
    </div>)
}