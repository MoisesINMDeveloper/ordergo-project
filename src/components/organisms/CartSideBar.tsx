import React,{useEffect,useRef,useState} from 'react';
import {useCart} from '@/hooks/useCart';
import CartCommentsComponent from '../atoms/Dashboard/CartComments';
import CartItemComponent from '../atoms/Dashboard/CartItem';
import CartPaymentButton from '../atoms/Dashboard/CartPaymentButton';
import CartTotalComponent from '../atoms/Dashboard/CartTotal';
import OnCloseCart from '../atoms/Navbar/onCloseCart';
import PaymentModal from '../modals/PaymentModal';
import NotificationComponent from "../modals/Notification"
import {join,parse} from 'path';
import {title} from 'process';
import {stringify} from 'querystring';
const CartSidebar=({isOpen,onClose}: {isOpen: boolean; onClose: () => void;}) => {
    const {cartItems,updateQuantity,removeFromCart}=useCart();
    const sidebarRef=useRef<HTMLDivElement>(null);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [isNotificationVisible,setIsNotificationVisible]=useState(false);
    const [comment,setComment]=useState("");

    const total: number=cartItems.reduce(
        (acc: number,item): number => acc+(item.product.price*item.quantity),
        0
    );

    useEffect((): () => void => {
        const handleClickOutside=(event: MouseEvent): void => {
            if(sidebarRef.current&&!sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if(isOpen) {
            document.addEventListener('mousedown',handleClickOutside);
        } else {
            document.removeEventListener('mousedown',handleClickOutside);
        }

        return (): void => {
            document.removeEventListener('mousedown',handleClickOutside);
        };
    },[isOpen,onClose]);

    const handlePaymentClick: () => void=(): void => {
        const orderSummary: string=cartItems.map(item => `${item.quantity} ${item.product.title}`).join(', ');
        const orderInfo={
            orderSummary,
            total: `$${total}`,
            comment
        };
        localStorage.setItem('cartInfo',JSON.stringify(orderInfo));
        setIsModalOpen(true);
        onClose();
    };

    const handleConfirm: (referenceNumber: string) => void=(referenceNumber: string): void => {
        setIsModalOpen(false);
        setIsNotificationVisible(true);

        // Ocultar notificación después de 5 segundos
        setTimeout((): void => setIsNotificationVisible(false),5000);

        // Esperar 5 segundos antes de abrir el enlace de WhatsApp
        setTimeout((): void => {
            const cartInfo: any=JSON.parse(localStorage.getItem('cartInfo')!);
            const phoneNumber="584124676968";
            const message=`Hola, me gustaría realizar el pago del pedido.\n\nDetalles del pedido:\n${cartInfo.orderSummary}\nMonto: ${cartInfo.total}\nComentario: ${cartInfo.comment}\nReferencia: ${referenceNumber}`;
            const whatsappLink=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappLink,'_blank');
        },5000); // 5000 ms = 5 segundos
    };

    return (
        <>
            <div ref={sidebarRef} className={`fixed z-40 top-10 right-0 h-auto w-80 border-2 border-t-0 rounded-lg rounded-t-none border-brown text-gray-300 bg-[#000000] shadow-lg transition-transform transform ${isOpen? 'translate-x-0':'translate-x-full'}`}>
                <OnCloseCart onClick={onClose} />
                <div className="p-4 pt-0">
                    <h2 className="text-xl font-bold mb-4">Cesta de pedido</h2>
                    <ul>
                        {cartItems.map(item => (
                            <CartItemComponent key={item.product.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                        ))}
                    </ul>
                    <CartTotalComponent total={total} />
                    <CartCommentsComponent comment={comment} setComment={setComment} />
                    <CartPaymentButton onClick={handlePaymentClick} />
                </div>
            </div>
            {isModalOpen&&<PaymentModal total={total} onConfirm={handleConfirm} onClose={(): void => setIsModalOpen(true)} />}
            {isNotificationVisible&&<NotificationComponent />}
        </>
    );
};

export default CartSidebar;
