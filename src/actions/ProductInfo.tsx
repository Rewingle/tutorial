import { PrismaClient } from "@prisma/client";


export default async function ProductInfo(props: any) {
    const sizes = ["XS", "S", "M", "L", "XL"]

  /*   const res = await fetch(`https://fakestoreapi.com/products/${props.id}`)
    let product = await res.json(); */
    
    const prisma = new PrismaClient();
     const product = await prisma.product.findUnique(
        {
            where: {
                id: props.id
            }
        }
    ) 
    return product
}