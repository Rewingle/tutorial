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

const NavBar: React.FC = () => {

    const cartCount = useCart(state => state.cartCount)
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><Link href={'/about'}>About</Link></MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Logout</MenubarTrigger>

            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>{cartCount}</MenubarTrigger>

            </MenubarMenu>
        </Menubar>
    );
};

export default NavBar;