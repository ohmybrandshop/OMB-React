import './css/App.css';
import './../node_modules/slick-carousel/slick/slick.css';
import './../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import headerBg from './images/header-bg.png';
import fashion from './images/fashion-image.png';
import avatar from './images/avatar.png';
import item from './images/item.png';
import item1 from './images/item-1.png';
import item2 from './images/item-2.png';
import newCategory from './images/new-category.png';
import summerCategory from './images/summer-category.png';
import winterCategory from './images/winter-category.png';
import outletCategory from './images/outlet-category.png';
import menSale from './images/men-sale.png';
import saleLogo from './images/sale-logo.svg';
import womenSale from './images/women-sale.png';
import christmasSale from './images/christmas-sale.png';
import christmasSale1 from './images/christmas-sale-1.png';
import newArrival from './images/new-arrival.png';
import newArrival1 from './images/new-arrival-1.png';
import newCollection from './images/new-collection.png';
import shipping from './images/shipping.svg';
import payment from './images/payment.svg';
import guarentee from './images/guarentee.svg';
import Navbar from './components/Navbar';

function App() {
    const bannerSettings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
    };

    const productsSliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 2,
        swipeToSlide: true,
        arrows: false,
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

    const saleSliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
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

    return (
        <div className="OMB">
            <Navbar />

            <div className="banner-content-holder">
                <div className="slider-image">
                    <Slider {...bannerSettings}>
                        <img src={headerBg} alt="header-image1" />
                        <img src={headerBg} alt="header-image2" />
                        <img src={headerBg} alt="header-image3" />
                        <img src={headerBg} alt="header-image4" />
                    </Slider>
                </div>
                <div className="banner-content">
                    <h1 className="banner-heading">
                        Custom PJ's With Your Pet Character<span className="dot-color">.</span>
                    </h1>
                    <div className="banner-text">Your pet, is now your brand</div>
                </div>
                <ul className="button-link-list">
                    <li className="button-link">
                        <a href="#" className="btn">
                            Let's get started
                        </a>
                    </li>
                </ul>
            </div>

            <div className="fashion-part">
                <h3 className="fashion-heading" style={{ marginTop: 20 }}>
                    A new fashion world for every pet owner
                </h3>
                <div className="fashion-text">
                    Turn your pet photo into stunning custom PJ’s & Products with your pet character cartoon
                </div>
                <div className="side-image">
                    <img src={fashion} alt="fashion1" />
                    <span className="child-image">
                        <img src={avatar} alt="ava" />
                    </span>
                </div>
            </div>

            <div className="products-holder">
                <div className="products-content-holder">
                    <Slider {...productsSliderSettings}>
                        <div className="products-content">
                            <img src={item} alt="it" />
                            <span className="products-text">
                                <span className="orange-text">Docas</span> Winter Set
                            </span>
                        </div>
                        <div className="products-content">
                            <img src={item1} alt="item-1" />
                            <span className="products-text">
                                <span className="orange-text">Docas</span> Summer Set
                            </span>
                        </div>
                        <div className="products-content">
                            <img src={item2} alt="item-2" />
                            <span className="products-text">
                                <span className="orange-text">Docas</span> Character
                            </span>
                        </div>
                        <div className="products-content">
                            <img src={item2} alt="item-2" />
                            <span className="products-text">
                                <span className="orange-text">Docas</span> Character
                            </span>
                        </div>
                    </Slider>
                </div>

                <ul className="button-link-list">
                    <li className="button-link">
                        <a href="#" className="btn">
                            Let's get started
                        </a>
                    </li>
                </ul>
            </div>

            <div className="categories-holder">
                <div className="categories-header-holder">
                    <h5 className="categories-header">Categories</h5>
                    <div className="swipe-right">
                        <a href="#" className="bold">
                            Swipe right-left
                        </a>{' '}
                        to see more
                    </div>
                </div>
                <div className="categories-slider-holder">
                    <div className="categories-slider">
                        <Slider {...categorySliderSettings}>
                            <div className="categories-content">
                                <img src={newCategory} alt="new-category" />
                                <span className="category-text"> New In </span>
                            </div>
                            <div className="categories-content">
                                <img src={summerCategory} alt="summer-category" />
                                <span className="category-text"> Summer </span>
                            </div>
                            <div className="categories-content">
                                <img src={outletCategory} alt="outlet-category" />
                                <span className="category-text"> Pets </span>
                            </div>
                            <div className="categories-content">
                                <img src={winterCategory} alt="winter-category" />
                                <span className="category-text"> Winter </span>
                            </div>
                            <div className="categories-content">
                                <img src={outletCategory} alt="outlet-category" />
                                <span className="category-text"> Pets </span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="sale-holder">
                <Slider {...saleSliderSettings}>
                    <div className="sale-content-holder">
                        <div className="sale-image">
                            <img src={menSale} alt="men-sale" />
                        </div>
                        <span className="off-text">
                            <span className="fire-icon">
                                <img src={saleLogo} alt="sale-logo" />
                            </span>
                            Up to 50% off
                        </span>
                        <span className="type-text"> Women </span>
                    </div>

                    <div className="sale-content-holder">
                        <div className="sale-image">
                            <img src={womenSale} alt="women-sale" />
                        </div>
                        <span className="off-text">
                            <span className="fire-icon">
                                <img src={saleLogo} alt="sale-logo" />
                            </span>
                            Up to 50% off
                        </span>
                        <span className="type-text"> Men </span>
                    </div>

                    <div className="sale-content-holder">
                        <div className="sale-image">
                            <img src={christmasSale} alt="christmas-sale" />
                        </div>
                        <span className="type-text"> Christmas </span>
                    </div>

                    <div className="sale-content-holder">
                        <div className="sale-image">
                            <img src={christmasSale1} alt="christmas-sale-1" />
                        </div>
                        <span className="type-text"> Chrismtas </span>
                    </div>
                </Slider>
            </div>

            <div className="new-arrival-holder">
                <div className="new-arrival-heading-holder">
                    <h5 className="new-arrival-heading">New arrivals</h5>
                    <a href="#" className="view-all">
                        View all
                    </a>
                </div>
                <div className="new-arrival-products-holder">
                    <Slider {...newArrivalSettings}>
                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src={newArrival} alt="new-arrival" />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Longie Sleeve</h6>
                                <span className="product-price"> $12 </span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <a href="" className="btn">
                                            Customize{' '}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src={newArrival1} />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Yellow Beret</h6>
                                <span className="product-price"> $12 </span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <a href="" className="btn">
                                            Customize{' '}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src={newArrival1} />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Long Sleeves</h6>
                                <span className="product-price"> $12 </span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <a href="" className="btn">
                                            Customize{' '}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="new-collection">
                <img src={newCollection} />
            </div>

            <div className="information-holder">
                <div className="info-content-holder">
                    <img src={shipping} />
                    <div className="info-content-heading">Free shipping over $60</div>
                    <div className="info-content-text">1-3 business days with Worldwide Express Shipping</div>
                </div>
                <div className="info-content-holder">
                    <img src={payment} />
                    <div className="info-content-heading">Secure payment methods</div>
                    <div className="info-content-text">Fast and Easy!</div>
                </div>
                <div className="info-content-holder">
                    <img src={guarentee} />
                    <div className="info-content-heading">Happines 100% Guaranteed</div>
                    <div className="info-content-text">Review your order simultion before producing!</div>
                </div>
            </div>

            <div class="divider"></div>
        </div>
    );
}

export default App;
