import type {ChangeEvent} from "react";

interface CartCommentsComponentProps {
    comment: string,
    setComment: (comment: string) => void
}
const CartCommentsComponent: React.FC<CartCommentsComponentProps>=({comment,setComment}: CartCommentsComponentProps) => (
    <div className="mt-4">
        <textarea value={comment} onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => setComment(e.target.value)} className="w-full outline-none p-2 border border-brown rounded bg-transparent" placeholder="Informacion adicional sobre el pedido" />
    </div>
);

export default CartCommentsComponent;
