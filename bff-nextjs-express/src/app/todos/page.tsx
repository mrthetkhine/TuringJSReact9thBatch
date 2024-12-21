import axiosInstance from "../axiosInstance";
export default async function Page()
{
    const resp = await axiosInstance.get('/api/todos');
    const todos = await resp.data;
    return(<div>
        Todos
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}