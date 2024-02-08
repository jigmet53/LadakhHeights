// Splash.js

import React from 'react';
import LandingPage from '../../component/Pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../../component/Organisms/Navbar/Navbar';

const AllRoutes = () => {

      
  return (
    <BrowserRouter>
   
   

    <Routes>
      <Route path="/" element={<LandingPage />} />




    </Routes>
  </BrowserRouter>

  );
};

export default AllRoutes;
