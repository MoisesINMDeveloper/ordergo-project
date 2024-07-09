"use client"
import IconBurger from '../atoms/Navbar/IconBurger';
import TitleName from '../atoms/Navbar/TitleName';
import MenuNavbar from '../atoms/Navbar/NavbarMenu';

const Navbar=() => {
    // Simulación de contador de productos
    const productCount=5;

    const handleIconBurgerClick=() => {
        // Lógica para manejar la apertura del menú lateral
        console.log('Abrir menú lateral');
    };

    const handleNavbarMenuClick=() => {
        // Lógica para manejar el click en el menú de navegación
        console.log('Abrir menú de navegación');
    };

    return (
        <div className="h-10 flex flex-row-reverse justify-between items-center px-4 pt-2 bg-brown box-shadow text-black text-lg">

            <div className='flex flex-row gap-2'>
                <TitleName title={"MOSTAZA"} />

                <IconBurger onClick={handleIconBurgerClick} productCount={productCount} />
            </div>
            <MenuNavbar onClick={handleNavbarMenuClick} />
        </div>
    );
};

export default Navbar;