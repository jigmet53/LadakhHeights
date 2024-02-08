import React from "react";
import backgroundImageUrl from "../../../assets/landingBackground.jpeg";
import "./LandingPage.css";
import Carousel from "./Carousel";
import Banner from "../../Organisms/Banner/Banner";
import ToolBar from "../../Molecules/ToolBar/ToolBar";
import Carousel1 from "./carousel1";
import ScrollAnimation from "../../Molecules/Animated/ScrollAnimation";
import Navbar from "../../Organisms/Navbar/Navbar";
const LandingPage = () => {
  return (
    <div>
      <div className="landingPageBody">
        <div className="backgroundImageBody">
          <div className="background-containerLanding">
            <div>
              <Navbar />
            </div>
            <div className="landingTextBody">

            <div className="landingBackgroundHeading">
              <ScrollAnimation>
                <h1>Book your dream holiday with us</h1>
              </ScrollAnimation>
              <div className="landingBackgroundSubheading">
                Into the enchanting wilderness of Ladakh – a place where dreams
                become reality.
              </div>
          <ToolBar />
            </div> 

            </div>


          </div>
        </div>

        <div className="landingToolbar">
        </div>
        <div style={{ marginTop: "30em" }} className="carouselHeading">
          Our Upcomings Tours
        </div>
        <ScrollAnimation>
          <Carousel />
        </ScrollAnimation>

        {/* <div className="carouselHeading">Our Top Packages</div>
        <Carousel1/> */}
      </div>
    </div>
  );
};

export default LandingPage;
