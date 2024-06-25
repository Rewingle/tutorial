import { PrismaClient, Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';
export async function GET() {
    const prisma = new PrismaClient()
    console.log('zax')
    const res = await prisma.user.create({
        data: {
            email: 'alice@test.com',
            username: 'alice',
            password: '1234',
            cart: {
                create: { name: 'test', description: 'desc', price: 100, image: 'imageUrl' }
            }
        }
    })

    return NextResponse.json({res},{status:200})
}
