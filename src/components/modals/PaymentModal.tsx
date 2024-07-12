// PaymentModal.tsx
import React,{useState} from 'react';
import {IoMdCopy} from 'react-icons/io';
import data from '@/constant/data';
import ActionButton from '../atoms/Dashboard/ActionButton';
import InfoRow from '../atoms/Dashboard/InfoRow';

interface PaymentModalProps {
    total: number;
    onConfirm: (referenceNumber: string) => void;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps>=({total,onConfirm,onClose}) => {
    const {bank,code,cedula,phone}=data.paydates;
    const [referenceNumber,setReferenceNumber]=useState('');

    const handleCopy=() => {
        const textToCopy=`
            Banco: ${bank}
            DNI: ${cedula}
            Teléfono: ${phone}
            Monto: $${total.toFixed(2)}
        `;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="border-2 border-brown text-gray-300 bg-[#000000c2] p-4 rounded-lg shadow-lg">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-xl font-bold mb-4">Información de Pago</h2>
                    <IoMdCopy className='mb-4 w-6 h-6 cursor-pointer active:text-brown' onClick={handleCopy} />
                </div>
                <InfoRow label="Banco" value={bank} />
                <InfoRow label="Código" value={code} />
                <InfoRow label="Cedula" value={cedula} />
                <InfoRow label="Teléfono" value={phone} />
                <InfoRow label="Monto" value={`$${total.toFixed(2)}`} />
                <input
                    type="text"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    placeholder="Numero de referencia"
                    className="w-full p-2 mt-4 mb-4 border rounded border-brown bg-transparent outline-none"
                />
                <div className="flex justify-center space-x-2">
                    <ActionButton onClick={() => onConfirm(referenceNumber)} label="Confirmar" color="bg-green-500 active:bg-green text-white" />
                    <ActionButton onClick={onClose} label="Cancelar" color="bg-red-500 active:bg-red text-white" />
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
