"use client"
import React,{useState} from 'react';
import Menu from '@/components/organisms/Menu';
import data,{Category,Product} from '@/constant/data';
import InputFilter from '@/components/atoms/Dashboard/InputFilter';
import FilterCategories from '@/components/atoms/Dashboard/Filter';

const Dashboard=() => {
    const {categories}=data;
    const [searchTerm,setSearchTerm]=useState('');
    const [filteredCategories,setFilteredCategories]=useState<Category[]>(categories);

    // Función para agregar productos al carrito (ejemplo básico)
    const addToCart: (product: Product) => void=(product: Product): void => {
        console.log(`Agregado al carrito: ${product.title}`);
        // Aquí puedes implementar la lógica para agregar productos al carrito
    };

    // Función para manejar el cambio en el término de búsqueda
    const handleSearch: (term: string) => void=(term: string): void => {
        setSearchTerm(term);
    };

    // Filtrar productos según el término de búsqueda
    const displayedCategories: {products: Product[]; id: number,name: string}[]=filteredCategories.map((category: Category) => ({
        ...category,
        products: category.products.filter((product: Product): boolean =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }));

    return (
        <section className="flex flex-col justify-center items-center mt-12">

            <div className='flex flex-row justify-between items-center gap-8'>
                <InputFilter onSearch={handleSearch} />
                <FilterCategories onFilter={setFilteredCategories} />
            </div>
            <div>
                {displayedCategories.map((category: Category) => (
                    <Menu key={category.id} products={category.products} />
                ))}
            </div>
        </section>
    );
};

export default Dashboard;
