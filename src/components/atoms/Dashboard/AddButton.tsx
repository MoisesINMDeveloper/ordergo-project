const AddButton=({onClick}: {onClick: () => void}) => {
    return (<button className=" border-solid border-2 text-gray-100 border-brown p-2 rounded-lg bg-red font-semibold mt-4 text-sm" onClick={onClick}>
        Agregar al pedido
    </button>);
}

export default AddButton;