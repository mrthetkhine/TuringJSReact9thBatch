import useFetch from "./useFetch";

export default function FetchUser() {
    const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/users');

    console.log('Data ',data);
    return(<div>
        Custom Hook
        {
            loading && !error && <h4>Loading ...</h4>
        }
        {
            error && <h4>API Error</h4>
        }
        {
            data.map(user=><div key={user.id}>
                {user.name}
            </div>)
        }
    </div>);
}