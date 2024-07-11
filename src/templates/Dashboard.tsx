"use client";

import React,{useState} from 'react';
import Menu from '@/components/organisms/Menu';
import data,{Category,Product} from '@/constant/data';
import InputFilter from '@/components/atoms/Dashboard/InputFilter';
import FilterCategories from '@/components/atoms/Dashboard/Filter';
import {useCart} from '@/hooks/useCart';

const Dashboard=() => {
    const {categories}=data;
    const [searchTerm,setSearchTerm]=useState('');
    const [filteredCategories,setFilteredCategories]=useState<Category[]>(categories);
    const {addToCart}=useCart();

    const handleSearch=(term: string) => {
        setSearchTerm(term);
    };

    const displayedCategories=filteredCategories.map(category => ({
        ...category,
        products: category.products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }));

    return (
        <section className="flex flex-col justify-center items-center mt-20 w-screen">
            <div className='flex flex-row justify-between items-center gap-8'>
                <InputFilter onSearch={handleSearch} />
                <FilterCategories onFilter={setFilteredCategories} />
            </div>
            <div>
                {displayedCategories.map((category) => (
                    <Menu key={category.id} products={category.products} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
};

export default Dashboard;
