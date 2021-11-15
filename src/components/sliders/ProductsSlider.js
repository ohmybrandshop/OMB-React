import Slider from 'react-slick';

const ProductsSlider = () => {
    return (
        <Slider className="products-content-holder" {...productsSliderSettings}>
            {slides.map((slides) => (
                <div className="products-content">
                    <img src={slides.imgSrc} alt={slides.alt} />
                    <span className="products-text">
                        <span className="orange-text">Docas</span> {slides.text}
                    </span>
                </div>
            ))}
        </Slider>
    );
};

const productsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 2,
    swipeToSlide: true,
    arrows: false,
};

const slides = [
    {
        imgSrc: '/images/item.png',
        alt: 'it',
        text: 'Winter Set',
    },
    {
        imgSrc: '/images/item-1.png',
        alt: 'item-1',
        text: 'Summer Set',
    },
    {
        imgSrc: '/images/item-2.png',
        alt: 'item-2',
        text: 'Character',
    },
    {
        imgSrc: '/images/item-2.png',
        alt: 'item-3',
        text: 'Character',
    },
];

export default ProductsSlider;
