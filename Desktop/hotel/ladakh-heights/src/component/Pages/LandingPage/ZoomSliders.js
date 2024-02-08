// 

import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ZoomSlider.css"
import AfroStyles from "./afroStyle";

const ZoomSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

 

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 3000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: false,
   
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
  };

  return (
    <>
    <div className="content">
      {/* <h1 className="header">Afro Styles Fashion Store</h1> */}
      <div className="container">
        <Slider {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
            arrows={false}
        >
          {AfroStyles.map((item) => (
            <div  key={item.id}>
              <div className="img-body">
                <img  style={{height:"100vh", width:"110vw"}}src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="thumb-wrapper">
          {AfroStyles.map((item, idx) => (
            <div 
              key={item.id} 
              className={currentSlide === idx ? "active": null} 
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <img src={item.src} alt={item.alt}/>
              {currentSlide}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  </>
  );
};

export default ZoomSlider;