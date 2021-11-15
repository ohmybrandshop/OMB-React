import Slider from 'react-slick';

const SaleSlider = () => {
    return (
        <Slider className="sale-holder" {...saleSliderSettings}>
            {saleSlides.map((slide) => (
                <div className="sale-content-holder">
                    <div className="sale-image">
                        <img src={slide.imgSrc} alt={slide.alt} />
                    </div>
                    <span className="off-text">
                        <span className="fire-icon">
                            <img src="/images/sale-logo.svg" alt="sale_logo" />
                        </span>
                        Up to 50% off
                    </span>
                    <span className="type-text">{slide.text}</span>
                </div>
            ))}
            {christmasSlides.map((slide) => (
                <div className="sale-content-holder">
                    <div className="sale-image">
                        <img src={slide.imgSrc} alt={slide.alt} />
                    </div>
                    <span className="type-text">{slide.text}</span>
                </div>
            ))}
        </Slider>
    );
};

const saleSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
};

const saleSlides = [
    {
        imgSrc: '/images/men-sale.png',
        alt: 'men_sale',
        text: 'Women',
    },
    {
        imgSrc: '/images/women-sale.png',
        alt: 'women_sale',
        text: 'Men',
    },
];

const christmasSlides = [
    {
        imgSrc: '/images/christmas-sale.png',
        alt: 'christmas_sale',
        text: 'Christmas',
    },
    {
        imgSrc: '/images/christmas-sale-1.png',
        alt: 'christmas_sale_1',
        text: 'Christmas',
    },
];

export default SaleSlider;
