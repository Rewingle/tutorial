"use client"
import { Button } from "@/components/ui/button";
//import { PrismaClient } from "@prisma/client";
//import ProductInfo from "@/actions/ProductInfo";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export default function Product({ params }: { params: { id: string } }) {

    const sizes = ["XS", "S", "M", "L", "XL"]

    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            console.log(params.id)
            const id = params.id
            await fetch('http://localhost:3000/api/product/getProduct', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id }),
                cache: 'force-cache',
                next: {revalidate: 3600}
            }).then(res => { res.json().then((data) => setProduct(data.product)) })
                .catch(err => console.log('ERROR ' + err))

        }
        fetchProduct()
    }, [])

    return (

        <div className="grid grid-rows-5 grid-cols-12 gap-20 h-full">
            <div className="row-span-5 col-span-6 bg-white h-full">
                <img src={product?.image} alt={product?.title} className="h-full w-full object-cover" />
            </div>
            <div className="row-span-1 col-span-6 pr-24">
                <div>
                    <div className="font-bold text-2xl">
                        {product?product.title:<Skeleton className="h-8 w-[700px]" />}
                    </div>
                    <div className="font-mono text-xl">
                        {product?`${product?.price} $`: <Skeleton className="h-8 w-[80px] mt-2" />}
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
                <div>{product?product.description:<Skeleton className="h-24 w-[700px]" />}</div>
            </div>

        </div>

    )
}
