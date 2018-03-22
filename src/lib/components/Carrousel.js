import React from 'react';
import Slider from 'react-slick';
import '../styles/Carrousel.css';

const NextArrow = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const Carrousel = () => (
  <div className="slider">
  <Slider {...settings}>      
    <span>1</span>
    <span>2</span>
    {/* <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span> */}
  </Slider>
  </div>
  
)

export default Carrousel;