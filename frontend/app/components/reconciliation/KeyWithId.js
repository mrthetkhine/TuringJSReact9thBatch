import {useState} from "react";
import Counter from "../Counter";

const data = [
    {
        id:1,
        item:"Orange",
    },
    {
        id:2,
        item:"Apple",
    },
    {
        id:3,
        item:"Banana",
    }
]

export default function KeyWithId()
{
    const [items,setItems] = useState(data);
    const onSortHandler = ()=>{
        items.sort((a,b)=>{
            return a.item.localeCompare(b.item);
        });
        setItems([
            ...items
        ]);
    };
    const onDelete = (index)=>{
        console.log('Index ',index);
        items.splice(index,1);
        console.log('New items ',items);
        setItems([
            ...items
        ]);
    }
    return (<div>
        Key with id
        {
            items.map( (item,index)=><div key={item.id}>
                {item.item}
                <Counter/>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={()=>onDelete(index)}>
                    Delete
                </button>
            </div>)
        }
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onSortHandler}>Sort</button>
    </div>);
}