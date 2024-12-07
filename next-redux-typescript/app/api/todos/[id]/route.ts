import {NextRequest, NextResponse } from "next/server";
import {NextApiResponse} from "next";


interface Context {
    params: undefined;
}

export async function GET(request: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
    const json = await  resp.json();
    return NextResponse.json(json);
}
