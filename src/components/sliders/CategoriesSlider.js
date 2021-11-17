import Slider from 'react-slick';

const CategoriesSlider = () => {
    return (
        <Slider {...categorySliderSettings}>
            {slides.map((slides) => (
                <div className="categories-content">
                    <img src={slides.imgSrc} alt={slides.alt} className={slides.className} />
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
    centerPadding:'20px 0px 0px',
    lazyLoad: true,
};

const slides = [
    {
        imgSrc: '/images/winter-category.webp',
        alt: 'winter-category',
        text: 'Winter',
        className: ''
    },
    {
        imgSrc: '/images/outlet-category.webp',
        alt: 'outlet-category-alt',
        text: 'Pets',
        className: ''
    },
    {
        imgSrc: '/images/summer.png',
        alt: 'summer-category',
        text: 'Summer',
        className: 'last-image'
    },
    {
        imgSrc: '/images/new-category.webp',
        alt: 'new-category',
        text: 'New In',
        className: ''   
    },
    {
        imgSrc: '/images/summer-category.webp',
        alt: 'summer-category-alt',
        text: 'Kids',
        className: ''
    },
];
export default CategoriesSlider;
