// InfoRow.tsx

interface InfoRowProps {
    label: string;
    value: string;
}

const InfoRow: React.FC<InfoRowProps>=({label,value}) => (
    <p className="mb-2 flex flex-row items-center justify-between">
        <strong>{label}:</strong> {value}
    </p>
);

export default InfoRow;
