import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        return Response.json({ message:"xin chao"},{status:200})
    } else {
        return Response.json({ message:req.headers.authorization},{status:200})
    }
    // return Response.json({ message: 'Hello World' })
    // res.status(200).json({ message: 'Hello from Next.js!' })
}