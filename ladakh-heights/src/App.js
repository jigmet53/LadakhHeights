// App.js
import React, { useState, useEffect } from 'react';
import SplashScreen from './/component/Organisms/SplashScreen/SplashScreen';
import AllRoutes from './/routes/publicRoutes/AllRoutes';



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by using setTimeout
    const fakeLoading = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration for your loading process

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(fakeLoading);
  }, []);





  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        // Your main application content goes here
        <div>
        <AllRoutes/>
          {/* Add the rest of your app components */}
        </div>
      )}
    </div>
  );
};

export default App;