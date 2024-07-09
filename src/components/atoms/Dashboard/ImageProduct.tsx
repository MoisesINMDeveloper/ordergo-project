import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageProductProps {
    images: string[];
    alt: string;
}

const ImageProduct: React.FC<ImageProductProps>=({images,alt}) => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='w-60 h-52 box-shadow  rounded-lg  mb-4 overflow-hidden'>
            <Slider {...settings}>
                {images.map((src,index) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={index}
                        src={src}
                        alt={alt}
                        className=" object-cover"
                    />
                ))}
            </Slider>
        </div>
    );
};

export default ImageProduct;
