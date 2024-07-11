"use client"
import Link from 'next/link';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { useCart } from '@/store/useCart'
import { signOut } from 'next-auth/react';
import { auth } from '@/auth';
const NavBar = () => {

    //const cartCount = useCart(state => state.cartCount)
   /*  const session = await auth() */

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger><Link href={'/'}>Home</Link></MenubarTrigger>
       

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><Link href={'/products'}>Products</Link></MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={()=>signOut({callbackUrl:'/'})}>Logout</MenubarTrigger>

            </MenubarMenu>
        
        </Menubar>
    );
};

export default NavBar;