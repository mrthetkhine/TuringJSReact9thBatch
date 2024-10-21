'use client';

function Item(props) {
    return <div>
        {props.todo.title}
    </div>;
}

export default function ListDemo({todos}) {
    console.log('todos ',todos);
    let fruits = ['apple','banana','mango'];
    let items = fruits.map((item,index) => <li key={index}>{item}</li>);
    return (<div>
        <ol>
            {items}
        </ol>

        To do list
        {
            todos.map((todo,index)=><Item
                                        key={todo.id}
                                        todo={todo}/>)
        }
    </div>)
}