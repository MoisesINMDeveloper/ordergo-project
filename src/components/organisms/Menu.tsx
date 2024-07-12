import React from 'react';
import {Product} from '@/constant/data';
import ProductDetail from '../molecules/ProductDetail';

interface MenuProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const Menu=({products,addToCart}: MenuProps) => {
    return (
        <div className="my-8">
            {products.map((product: Product) => (
                <ProductDetail
                    key={product.id}
                    product={product}
                    onAddToCart={(): void => addToCart(product)}
                />
            ))}
        </div>
    );
};

export default Menu;

