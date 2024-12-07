import { redirect } from 'next/navigation'
export default async function SettingPage()
{
    console.log('Setting page ');
    //redirect('/login');
    //throw new Error('WE got error');
    const resp = await fetch('http://localhost:3000/api/todos');
    const todos = await resp.json();

    return (<div>
        Dashobard/Setting page
        {
            todos.map((todo:any)=><div>{todo.title}</div>)
        }
    </div>);
}