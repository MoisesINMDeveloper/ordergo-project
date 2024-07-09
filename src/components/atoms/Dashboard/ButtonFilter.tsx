import {IoFilter} from 'react-icons/io5';

const ButtonFilter=({onClick}: {onClick: () => void}) => (
    <button className="w-auto h-auto bg-transparent" onClick={onClick}>
        <IoFilter className="mr-2 w-6 h-6 text-brown" />
    </button>
);

export default ButtonFilter;