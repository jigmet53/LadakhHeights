import React, { useState, useEffect } from "react";
import "./LandingSecondPage.css"; // Add your own styles
import backgroundImageUrl from "../../../assets/landingBackground.jpeg";
import h2 from "../../../assets/Lightbox-16.jpg";
import h1 from "../../../assets/Lightbox-12.jpg";

const LandingSecondPage = () => {
  return (
    <div >
      <div className="landingSecondPageGrid">
       
        <div className="landingPageContentBody">
          <div className="landingSecondPageHeading"> Ladakh Heights</div>
          <div className="landingSecondPageSubHeading1">Into the natures lap</div>

          <div className="landingSecondPageSubHeading2">Welcome to Ladakh Heights</div>

          <div className="landingSecondPageContent">
            Bestowing excellent hospitality to its every category of guests,
            Himalayan Retreat Karzoo reflects the culture and ethos of its
            location. With the perfect fusion of contemporary decor in the
            sumptuous interiors of the hotel, the hotel has set the bar of
            services much higher than the expectations of its guests. The
            concept of intuitive anticipatory service makes the guest experience
            unalloyed. One of the most appealing hotel in leh near market.
            <br/>
            <br/>

            Himalayan Retreat Karzoo is best luxury hotels in leh ladakh near
            market. Make your weekend holiday memorable with our friends &
            family at our hotel in Leh Ladakh. The hotel welcomes and offers
            hospitality to guests coming from all around the world. We are
            focussed on delivering high quality, the best value, and superior
            customer service for an ultimate and intimate travelling experience.
            Experience the best hospitality in one of the best hotels in Leh
            Ladakh. Available for every budget segment.
          </div>

          <div className="landingSecondPageSubHeading3">Book from official website and get special offers</div>

        </div>
        <div>
        <div
                style={{
                  backgroundImage: `url(${h1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="landingPageImg1"
              ></div>
          {/* <img className="landingSecondPagePic2" alt="error" src={h2}></img> */}
          <div
                style={{
                  backgroundImage: `url(${h2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="landingPageImg2"
              ></div>
        </div>
      </div>
    </div>
  );
};

export default LandingSecondPage;
