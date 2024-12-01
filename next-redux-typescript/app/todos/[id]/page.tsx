"use client"

import { useGetAllTodosQuery } from "@/lib/features/todos-api/todoApiSlice";
import { use } from "react";

export default function TodosPage({ params }: { params: Promise<{ id: string }> })
{
    const { id } = use(params);
    const { todo } = useGetAllTodosQuery(undefined, {
        selectFromResult: ({ data }) => ({
            todo: data?.find((item) => item._id === id),
        }),
    })
    return (<div>
        Todo details page with id{id}
        <div>
            Todo title {todo.title}
        </div>
    </div>);
}