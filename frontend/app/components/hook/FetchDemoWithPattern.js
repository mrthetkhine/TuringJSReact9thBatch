import FetchDataDemo from "./FetchDataDemo";

function renderTodos(todos)
{
    return <div>
        {
            todos.map(todo=><div key={todo.id}>
                {
                    todo.title
                }
            </div>)
        }
    </div>
}
function renderUser(users)
{
    return <div>
        {
            users.map(user=><div key={user.id}>
                {
                    user.name
                }
            </div>)
        }
    </div>
}
export default function FetchDemoWithPattern()
{
    return (<div>
       {/* <FetchDataDemo
            url={"https://jsonplaceholder.typicode.com/todos"}
            render={renderTodos}>

        </FetchDataDemo>*/}
        <FetchDataDemo
            url={"https://jsonplaceholder.typicode.com/users"}
            render={renderUser}>

        </FetchDataDemo>
    </div>)
}