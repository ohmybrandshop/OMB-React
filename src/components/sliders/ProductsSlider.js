import Slider from 'react-slick';

const ProductsSlider = () => {
  return (
    <Slider className="products-content-holder" {...productsSliderSettings}>
      {slides.map((slide) => (
        <div className="products-content" key={slide.key}>
          <img src={slide.imgSrc} alt={slide.alt} />
          <span className="products-text">
            <span className="orange-text">Docas</span>
            {slide.text}
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
  arrows: false,
  lazyLoad: true,
};

const slides = [
  {
    key: 0,
    imgSrc: '/images/item.webp',
    alt: 'it',
    text: 'Winter Set',
  },
  {
    key: 1,
    imgSrc: '/images/item-1.webp',
    alt: 'item-1',
    text: 'Summer Set',
  },
  {
    key: 2,
    imgSrc: '/images/item-2.webp',
    alt: 'item-2',
    text: 'Character',
  },
];

export default ProductsSlider;
