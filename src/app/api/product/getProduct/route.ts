import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Import your Prisma client
import prisma from '@/lib/db'; // Import your Prisma client

export async function POST(req: NextRequest & { body: { id?: string } }, res: Response) {
    console.log('Recevied')
    const data = await req.json()
    console.log(data.id)
    try {
        //const prisma = new PrismaClient(); // Instantiate Prisma client
        const product = await prisma.product.findUnique(
            {
                where: {
                    id: data.id
                }
            }
        )// Fetch products from Prisma
        console.log(product)
        return NextResponse.json({ product }, { status: 200 }); // Return products as JSON
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 }); // Return error message
    }

}