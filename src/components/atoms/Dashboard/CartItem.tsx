
import {TbBasketCancel} from 'react-icons/tb';

const CartItemComponent=({item,updateQuantity,removeFromCart}: {item: any; updateQuantity: any; removeFromCart: any;}) => (
    <li key={item.product.id} className="mb-4 text-gray-300">
        <div className="flex justify-between items-center">
            <div>
                <p className="font-semibold">{item.product.title}</p>
                <p>${item.product.price.toFixed(2)}</p>
            </div>
            <div className='flex flex-row items-center justify-center'>

                <div className="flex items-center">
                    <button className="px-2   text-red-500" onClick={(): string => updateQuantity(item.product.title,item.quantity-1)}>-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="px-2 text-green-500" onClick={(): string => updateQuantity(item.product.title,item.quantity+1)}>+</button>
                </div>
                <button className="px-2 text-red-500" onClick={(): string => removeFromCart(item.product.title)}>
                    <TbBasketCancel className='h-5 w-5' />
                </button>
            </div>
        </div>
    </li>
);

export default CartItemComponent;
