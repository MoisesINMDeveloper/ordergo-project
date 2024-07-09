
const CheckboxInput=({id,checked,onChange,label}: {id: string,checked: boolean,onChange: () => void,label: string}) => {
    return (
        <div className="flex items-center mb-2">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className="ml-2">
                {label}
            </label>
        </div>
    );
};

export default CheckboxInput;
