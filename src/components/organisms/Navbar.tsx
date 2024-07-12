"use client";

import React,{useState} from 'react';
import IconBurger from '../atoms/Navbar/IconBurger';
import TitleName from '../atoms/Navbar/TitleName';
import MenuNavbar from '../atoms/Navbar/NavbarMenu';
import {useCart} from '@/hooks/useCart';
import CartSidebar from './CartSideBar';

const Navbar=() => {
    const [isCartOpen,setIsCartOpen]=useState(false);
    const {cartItems}=useCart();

    const handleIconBurgerClick: () => void=(): void => {
        setIsCartOpen(!isCartOpen);
    };

    const handleNavbarMenuClick: () => void=(): void => {
        console.log('Abrir menú de navegación');
    };

    return (
        <div>
            <div className="z-50 top-0 fixed h-10 w-screen flex  flex-row-reverse justify-between items-center px-4 pt-2 bg-brown box-shadow text-black text-lg">
                <div className="flex flex-row gap-2">
                    <TitleName title={"MOSTAZA"} />
                    <IconBurger onClick={handleIconBurgerClick} productCount={cartItems.length} />
                </div>
                <MenuNavbar onClick={handleNavbarMenuClick} />
            </div>
            <CartSidebar isOpen={isCartOpen} onClose={(): void => setIsCartOpen(false)} />
        </div>
    );
};

export default Navbar;
