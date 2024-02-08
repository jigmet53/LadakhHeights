import React from "react";
import backgroundImageUrl from "../../../assets/landingBackground.jpeg";
import "./LandingPage.css";
import Carousel from "./Carousel";
import Banner from "../../Organisms/Banner/Banner";
import ToolBar from "../../Molecules/ToolBar/ToolBar";
import Carousel1 from "./carousel1";
import ScrollAnimation from "../../Molecules/Animated/ScrollAnimation";
import Navbar from "../../Organisms/Navbar/Navbar";
import LandingSecondPage from "./LandingSecondPage";
import ZoomSlider from "./ZoomSliders";
import LandingGallery from "./LandingGallery";
import Services from "../ServicesOffered/Services";
import {Snip1193} from "../LandingPage/ImageHover/imageHover";
import {HoverSnip1193} from "../LandingPage/ImageHover/imageHover";

import  Footer from "../../Organisms/Footer/Footer";


import GallerySlide from "../Gallery";
import ImageHover from "./ImageHover/imageHover";
import  Drawer1  from "../../Organisms/Navbar/Drawer1";
// import ReserveForm from "../ReserveForm/ReserveForm";
// import ZoomSlider from "./ZoomSlider"
const LandingPage = () => {

 
  return (
    <div>
              {/* <Navbar /> */}
      <div className="landingPageBody">
        <div>

        <LandingGallery />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
        </div>
        {/* <ZoomSlider /> */}
        <div className="backgroundImageBody">
          <div className="background-containerLanding">
            <div>
            </div>
            <div className="landingTextBody">
              <div className="landingBackgroundHeading">
                <ScrollAnimation>
                  <h1>Book your dream holiday with us</h1>
                </ScrollAnimation>
                <div className="landingBackgroundSubheading">
                  Into the enchanting wilderness of Ladakh – a place where
                  dreams become reality.
                </div>
                {/* <ToolBar /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="toolBarMainBody"> */}

        {/* </div> */}
     
                {/* <Drawer1/> */}

       

        <LandingSecondPage />
{/* 
        <div style={{ marginTop: "30em" }} className="carouselHeading">
        Our Upcomings Tours
        </div>
        <ScrollAnimation>
        <Carousel />
      </ScrollAnimation> */}

        {/* <div className="carouselHeading">Our Top Packages</div>
        <Carousel1/> */}
      </div>
      <ImageHover/>
      <Services/>
      {/* <Snip1193 imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample31.jpg" altText="sample31" title="Max Conversion" /> */}
      {/* <HoverSnip1193 imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg" altText="sample68" title="Indigo Violet" /> */}
      <Footer/>
      
    </div>
        // <GallerySlide/>
  );
};

export default LandingPage;