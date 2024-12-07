'use client'
import {create} from './action';
export default function Page()
{
    return (<div>
        Client page for server action
        <button onClick={() => create()} className={"btn btn-primary"}>Create</button>
    </div>);
}