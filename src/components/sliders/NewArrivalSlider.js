import Slider from 'react-slick';

const NewArrivalSlider = () => {
  return (
    <Slider {...newArrivalSettings} className="new-arrival-products-holder">
      {slides.map(slide => (
        <div className="new-arrival-products" key={slide.key}>
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
  arrows:false,
  centerMode: true,
  centerPadding: '20px 0 0',
  lazyLoad: true,
};

const slides = [
  {
    key: 0,
    imgSrc: '/images/new-arrival.webp',
    alt: 'new-arrival',
    productName: 'Yellow Beret',
    productPrice: '12',
  },
  {
    imgSrc: '/images/new-arrival-1.webp',
    alt: 'new_arrival_1',
    productName: 'Longie Sleeve',
    productPrice: '12',   
  },
  {
    imgSrc: '/images/new-arrival-2.png',
    alt: 'new-arrival-2',
    productName: 'Pink Harness',
    productPrice: '12',
  },
];

export default NewArrivalSlider;
