import useFetch from "./useFetch";


export default function FetchDataDemo({url,render}) {
    const {data,loading,error} = useFetch(url);
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
            render(data)
        }
    </div>)
}