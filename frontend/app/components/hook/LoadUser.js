import {useEffect, useState} from "react";

export default function LoadUser()
{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    async function loadUsers(url)
    {
        try {
            let response = await fetch(url);
            let json = await  response.json();
            console.log('Data done ',json);
            setUsers(json);
            setLoading(false);
        }
        catch(e)
        {
            console.log('Error ',e);
            setError(e);
        }

        //return json;
    }
    useEffect( ()=>{

        loadUsers('https://jsonplaceholder.typicode.com1/users');

    },[]);

    console.log('Render');
    return (<div>
        Todo fetch from server
        {
            loading && !error && <h4>Loading ...</h4>
        }
        {
            error && <h4>API Error</h4>
        }
        {
            !loading &&   users.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>);
}