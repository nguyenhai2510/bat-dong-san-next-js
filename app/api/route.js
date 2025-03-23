'use server'
// import { db } from '@/lib/db' // Your database client

import {json} from "node:stream/consumers";

export async function fetchUsers() {
    // const users = await db.user.findMany()
    return  json({message: 'Hello from Next.js!'})
}

export async function GET() {
    return Response.json({ message: 'Hello World' })
}