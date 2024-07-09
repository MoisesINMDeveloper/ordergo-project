import AddButton from "../atoms/Dashboard/AddButton";
import Description from "../atoms/Dashboard/Description";
import ImageProduct from "../atoms/Dashboard/ImageProduct";
import Price from "../atoms/Dashboard/Price";
import TitleProduct from "../atoms/Dashboard/TitleProduct";

const ProductDetail=({product,onAddToCart}: {product: {id: number,title: string,price: number,images: string[],description: string},onAddToCart: () => void;}) => {
    return (
        <div className="flex flex-col justify-between items-center w-72 h-auto p-5 border-2 border-brown text-white rounded-lg">
            <div>
                <div className='flex flex-row justify-between items-center mb-4'>
                    <TitleProduct title={product.title} />
                    <Price price={product.price} />
                </div>
                <ImageProduct images={product.images} alt={product.title} />
                <Description text={product.description} />
            </div>
            <AddButton onClick={onAddToCart} />
        </div>
    );
};

export default ProductDetail;
