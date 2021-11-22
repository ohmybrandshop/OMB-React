import { useState } from 'react';
import Footer from '../../components/Footer';
import BannerSlider from '../../components/sliders/BannerSlider';
import ProductsSlider from '../../components/sliders/ProductsSlider';
import CategoriesSlider from '../../components/sliders/CategoriesSlider';
import SaleSlider from '../../components/sliders/SaleSlider';
import NewArrivalSlider from '../../components/sliders/NewArrivalSlider';
import ReviewSlider from '../../components/sliders/ReviewSlider';
import DesignPreferSlider from '../../components/sliders/DesignPreferSlider';
import QualitySlider from '../../components/sliders/QualitySlider';
import InstaGallery from '../../components/InstaGallery';
import { Link } from 'react-router-dom';

const Home = () => {

  const [bannerTextIsBlack, setBannerTextIsBlack] = useState(true);

  return (
    <>      
      {/* Banner Section */}
      <div className="banner-content-holder">
        <BannerSlider setBannerTextIsBlack={setBannerTextIsBlack} />
        <div className="curve-image">
          <img src="/images/header-curve.png" />
        </div>
        <div className="banner-content">
          <h1 className="banner-heading" style={{ color: bannerTextIsBlack ? '#000' : '#fff' }}>
            Custom PJ's With Your Pet Character<span className="dot-color">.</span>
          </h1>
          <div className="banner-text" style={{ color: bannerTextIsBlack ? '#000' : '#fff' }}>
            Your pet, is now your brand
          </div>
        </div>
        <ul className="button-link-list">
          <li className="button-link">
            <a href="#" className="btn">
              Let's get started
            </a>
          </li>
        </ul>
      </div>

      {/* Fashion Section */}
      <div className="fashion-part">
        <h3 className="fashion-heading" style={{ marginTop: 20 }}>
          A new fashion world for every pet owner
        </h3>
        <div className="fashion-text">
          Turn your pet photo into stunning custom PJ’s & Products with your pet character cartoon
        </div>
        <div className="side-image">
          <img src="/images/fashion-image.webp" alt="fashion1" />
          <span className="child-image">
            <img src="/images/avatar.webp" alt="ava" />
          </span>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-holder">
        <ProductsSlider />
        <ul className="button-link-list">
          <li className="button-link">
            <a href="#" className="btn">
              Let's get started
            </a>
          </li>
        </ul>
      </div>

      {/* Catalog Section */}
      <div className="categories-holder">
        <div className="categories-header-holder">
          <h5 className="categories-header">
            <Link to="/catalog">
              Catalog
            </Link>            
          </h5>
          <div className="swipe-right">
            <a href="#" className="bold">
              Swipe right-left
            </a>{' '}
            to see more
          </div>
        </div>
        <div className="categories-slider-holder">
          <div className="categories-slider">
            <CategoriesSlider />
          </div>
        </div>
      </div>

      {/* Sale Section */}
      <SaleSlider />

      {/* New Arrival Section */}
      <div className="new-arrival-holder">
        <div className="new-arrival-heading-holder">
          <h5 className="new-arrival-heading">New arrivals</h5>
          <a href="#" className="view-all">
            View all
          </a>
        </div>
        <NewArrivalSlider />
      </div>

      {/* Video Section */}
      <div className="new-collection">
        <div dangerouslySetInnerHTML={{ __html: `
          <video height="406" loop muted autoplay playsinline>
            <source src="/images/autoplay.mp4" type="video/mp4" />
          </video>
        `}}>
        </div>
        <ul className="button-link-list">
          <li className="button-link">
            <a href="#" className="btn">
              Explore now
            </a>
          </li>
        </ul>
      </div>

      {/* Information Holder Section */}
      <div className="information-holder">
        <div className="info-content-holder">
          <img src="/images/shipping.svg" />
          <div className="info-content-heading">Free shipping over $60</div>
          <div className="info-content-text">1-3 business days with Worldwide Express Shipping</div>
        </div>
        <div className="info-content-holder">
          <img src="/images/payment.svg" />
          <div className="info-content-heading">Secure payment methods</div>
          <div className="info-content-text">Fast and Easy!</div>
        </div>
        <div className="info-content-holder">
          <img src="/images/guarentee.svg" />
          <div className="info-content-heading">Happines 100% Guaranteed</div>
          <div className="info-content-text">Review your order simultion before producing!</div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>


      {/* Design Prefer */}
      <div className="design-prefer">
        <h4 className="heading">Design you prefer</h4>
        <div className="design-text">
          Based on your selections we will create PJ’s & products matching with your pet cartoon.
        </div>
        <DesignPreferSlider />
        <div class="social-image">
          <img src="/images/social.webp" />
        </div>
      </div>

      {/* Quality Slider */}
      <QualitySlider />

      {/* How It Works Section */}
      <div className="how-it-works">
        <h5 className="how-it-works-heading">How it works</h5>
        <div className="hiw-content-holder">
          <div className="hiw-image">
            <img src="/images/hiw-browse.webp" />
          </div>
          <div className="hiw-heading">Browse the selection</div>
          <div className="hiw-text">Shop our selection of T-Shirts, Shirts, Pants, Sweaters and more.</div>
        </div>
        <div className="hiw-arrow">
          <img src="/images/hiw-arrows.webp" />
        </div>
        <div className="hiw-content-holder">
          <div className="hiw-image">
            <img src="/images/hiw-upload.webp" />
          </div>
          <div className="hiw-heading">Upload & order</div>
          <div className="hiw-text">Upload your pet’s pictures and place your order (complete purchase)</div>
        </div>
        <div className="hiw-arrow">
          <img src="/images/hiw-arrows.webp" />
        </div>
        <div className="hiw-content-holder">
          <div className="hiw-image">
            <img src="/images/hiw-preview.webp" />
          </div>
          <div className="hiw-heading">Preview & receive your perfect look!</div>
          <div className="hiw-text">
            Up to 24 hours from placing your order, you will get a notification with a preview of your
            clothing. Approve, and the order is on the way to you!
          </div>
        </div>
        <ul className="button-link-list">
          <li className="button-link">
            <a href="#" className="btn">
              Let's get started{' '}
            </a>
          </li>
        </ul>
      </div>

      {/* Review Section */}
      <div className="reviews-holder">
        <h5 className="reviews-heading">Reviews that made our day</h5>
        <div className="reviews-text">We love seeing your beautiful stories, reels and Tiktoks!</div>
        <ul className="reviews-silder">
          <ReviewSlider />
        </ul>
        <div className="swipe-right">
          <a href="#" className="swipe-right bold">
            Swipe left-right
          </a>{' '}
          to see more
        </div>
      </div>

      {/* News Letter */}
      <div className="newsletter">
        <h6 className="newsletter-heading">Sign up for the newsletter</h6>
        <div className="newsletter-text">
          Be the first with the latest news and take advantage of some great offers!
        </div>
        <ul className="input-holder">
          <form>
            <input type="text" className="input-text" placeholder="Enter your email adress..." />
            <a className="input-button">
              <img src="/images/button.webp" />
            </a>
          </form>
        </ul>
      </div>

      {/* Customer Support */}
      <div className="customer-support">
        <div className="customer-support-text">Customer support</div>
        <h6 className="customer-support-heading">How can we help you?</h6>
        <div className="customer-support-image">
          <img src="/images/customer-support.webp" />
        </div>
        <ul className="customer-support-list-holder">
          <li>
            <a className="help-links"> FAQ </a>
          </li>
          <li>
            <a className="help-links"> Size guide </a>
          </li>
          <li>
            <a className="help-links"> How it works </a>
          </li>
          <li>
            <a className="help-links"> Live chat </a>
          </li>
        </ul>
      </div>

      <div className="saving-pets">
        <h5 className="pets-heading">Saving pets together.</h5>
        <div className="pets-image">
          <img src="/images/saving-pets.webp" />
        </div>
        <div className="saving-pets-text">
          With each purchase, we will increase awareness of animal adoption. And we will donate money to save
          animals around the world
        </div>
        <img className="numbers-image" src="/images/Numbers.webp" />
      </div>

      <div className="insta-posts">
        <div className="insta-user-holder">
          <div className="insta-logo-holder">
            <img src="/images/insta-logo.webp" />
            <div className="name-text-holder">
              <h6 className="brand-name">OHMYBRAND</h6>
              <div className="brand-user-name">@ohmybrand_official</div>
            </div>
          </div>
          <div className="posts-holder">
            120
            <div className="posts-text">posts</div>
          </div>
          <div className="posts-holder">
            21.6k
            <div className="posts-text">followers</div>
          </div>
          <div className="posts-holder">
            50
            <div className="posts-text">following</div>
          </div>
        </div>
      </div>

      <InstaGallery />

      <Footer />
    </>
  )
}

export default Home
