
"use client"
import React,{createContext,useContext,useState} from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (title: string,newQuantity: number) => void; // Cambiado a título en lugar de ID
    removeFromCart: (title: string) => void; // Cambiado a título en lugar de ID
}

const CartContext=createContext<CartContextType|undefined>(undefined);

export const CartProvider=({children}: any) => {
    const [cartItems,setCartItems]=useState<CartItem[]>([]);

    const addToCart=(product: Product) => {
        const existingItem=cartItems.find(item => item.product.title===product.title);

        if(existingItem) {
            updateQuantity(product.title,existingItem.quantity+1);
        } else {
            setCartItems(prevItems => [
                ...prevItems,
                {
                    product: {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        images: product.images,
                        description: product.description,
                    },
                    quantity: 1,
                },
            ]);
        }
    };

    const updateQuantity=(title: string,newQuantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.product.title===title? {...item,quantity: newQuantity}:item
            )
        );
    };

    const removeFromCart=(title: string) => {
        setCartItems(prevItems => prevItems.filter(item =>
            item.product.title!==title
        ));
    };

    return <CartContext.Provider value={{cartItems,addToCart,updateQuantity,removeFromCart}}>{children}</CartContext.Provider>;
};

export const useCart=() => {
    const context=useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
