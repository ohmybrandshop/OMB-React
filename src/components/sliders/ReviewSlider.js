import Slider from 'react-slick';

const ReviewSlider = () => {
    return (
        <Slider {...reviewSliderSettings}>
            {slides.map((slide) => (
                <li className="reviews-slider-content-holder">
                    <div className="review-slider-content">
                        <img src={slide.imgSrc} />
                        <span className="checkmark">
                            <img src="/images/checkmark.webp" />
                        </span>
                    </div>
                </li>
            ))}
        </Slider>
    );
};

const reviewSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows:false,
    centerMode: true,
    centerPadding:'100px',
};

const slides = [
    {
        imgSrc: '/images/review-image.webp',
        alt: 'review-1',
    },
    {
        imgSrc: '/images/review-image.webp',
        alt: 'review-2',
    },
    {
        imgSrc: '/images/review-image.webp',
        alt: 'review-3',
    },
];

export default ReviewSlider;
