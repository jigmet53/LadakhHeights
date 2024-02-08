import React, { useEffect, useState } from "react";
import AboutUsHeading from "../../../assets/Lightbox-13.jpg";
import deluxRoom from "../../../assets/Lightbox-12.jpg";
import superiorRoom from "../../../assets/Lightbox-13.jpg";
import doubleRoom from "../../../assets/Lightbox-10.jpg";
import WifiIcon from '@mui/icons-material/Wifi';
import KingBedIcon from '@mui/icons-material/KingBed';
import TvIcon from '@mui/icons-material/Tv';
import aboutUsImage44 from "../../../assets/AboutUs/aboutUsImage44.png";
import aboutusMobileBanner from "../../../assets/AboutUs/aboutusMobileBanner.png";
import bengaluru from "../../../assets/AboutUs/Bangalore.png";
import delhi from "../../../assets/AboutUs/delhi.png";
import NAI1 from "../../../assets/AboutUs/NAI1.png";
import NAI2 from "../../../assets/AboutUs/NAI2.png";
// import Footer from "../../Organisms/Footer/Footer";
// import FooterMobile from "../../Organisms/Footer/FooterMobile";
import "./RoomsAndSuits.css";
import Title from "../../Atoms/Title/Title";

function RoomsAndSuits() {
  const [isMobile, setIsMobile] = useState(false);

  const roomData = [
    {
      imageSrc: deluxRoom,
      price: "FROM $150/NIGHT",
      roomType: "Superior Room",
      roomDetails:
        " Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.",
    },
    {
      imageSrc: superiorRoom,
      price: "FROM $150/NIGHT",
      roomType: "Superior Room",
      roomDetails:
        " Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.",
    },
    {
      imageSrc: doubleRoom,
      price: "FROM $150/NIGHT",
      roomType: "Superior Room",
      roomDetails:
        " Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.",
    },
  ];

  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.outerWidth]);
  return (
    <>
      {/* <Title title="YUVA | A Glimpse into what we are all about." /> */}

      <>
        <div className="roomsBodySuit">
          <div
            style={{
              backgroundImage: `url(${AboutUsHeading})`,
              backgroundRepeat: "no-repeat",
              // backgroundSize: "100%",
              backgroundSize: "cover", // Ensures the image covers the entire container
              backgroundPosition: "center", // Centers the image within the container
              width: "100%", // Set the desired width for your container
              height: "60vh", // Set the desired height for your container
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="AboutUsHeadingImage"
          >
            <div className="AboutUsHeading">
              <p>LUXURY HOTEL EXPERIENCE</p>
              <h2 style={{ fontSize: "3vw", color: "white" }}>
                OUR ROOMS & SUITES
              </h2>
            </div>
          </div>
          {roomData.map((service, index) => (
            <div className="roomAndSuitsBody">
              <div
                style={{
                  backgroundImage: `url(${service.imageSrc})`,
                  backgroundRepeat: "no-repeat",
                  // backgroundSize: "100%",
                  backgroundSize: "cover", // Ensures the image covers the entire container
                  backgroundPosition: "center", // Centers the image within the container
                  width: "100%", // Set the desired width for your container
                  height: "80vh", // Set the desired height for your container
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="RoomAndSuitsImage"
              ></div>

              <div className="roomAndSuitsContentBox">
                <div style={{ padding: "2vw" }}>
                  <small style={{ color: "#978667" }}> {service.price}</small>
                  <h2>{service.roomType}</h2>
                  <p>{service.roomDetails}</p>
                  <div className="roomAndSuitsItem">
                    <div className="roomAndSuitsItem1"><KingBedIcon/>
                    <p className="text">  King Size Bed </p>
                    
                   </div>
                    <div className="roomAndSuitsItem1"><WifiIcon/>
                    <p className="text"> Wifi </p>
                    </div>

                    <div className="roomAndSuitsItem1"><TvIcon/>
                    <p className="text"> 42Inc TV </p>
                   
                         </div>
                    
      
                    {/* <ul>
                        <li className="hi2">
                            <i className="hi"></i>
                            wifi
                        </li>
                    </ul> */}
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
          ))}

          <div></div>
        </div>
        {/* <Footer /> */}
      </>
    </>
  );
}

export default RoomsAndSuits;
