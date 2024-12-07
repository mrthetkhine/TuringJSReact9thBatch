import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {NextApiResponse} from "next";

interface Context {
    params: undefined;
}

export async function GET(request: NextRequest) {

    return NextResponse.json({ data: 'Hello World' });
}
