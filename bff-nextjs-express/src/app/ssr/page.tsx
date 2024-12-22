export default async function Page()
{
    const res = await fetch(`http://localhost:3000/api/todos`)
    const data = await res.json();
    return(<div>
        SSR
        {
            data && data.map(item=><div key={item.id}>
                {
                    item.title
                }
            </div>)
        }
    </div>);
}