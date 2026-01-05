import { getTodoes , createTodoes } from "@/controllers/todoController";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const todo = await getTodoes();
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch todos'} , {status: 400})
    }
}

export async function POST(request: Request) {
    try {
        const body: Partial<{title: string , description: string , complete?: boolean}> = await request.json()
        const createtodo = await createTodoes(body)
        return NextResponse.json(createtodo , {status: 200})
    } catch (error) {
       return NextResponse.json({error: "Failed to create todo"} , {status: 500})
    }
}
