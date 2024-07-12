// ActionButton.tsx

interface ActionButtonProps {
    onClick: () => void;
    label: string;
    color: string;
}

const ActionButton: React.FC<ActionButtonProps>=({onClick,label,color}) => (
    <button onClick={onClick} className={`px-4 py-2 rounded mt-4 ${color}`}>
        {label}
    </button>
);

export default ActionButton;
