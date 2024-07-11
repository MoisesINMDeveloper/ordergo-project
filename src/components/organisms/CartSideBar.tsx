import React from 'react';
import {useCart} from '@/hooks/useCart';
import CartCommentsComponent from '../atoms/Dashboard/CartComments';
import CartItemComponent from '../atoms/Dashboard/CartItem';
import CartPaymentButton from '../atoms/Dashboard/CartPaymentButton';
import CartTotalComponent from '../atoms/Dashboard/CartTotal';
import {MdOutlineCancel} from 'react-icons/md';


const CartSidebar=({isOpen,onClose}: {isOpen: boolean; onClose: () => void;}) => {
    const {cartItems,updateQuantity,removeFromCart}=useCart();

    const total=cartItems.reduce(
        (acc,item) => acc+(item.product.price*item.quantity),
        0
    );

    return (
        <div className={`fixed z-40 top-10 right-0 h-auto w-80 border-2 border-t-0 rounded-lg rounded-t-none border-brown text-gray-300 bg-[#000000] shadow-lg transition-transform transform ${isOpen? 'translate-x-0':'translate-x-full'}`}>
            <button onClick={onClose} className="p-4"><MdOutlineCancel className="text-brown h-8 w-8" />
            </button>
            <div className="p-4 pt-0">
                <h2 className="text-xl font-bold mb-4">Cesta de pedido</h2>
                <ul>
                    {cartItems.map(item => (
                        <CartItemComponent key={item.product.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                    ))}
                </ul>
                <CartTotalComponent total={total} />
                <CartCommentsComponent />
                <CartPaymentButton />
            </div>
        </div>
    );
};

export default CartSidebar;

