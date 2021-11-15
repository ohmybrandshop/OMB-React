import Slider from 'react-slick';

const QualitySlider = () => {
    const qualitySliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows:false,
        centerMode: true,
        centerPadding:'20px 0 0',
    };
    return (
        <Slider className="quality-slider-holder" {...qualitySliderSettings}>
            <div className="quality-slider">
                <div className="quality-icon">
                    <img src="/images/quality-1.webp" />
                </div>
                <div className="quality-content-holder">
                    <h6 className="quality-heading">Premium Quality</h6>
                    <div className="quality-text">Pink - 100% Cotton</div>
                </div>
            </div>
            <div className="quality-slider">
                <div className="quality-icon">
                    <img src="/images/quality-2.webp" />
                </div>
                <div className="quality-content-holder">
                    <h6 className="quality-heading">Eco-Friendly Production</h6>
                    <div className="quality-text">Zero waste</div>
                </div>
            </div>
            <div className="quality-slider">
                <div className="quality-icon">
                    <img src="/images/quality-3.webp" />
                </div>
                <div className="quality-content-holder">
                    <h6 className="quality-heading">Fast Production</h6>
                    <div className="quality-text">Only 2 Days!</div>
                </div>
            </div>
        </Slider>
    );
};

export default QualitySlider;
