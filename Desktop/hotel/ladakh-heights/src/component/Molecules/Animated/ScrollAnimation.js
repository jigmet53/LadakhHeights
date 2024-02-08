// ScrollAnimation.js
import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import { useSpring, animated } from '@react-spring/web'
import { useSpring, animated } from '@react-spring/web';

const ScrollAnimation = ({ children }) => {
  const props = useSpring({
    opacity: 2,
    transform: 'translate3d(0, 0, 0)',
    config: { duration: 2000 },
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default ScrollAnimation;
