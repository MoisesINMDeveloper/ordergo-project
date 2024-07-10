import {useState,useEffect} from 'react';
import data,{Category} from '@/constant/data';
import FilterMenu from '@/components/molecules/FilterMenu';
import ButtonFilter from './ButtonFilter';

const FilterCategories=({onFilter}: {onFilter: (filteredCategories: Category[]) => void}) => {
    const {categories}=data;
    const [isOpen,setIsOpen]=useState(false);
    const [selectedCategories,setSelectedCategories]=useState<string[]>([]);

    const toggleMenu=(): void => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange=(category: string): void => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat!==category)
                :[...prevSelected,category]
        );
    };

    useEffect(() => {
        const filteredCategories=categories.filter((category) =>
            selectedCategories.length===0||selectedCategories.includes(category.name)
        );
        onFilter(filteredCategories);
    },[selectedCategories,categories,onFilter]);

    return (
        <div>
            <ButtonFilter onClick={toggleMenu} isOpen={isOpen} />
            {isOpen&&(
                <div>
                    <FilterMenu
                        categories={categories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>
            )}
        </div>
    );
};

export default FilterCategories;


