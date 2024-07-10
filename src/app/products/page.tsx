"use client"
//import ProductList from "@/actions/ProductList"
import Card from "@/components/Card";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";
import { Suspense, useEffect, useState } from "react";

interface Product {
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

export default function Products() {


    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        const fetchProducts = async () => {
            await fetch('http://localhost:3000/api/product/getProducts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pagination: { take: 10, skip: 0 } }) /* DISABLED NO PAGINATION FOR NOW */
            }).then(res => { res.json().then((data) => setProducts(data.products)) })
                .catch(err => console.log('ERROR ' + err))
        }
        fetchProducts()
    }, [])

    return (
        <section className="flex items-center justify-center">
       
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Suspense fallback={<div>ZAAA</div>}>


                    {products?.map((product: any, key: any) => (
                        <Card key={product.id.toString()} id={product.id.toString()} title={product.title} description={product.description} image={product.image} price={product.price}></Card>
                    ))}
                </Suspense>
            </div>
        </section>
    )
}