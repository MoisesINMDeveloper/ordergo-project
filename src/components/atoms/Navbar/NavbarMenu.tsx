
import React from 'react';
import {IoMdMenu} from 'react-icons/io';

const MenuNavbar=({onClick}: {onClick: () => void;}) => {
    return (
        <button className="w-auto h-auto mb-2" onClick={onClick}>
            <IoMdMenu className=" w-8 h-8 text-yellow" />
        </button>
    );
}

export default MenuNavbar;
