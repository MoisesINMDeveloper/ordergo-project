"use client"
import React,{createContext,useContext,useState,type Context} from 'react';

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
    updateQuantity: (title: string,newQuantity: number) => void;
    removeFromCart: (title: string) => void;
    getTotalItems: () => number;
}

const CartContext: Context<CartContextType|undefined>=createContext<CartContextType|undefined>(undefined);

export const CartProvider=({children}: {children: React.ReactNode}) => {
    const [cartItems,setCartItems]=useState<CartItem[]>([]);

    const addToCart: (product: Product) => void=(product: Product): void => {
        const existingItem: CartItem|undefined=cartItems.find(item => item.product.title===product.title);

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

    const updateQuantity: (title: string,newQuantity: number) => void=(title: string,newQuantity: number): void => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.product.title===title? {...item,quantity: newQuantity}:item
            )
        );
    };

    const removeFromCart: (title: string) => void=(title: string): void => {
        setCartItems(prevItems => prevItems.filter(item =>
            item.product.title!==title
        ));
    };

    const getTotalItems: () => number=(): number => {
        return cartItems.reduce((total: number,item: CartItem): number => total+item.quantity,0);
    };

    return (
        <CartContext.Provider value={{cartItems,addToCart,updateQuantity,removeFromCart,getTotalItems}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart: () => CartContextType=(): CartContextType => {
    const context: CartContextType|undefined=useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
