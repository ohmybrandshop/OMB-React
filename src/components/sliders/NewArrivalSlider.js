import Slider from 'react-slick';

const NewArrivalSlider = () => {
    return (
        <Slider {...newArrivalSettings} className="new-arrival-products-holder">
            {slides.map((slide) => (
                <div className="new-arrival-products">
                    <div className="new-arrival-image">
                        <img src={slide.imgSrc} alt={slide.alt} />
                    </div>
                    <div className="products-text-holder">
                        <h6 className="product-heading">{slide.productName}</h6>
                        <span className="product-price"> ${slide.productPrice} </span>
                        <ul className="button-link-list">
                            <li className="button-link">
                                <a href="" className="btn">
                                    Customize
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

const newArrivalSettings = {
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
        imgSrc: '/images/new-arrival.png',
        alt: 'new-arrival',
        productName: 'Longie Sleeve',
        productPrice: '12',
    },
    {
        imgSrc: '/images/new-arrival-1.png',
        alt: 'new_arrival_1',
        productName: 'Yellow Beret',
        productPrice: '12',
    },
    {
        imgSrc: '/images/new-arrival-1.png',
        alt: 'new_arrival_long_sleeves',
        productName: 'Long Sleeves',
        productPrice: '12',
    },
];

export default NewArrivalSlider;
