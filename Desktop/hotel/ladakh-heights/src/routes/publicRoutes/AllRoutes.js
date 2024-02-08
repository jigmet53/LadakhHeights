// Splash.js

import React from 'react';
import LandingPage from '../../component/Pages/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../../component/Organisms/Navbar/Navbar';
import ZoomSliders from "../../component/Pages/LandingPage/ZoomSliders"
import Carousel from '../../component/Pages/LandingPage/Carousel';
import Carousel1 from '../../component/Pages/LandingPage/carousel1';
import AboutUs from '../../component/Pages/AboutUs/AboutUs';
import ContactUs from '../../component/Pages/ContactUs/ContactUsPage';
import RoomsAndSuits from '../../component/Pages/Room/RoomsAndSuits';
import Tariff from '../../component/Pages/Tariff/Tariff';
import ViewGallery from '../../component/Pages/Gallery/ViewGallery';


const AllRoutes = () => {

      
  return (
    <BrowserRouter>
   
   

      <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/zoom" element={<Carousel1 />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Room" element={<RoomsAndSuits />} />
      <Route path="/Tariff" element={<Tariff />} />
      <Route path="/Gallery" element={<ViewGallery/>} />

      <Route path="/ContactUs" element={<ContactUs />} />
      {/* <Route path="/Reserve" element={<ContactUs />} /> */}








    </Routes>
  </BrowserRouter>

  );
};

export default AllRoutes;
