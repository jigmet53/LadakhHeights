import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImageUrl from '../../../assets/landingBackground1.jpeg';
import './Carousel.css';
import backgroundImageUrl1 from '../../../assets/landingBackground1.jpeg';
import ScrollAnimation from '../../Molecules/Animated/ScrollAnimation';
import { animated, useSpring } from '@react-spring/web'

const Carousel = () => {
  const props = useSpring({
    opacity: 10,
    transform: 'translate3d(0, 0, 0)',
    config: { duration: 8000 },
    from: { opacity: 0, transform: 'translate3d(0, 500px, 0)' },
  });

  const cards = [

    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    variableWidth: true,  
    autoplay: true,  
  };

  return (
    <animated.div className='sliderBody' style={{ height: '50vh' }}>
      {/* <ScrollAnimation> */}

      <Slider {...sliderSettings} className='slider' style={{ height: '100%' }}>
 
        {cards.map((card, index) => (
          <div
            key={card.id}
            className='packageCardBody'
           
          >
             <img className='packageImage' src={backgroundImageUrl} alt='error'>
            </img>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      
  
      </Slider>
      {/* </ScrollAnimation> */}
    </animated.div>
  );
};

export default Carousel;
