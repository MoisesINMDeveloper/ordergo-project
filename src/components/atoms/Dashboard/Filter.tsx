import {useState,useEffect,useRef} from 'react';
import data,{Category} from '@/constant/data';
import FilterMenu from '@/components/molecules/FilterMenu';
import ButtonFilter from './ButtonFilter';

const FilterCategories=({onFilter}: {onFilter: (filteredCategories: Category[]) => void}) => {
    const {categories}=data;
    const [isOpen,setIsOpen]=useState(false);
    const [selectedCategories,setSelectedCategories]=useState<string[]>([]);
    const menuRef=useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside=(event: MouseEvent) => {
            if(menuRef.current&&!menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown',handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        };
    },[]);

    return (
        <div ref={menuRef}>
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

