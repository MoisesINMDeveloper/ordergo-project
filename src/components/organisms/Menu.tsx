import React from 'react';
import {Product} from '@/constant/data'; // Importa la interfaz Product desde tus datos
import ProductDetail from '../molecules/ProductDetail';



const Menu=({products}: {products: Product[]}) => {
    const addToCart: (product: Product) => void=(product: Product): void => {
        // Función para agregar productos al carrito (puedes implementar la lógica aquí)
        console.log(`Agregado al carrito: ${product.title}`);
    };

    return (
        <div>

            <div className=" my-8">
                {products.map((product: Product) => (
                    <ProductDetail
                        key={product.id}
                        product={product}
                        onAddToCart={(): void => addToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;

