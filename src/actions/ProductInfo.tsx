import AddToCart from "@/components/AddToCart";
import { Button } from "@/components/ui/button";
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
    return (
        <>
            <div className="grid grid-rows-5 grid-cols-12 gap-20 h-full">
                <div className="row-span-5 col-span-6 bg-black h-full">
                    <img src={product?.image} alt={product?.title} className="h-full w-full object-cover" />
                </div>
                <div className="row-span-1 col-span-6 pr-24">
                    <div>
                        <div className="font-bold text-2xl">
                            {product?.title}
                        </div>
                        <div className="font-mono text-xl">
                            {`${product?.price} $`}
                        </div>
                        <br />
                        <div className="flex ">
                            {sizes.map((size) => (
                                <span className="ml-4 *:first-of-type:ml-0 *:last-of-type:ml:0">
                                    <Button className=" text-gray-900 bg-white border-gray-300 border-2">{size}</Button>
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="row-span-4 col-span-6 pr-24">
{/*                     <AddToCart title={product?.title} description={product?.description} price={product?.price} imageUrl={product?.image} userId={"667a6b2358be6dc7927a79c0"} />
 */}                    <div>{product?.description}</div>
                </div>

            </div>
        </>
    )
}