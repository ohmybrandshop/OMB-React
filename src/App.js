import './css/App.css';
import './../node_modules/slick-carousel/slick/slick.css';
import './../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import headerBg from './images/header-bg.png';
import fashion from './images/fashion-image.png';
import Navbar from './components/Navbar';

function App() {

    const bannerSettings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
    };

    return (
        <div className="OMB">
            
            <Navbar />

            <div className="banner-content-holder">
                <div className="slider-image">
                    <Slider {...bannerSettings}>
                        <img src={headerBg} alt="" />
                        <img src={headerBg} alt="" />
                        <img src={headerBg} alt="" />
                        <img src={headerBg} alt="" />
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn">
                            Let's get started
                        </a>
                    </li>
                </ul>
            </div>

            <div className="fashion-part">
                <h3 className="fashion-heading" style={{marginTop: 20}}>A new fashion world for every pet owner</h3>
                <div className="fashion-text">
                    Turn your pet photo into stunning custom PJ’s & Products with your pet character cartoon
                </div>
                <div className="side-image">
                    <img src={fashion} alt="fashion" />
                </div>
            </div>
        </div>
    );
}

export default App;
