import { useGetAllTodosQuery } from "@/lib/features/todos-api/todoApiSlice";

export default function TodoCount()
{
    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodosQuery(undefined);
    if(isSuccess)
    {
        return <div className={"container"}>
            Todo count {data?.length}
        </div>
    }
    else
    {
        return <h1>loading</h1>
    }
}