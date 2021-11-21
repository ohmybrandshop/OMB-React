import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { UIStore } from '../../store/store';
import FilterMenu from '../../components/FilterMenu';
import CategoriesSlider from './../../components/sliders/CategoriesSlider';

const Catalog = () => {
    window.scrollTo(0, 0);

    const catagoriesSliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        centerMode: true,
        centerPadding: '20px 0px 0px',
    };

    const newArrivalSliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
        centerPadding: '20px 0 0',
    };

    const filterSectionSliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
    };

    const filterMenuIsOpen = UIStore.useState((s) => s.filterUI.filterMenuIsOpen);

    const toggleFilterMenu = () => {
        UIStore.update((s) => {
            s.filterUI.filterMenuIsOpen = !filterMenuIsOpen;
        });
    };

    return (
        <>
            <div className="catalog-page-holder">
                {filterMenuIsOpen ? <FilterMenu /> : <></>}

                <div className="back-arrow">
                    <Link to="/">
                        <img src="/images/back-arrow.svg" />
                    </Link>
                </div>

                <div className="categories-holder" style={{ marginBottom: 15 }}>
                    <div className="categories-header-holder">
                        <h5 className="categories-header">Catalog</h5>
                        <div className="swipe-right">
                            <Link className="swipe-right bold" to="/catalog">
                                Swipe right-left
                            </Link>{' '}
                            to see more
                        </div>
                    </div>
                    <div className="categories-slider-holder">
                        <div className="categories-slider">
                            <CategoriesSlider />
                        </div>
                    </div>
                </div>

                <div className="filter-section-holder">
                    <div className="filter-btn-holder">
                        <img className="filter-icon" src="/images/filter-icon.svg" />
                        <span
                            className="filter-text"
                            onClick={() => {
                                toggleFilterMenu();
                            }}
                        >
                            Filter
                        </span>
                    </div>
                    <Slider className="filter-section-slider" {...filterSectionSliderSettings}>
                        <div>
                            <button>Women</button>
                        </div>

                        <div>
                            <button>Men</button>
                        </div>

                        <div>
                            <button>Kids</button>
                        </div>

                        <div>
                            <button>Kids</button>
                        </div>

                        <div>
                            <button>Kids</button>
                        </div>
                    </Slider>
                </div>

                <div className="catalog-info-holder">
                    <div className="number-of-products">35 Products</div>
                    <div className="clear-filters">Clear all filters</div>
                </div>

                <div className="product-details-section">
                    <div className="product-wearing">
                        <img src="/images/product-detail-1.png" />
                    </div>
                    <div className="product-text">Befunkey</div>
                    <div className="product-showcase">
                        <img src="/images/product-details.png" />
                    </div>
                    <div className="preview-text">Preview</div>
                </div>
                <div className="product-pricing-holder">
                    <div className="product-pricing">
                        <div className="product-heading">LINE DESIGNED SWIMSUIT</div>
                        <div className="product-price">$14</div>
                    </div>
                    <ul className="button-link-list">
                        <li className="button-link">
                            <Link className="btn" to="/catalog">
                                Customize
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="new-arrival-holder">
                    <div className="new-arrival-heading-holder">
                        <h5 className="new-arrival-heading">New arrivals</h5>
                        <Link className="view-all" to="/catalog">
                            View all
                        </Link>
                    </div>
                    <Slider className="new-arrival-products-holder" {...newArrivalSliderSettings}>
                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src="/images/new-arrival-3.png" />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Pink harness</h6>
                                <span className="product-price">$12</span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <Link className="btn" to="/catalog">
                                            Customize
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src="/images/new-arrival-2.png" />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Yellow Beret</h6>
                                <span className="product-price">$12</span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <Link className="btn" to="/catalog">
                                            Customize
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="new-arrival-products">
                            <div className="new-arrival-image">
                                <img src="/images/new-arrival.png" />
                            </div>
                            <div className="products-text-holder">
                                <h6 className="product-heading">Long Sleeves</h6>
                                <span className="product-price">$12</span>
                                <ul className="button-link-list">
                                    <li className="button-link">
                                        <Link className="btn" to="/catalog">
                                            Customize
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="product-details-section section-2">
                    <div className="product-wearing">
                        <img src="/images/catalog-design-1.png" />
                    </div>
                    <div className="product-text">Befunkey</div>
                    <div className="product-showcase">
                        <img src="/images/catalog-design.png" />
                    </div>
                    <div className="preview-text">Preview</div>
                </div>
                <div className="product-pricing-holder">
                    <div className="product-pricing">
                        <div className="product-heading">Longie Sleeve</div>
                        <div className="product-price">$14</div>
                    </div>
                    <ul className="button-link-list">
                        <li className="button-link">
                            <Link className="btn" to="/catalog">
                                Customize
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="product-details-section section-3">
                    <div className="product-wearing">
                        <img src="/images/catalog-design-2.png" />
                    </div>
                    <div className="product-text">Befunkey</div>
                    <div className="product-showcase">
                        <img src="/images/catalog-design-3.png" />
                    </div>
                    <div className="preview-text">Preview</div>
                    <div className="new-tag">
                        <img src="/images/new-tag.png" />
                    </div>
                </div>
                <div className="product-pricing-holder">
                    <div className="product-pricing">
                        <div className="product-heading">Longie Sleeve</div>
                        <div className="product-price">$12</div>
                    </div>
                    <ul className="button-link-list">
                        <li className="button-link">
                            <Link className="btn" to="/catalog">
                                Customize
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="christmas-holder">
                    <div className="chritmas-image">
                        <img src="/images/christmas-sale.webp" />
                    </div>
                    <span className="type-text">Christmas</span>
                </div>
                <ul className="button-link-list show-more">
                    <li className="button-link">
                        <Link className="btn" to="/catalog">
                            Show more
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Catalog;
