import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    //IMPLEMENT PAGINATION
    try {
        const products = await db.product.findMany();
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}