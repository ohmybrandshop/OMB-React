import Slider from 'react-slick';

const CategoriesSlider = () => {
    return (
        <Slider {...categorySliderSettings}>
            {slides.map((slides) => (
                <div className="categories-content">
                    <img src={slides.imgSrc} alt={slides.alt} />
                    <span className="category-text"> {slides.text} </span>
                </div>
            ))}
        </Slider>
    );
};

const categorySliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
};

const slides = [
    {
        imgSrc: '/images/new-category.png',
        alt: 'new-category',
        text: 'New In',
    },
    {
        imgSrc: '/images/summer-category.png',
        alt: 'summer-category-alt',
        text: 'Summer',
    },
    {
        imgSrc: '/images/outlet-category.png',
        alt: 'outlet-category-alt',
        text: 'Pets',
    },
    {
        imgSrc: '/images/winter-category.png',
        alt: 'winter-category',
        text: 'Winter',
    },
    {
        imgSrc: '/images/winter-category.png',
        alt: 'winter-category',
        text: 'Winter',
    },
];
export default CategoriesSlider;
