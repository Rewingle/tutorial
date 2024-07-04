import Card from "@/components/Card";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

interface Product{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}



export default async function ProductList(){

    const session = await auth()
    if (!session?.user) return null
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany();
    //let products = await res.json();
    console.log(data)
    return(
        
        <section className="flex items-center justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.map((product:any,key:any)=>(
                <Card id={product.id.toString()} title={product.title} description={product.description} image={product.image} price={product.price}></Card>
            ))}
            </div>
        </section>
    )
}