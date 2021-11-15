import Slider from 'react-slick';

const BannerSlider = (props) => {    
    return (
        <Slider className="slider-image"
            {...bannerSettings}
            afterChange={(index) => {
                if (index === 1 || index === 3) props.setBannerTextIsBlack(false);
                else props.setBannerTextIsBlack(true);
            }}
        >
            {slides.map(slide => (
                <img src={slide.imgSrc} alt={slide.imgSrc} />
            ))}
        </Slider>
    );
};

const bannerSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
};

const slides = [
    {
        imgSrc: '/images/header-bg.png',
        alt: 'header-image1'
    },
    {
        imgSrc: '/images/header-bg-1.png',
        alt: 'header-image2'
    },
    {
        imgSrc: '/images/header-bg.png',
        alt: 'header-image3'
    },
    {
        imgSrc: '/images/header-bg-1.png',
        alt: 'header-image4'
    },
]

export default BannerSlider;
