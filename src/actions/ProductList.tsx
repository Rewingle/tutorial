import Card from "@/components/Card";

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
    const res = await fetch('https://fakestoreapi.com/products')
    let products = await res.json();

    return(
        
        <section className="flex items-center justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product:Product,key:any)=>(
                <Card id={product.id.toString()} title={product.title} description={product.description} image={product.image} price={product.price}></Card>
            ))}
            </div>
        </section>
    )
}