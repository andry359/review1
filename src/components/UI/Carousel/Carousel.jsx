import './Carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

function Carousel({slidesToShow, slidesToScroll, children}) {

  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

    return (
      <div className="carouselBlock">
        <div className="triggerZone triggerZonePrev" onMouseOver={handlePrev}></div>
        <Slider {...settings} ref={sliderRef}>
          {children}
        </Slider>
        <div className="triggerZone triggerZoneNext" onMouseOver={handleNext}></div>
      </div>
    );
  }
  
  export default Carousel;