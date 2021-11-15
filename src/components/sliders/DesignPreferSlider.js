import Slider from 'react-slick';

const DesignPreferSlider = () => {
    return (
        <Slider className="design-prefer-holder" {...designPreferSliderSettings}>
            <div className="design-prefer-slider">
                <img src="/images/design-prefer.webp" />
                <div className="user-logos">
                    <img src="/images/docas.webp" />
                    <div className="user-text">Docas</div>
                </div>
                <a className="add-icon icon-1">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-2">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-3">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <div className="arrows-bg">
                    <div className="slider">
                        <img src="/images/slider-bg.webp" />
                    </div>
                    <a className="share-bg">
                        <img src="/images/icon-share.webp" />
                    </a>
                </div>
            </div>
            <div className="design-prefer-slider">
                <img src="/images/design-prefer.webp" />
                <div className="user-logos">
                    <img src="/images/jacky.webp" />
                    <div className="user-text">Jecky</div>
                </div>
                <a className="add-icon icon-1">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-2">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-3">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <div className="arrows-bg">
                    <div className="slider">
                        <img src="/images/slider-bg.webp" />
                    </div>
                    <a className="share-bg">
                        <img src="/images/icon-share.webp" />
                    </a>
                </div>
            </div>

            <div className="design-prefer-slider">
                <img src="/images/design-prefer.webp" />
                <div className="user-logos">
                    <img src="/images/jacky.webp" />
                    <div className="user-text">Jecky</div>
                </div>
                <a className="add-icon icon-1">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-2">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-3">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <div className="arrows-bg">
                    <div className="slider">
                        <img src="/images/slider-bg.webp" />
                    </div>
                    <a className="share-bg">
                        <img src="/images/icon-share.webp" />
                    </a>
                </div>
            </div>

            <div className="design-prefer-slider">
                <img src="/images/design-prefer.webp" />
                <div className="user-logos">
                    <img src="/images/jacky.webp" />
                    <div className="user-text">Jecky</div>
                </div>
                <a className="add-icon icon-1">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a class="add-icon icon-2">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <a className="add-icon icon-3">
                    <img src="/images/icon-highlight-active.webp" />
                </a>
                <div className="arrows-bg">
                    <div className="slider">
                        <img src="/images/slider-bg.webp" />
                    </div>
                    <a className="share-bg">
                        <img src="/images/icon-share.webp" />
                    </a>
                </div>
            </div>
        </Slider>
    );
};

const designPreferSliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows:true,
    dotsClass:"vertical-dots",
    lazyLoad: true,
};

export default DesignPreferSlider;
