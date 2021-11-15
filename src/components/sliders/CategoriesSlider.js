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
    arrows:false,
    centerMode: true,
    centerPadding:'20px 0 0',
    lazyLoad: true,
};

const slides = [
    {
        imgSrc: '/images/new-category.webp',
        alt: 'new-category',
        text: 'New In',
    },
    {
        imgSrc: '/images/summer-category.webp',
        alt: 'summer-category-alt',
        text: 'Summer',
    },
    {
        imgSrc: '/images/outlet-category.webp',
        alt: 'outlet-category-alt',
        text: 'Pets',
    },
    {
        imgSrc: '/images/winter-category.webp',
        alt: 'winter-category',
        text: 'Winter',
    },
    {
        imgSrc: '/images/winter-category.webp',
        alt: 'winter-category',
        text: 'Winter',
    },
];
export default CategoriesSlider;
