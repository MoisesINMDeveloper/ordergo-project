"use client"
import {GiHamburger} from 'react-icons/gi';

const IconBurger=({onClick,productCount}: {onClick: () => void; productCount: number;}) => {
    return (
        <div>
            <button className="w-auto h-auto bg-transparent" onClick={onClick}>
                <GiHamburger className="mr-2 w-6 h-6 text-yellow" />
            </button>
            {productCount>0&&(
                <span className="absolute top-2 right-4  bg-green rounded-full w-4 h-4 text-xs flex items-center justify-center text-black font-bold">
                    {productCount}
                </span>
            )}
        </div>
    );
}

export default IconBurger;
