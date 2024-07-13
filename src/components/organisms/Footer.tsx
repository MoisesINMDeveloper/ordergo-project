import React from 'react';
import {FaInstagram,FaWhatsapp} from 'react-icons/fa';

const Footer=() => {
    return (
        <footer className="bg-black text-white py-4 border-t-2 border-brown shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-yellow-500">
                        <h1 className="text-xl font-bold">Mostaza Burger</h1>
                        <p className="mt-1 text-sm">La mejor comida rápida en la ciudad</p>
                    </div>
                    <div className="text-brown-500 text-sm">
                        <p>&copy; 2024 Mostaza Burger. Todos los derechos reservados.</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://www.instagram.com/mostazaburger" target="_blank" rel="noopener noreferrer" className="text-yellow-500">
                        <FaInstagram size={32} />
                    </a>
                    <a href="https://wa.me/4124676968" target="_blank" rel="noopener noreferrer" className="text-yellow-500">
                        <FaWhatsapp size={32} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
