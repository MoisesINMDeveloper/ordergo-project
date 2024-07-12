import {useState,type FormEvent} from 'react';



const InputFilter=({onSearch}: {onSearch: (searchTerm: string) => void;}) => {
    const [searchTerm,setSearchTerm]=useState('');

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string=event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <form action="" onSubmit={(e: FormEvent<HTMLFormElement>): void => e.preventDefault()}>
            <input className='border-solid border-2 placeholder:text-gray-500 outline-none bg-transparent border-brown rounded-lg  h-10 w-56 text-sm text-gray-200 px-2'
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Buscar en el menu"
            />
        </form>
    );
};

export default InputFilter;
