"use client";

import React,{useState} from 'react';
import {IoMdMenu,IoMdClose} from 'react-icons/io';
import ItemsMenu from './ItemsMenu';

const MenuNavbar=() => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const handleNavbarMenuClick: () => void=(): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <button className="w-auto h-auto mb-2" onClick={handleNavbarMenuClick}>
                {isMenuOpen? (
                    <IoMdClose className="w-8 h-8 text-yellow transition-all duration-1000 transform rotate-190" />
                ):(
                    <IoMdMenu className="w-8 h-8 text-yellow transition-all duration-1000 transform rotate-0" />
                )}
            </button>
            {isMenuOpen&&(
                <ItemsMenu />
            )}
        </div>
    );
};

export default MenuNavbar;



