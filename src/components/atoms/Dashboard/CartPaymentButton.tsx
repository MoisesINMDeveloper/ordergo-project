
const CartPaymentButton=({onClick}: {onClick: () => void}) => (
    <button onClick={onClick} className="mt-4 w-full bg-red border-2 border-brown active:bg-yellow text-gray-300 active:text-brown py-2 rounded font-semibold">Pagar</button>
);

export default CartPaymentButton;
