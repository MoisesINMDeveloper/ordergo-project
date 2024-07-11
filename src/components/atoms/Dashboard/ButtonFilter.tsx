import {IoFilter} from 'react-icons/io5';

const ButtonFilter=({onClick,isOpen}: {onClick: () => void,isOpen: boolean}) => (
    <button className="w-auto h-auto bg-transparent " onClick={onClick}>
        <IoFilter className={`mr-2 w-8 h-8 ${isOpen? 'text-yellow':'text-brown'}`} />
    </button>
);

export default ButtonFilter;
