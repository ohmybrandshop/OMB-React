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
        <img {...slide} />
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
    key: 2,
    src: '/images/header-bg-2.png',
    alt: 'header-image3',
    className: 'header-special-image'
  },
  {
    key: 0,
    src: '/images/header-bg.png',
    alt: 'header-image1',
  },
  {
    key: 1,
    src: '/images/header-bg-1.png',
    alt: 'header-image2',
  }
]

export default BannerSlider;
