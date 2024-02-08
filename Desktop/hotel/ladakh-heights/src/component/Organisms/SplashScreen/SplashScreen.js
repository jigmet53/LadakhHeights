// Splash.js

import React, {useEffect} from 'react';
import './SplashScreen.css'; // Add your styling here
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const SplashScreen = () => {
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              return 0;
            }
            const diff = Math.random() * 20;
            return Math.min(oldProgress + diff, 100);
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
      
  return (
    <div className="splash">
      <h1 className="splashHeading"> Royal Explorers</h1>
      <p  className='splashSubHeading'>Loading...</p>
      <Box sx={{ width: '30%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
    </div>
  );
};

export default SplashScreen;
