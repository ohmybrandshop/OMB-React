import Slider from 'react-slick';

const BannerSlider = (props) => {  
  return (
    <Slider className="slider-image"
      {...bannerSettings}
      afterChange={(index) => {
        if (index === 2) props.setBannerTextIsBlack(false);
        else props.setBannerTextIsBlack(true);
      }}
    >
      {slides.map(slide => (
        <img src={slide.imgSrc} alt={slide.imgSrc} className={slide.className} />
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
  arrows:false,
};

const slides = [
  {
    imgSrc: '/images/header-bg-2.png',
    alt: 'header-image3',
    className: 'header-special-image'
  },
  {
    imgSrc: '/images/header-bg.png',
    alt: 'header-image1',
    className: ''
  },
  {
    imgSrc: '/images/header-bg-1.png',
    alt: 'header-image2',
    className: ''
  }
]

export default BannerSlider;
