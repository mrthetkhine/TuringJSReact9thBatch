'use client';
import './Border.css'
export function Border({children}) {
    console.log('Border Children ',children);

    return (<div className={'border'}>
        Border
        {children}
    </div>)
}