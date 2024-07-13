import React from 'react';
import {FaInstagram,FaWhatsapp} from 'react-icons/fa';

const ItemsMenu=() => {
    return (
        <div className="z-20 absolute w-auto top-10 left-2 bg-[#000000c2] border-l-2 border-b-2 border-r-2 rounded-t-none border-brown text-gray-200 shadow-lg rounded-lg p-4 transition-opacity duration-300 ease-in-out">
            <ul className=' justify-between'>

                <li className="p-2  text-yellow active:text-red flex gap-4 justify-between items-center">
                    <a className="text-sm" href="https://www.instagram.com/mostazaburger" target="_blank" rel="noopener noreferrer">
                        Mostaza Burger
                    </a>
                    <FaInstagram className="mr-2 h-6 w-6" />
                </li>
                <li className="p-2  flex text-yellow active:text-red items-center gap-5">
                    <a className="text-sm " href="https://wa.me/4124676968" target="_blank" rel="noopener noreferrer">
                        WhatsApp Burger
                    </a>
                    <FaWhatsapp className="mr-2 h-6 w-6" />
                </li>
            </ul>
        </div>
    );
}

export default ItemsMenu;
