import ProductInfo from "@/actions/ProductInfo"

export default function Product({ params }: { params: { id: string } }) {

    return (
        <div>
       
            <ProductInfo id={params.id}/>
        </div>
    )
}