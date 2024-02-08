// ScrollAnimation.js
import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import { useSpring, animated } from '@react-spring/web'
import { animated, useSpring } from '@react-spring/web'

const LeftAnimated = ({ children }) => {
  const props = useSpring({
    opacity: 2,
    transform: 'translate3d(0, 0, 0)',
    config: { duration: 3000 },
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default LeftAnimated;
