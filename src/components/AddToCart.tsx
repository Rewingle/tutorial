"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/store/useCart"
import { AiOutlineCheck } from "react-icons/ai";
/* import createUser from "@/actions/createUser";
import ReactLoading from 'react-loading';
 */

export default function AddToCart(props: { name: string, description: string, price: number, imageUrl: string, userId: string }) {

    const addCart = useCart((state: any) => state.increaseCartCount)
    const [isCart, setCart] = useState<boolean>(false)

    const { name, description, price, imageUrl, userId } = props

    return (
        <Button className="bg-lime-600 w-full" disabled={isCart ? true : false} onClick={async () => {
            addCart();
            //OPTIMISTIC APPROACH
            setCart(true);
            const res = await fetch('http://localhost:3000/api/addProductToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price,
                    image: imageUrl,
                    user: { connect: { id: userId } } // Replace 'userId' with the actual user ID
                })
            });
            if (!res.ok) {
                setCart(false);
            }
            const data = await res.json()
            console.log(data)
        }}>{isCart ? <AiOutlineCheck /> : 'ADD TO CART'}</Button>
    )
}