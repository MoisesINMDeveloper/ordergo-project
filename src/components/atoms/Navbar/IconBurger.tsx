"use client"
import {useCart} from '@/hooks/useCart';
import {GiHamburger} from 'react-icons/gi';

const IconBurger=({onClick,productCount}: {onClick: () => void; productCount: number;}) => {
    const {getTotalItems}=useCart();

    return (
        <div>
            <button className="w-auto h-auto " onClick={onClick}>
                <GiHamburger className="mr-2 w-6 h-6 active:text-green text-yellow" />
            </button>
            {productCount>0&&(
                <span className="absolute top-2 right-4  bg-green rounded-full w-4 h-4 text-xs flex items-center justify-center text-black font-bold">
                    {getTotalItems()}
                </span>
            )}
        </div>
    );
}

export default IconBurger;
