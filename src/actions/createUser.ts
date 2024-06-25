import { PrismaClient, Prisma } from '@prisma/client';

export default async function createUser() {
    const prisma = new PrismaClient()

    await prisma.user.create({
        data: {
            email: 'alice@test.com',
            username: 'alice',
            password: '1234',
            cart: {
                create: { name: 'test', description: 'desc', price: 100, image: 'imageUrl' }
            }
        }
    })
}