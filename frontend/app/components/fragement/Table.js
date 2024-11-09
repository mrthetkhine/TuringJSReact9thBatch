const items =['Apple',"Orange","Banana"]
export function TableRow({item,index})
{
    return (
        <>
            <td>{index}</td>
            <td>{item}</td>
        </>
    )
}
export default function Table()
{
    return(<div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>

                    {
                       items.map((item,index)=>(<tr key={index}>
                           <TableRow
                                     item={item}
                                     index={index}/>
                       </tr>))
                    }


            </tbody>
        </table>
    </div>);
}