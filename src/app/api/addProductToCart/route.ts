import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient()
    const data = await request.json()
    console.log(data)
    const res = await prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            user: data.user // Replace 'userId' with the actual user ID
        }
    })

    return NextResponse.json({ res }, { status: 200 })
}
