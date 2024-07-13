import React from 'react';
import {Product} from '@/constant/data';
import ProductDetail from '../molecules/ProductDetail';

interface MenuProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const Menu=({products,addToCart}: MenuProps) => {
    return (
        <>
            {products.map((product: Product) => (
                <div
                    className='my-8' key={product.id}
                >
                    <ProductDetail
                        product={product}
                        onAddToCart={(): void => addToCart(product)}
                    />
                </div>
            ))}
        </>
    );
};

export default Menu;

