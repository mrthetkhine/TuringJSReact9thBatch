import {NextRequest, NextResponse } from "next/server";
import {NextApiResponse} from "next";

interface Context {
    params: undefined;
}

export async function GET(request: NextRequest) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await  resp.json();
    return NextResponse.json(json);
}
