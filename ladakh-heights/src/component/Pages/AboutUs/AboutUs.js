import React, { useEffect, useState } from "react";
import AboutUsHeading from "../../../assets/4.jpeg";
import aboutUsimage12 from "../../../assets/AboutUs/aboutUsimage12.png";
import aboutUsImage44 from "../../../assets/AboutUs/aboutUsImage44.png";
import aboutusMobileBanner from "../../../assets/AboutUs/aboutusMobileBanner.png";
import bengaluru from "../../../assets/AboutUs/Bangalore.png";
import delhi from "../../../assets/AboutUs/delhi.png";
import NAI1 from "../../../assets/AboutUs/NAI1.png";
import NAI2 from "../../../assets/AboutUs/NAI2.png";
import h2 from "../../../assets/Lightbox-16.jpg";
import h1 from "../../../assets/Lightbox-12.jpg";
import Footer from "../../Organisms/Footer/Footer";
// import FooterMobile from "../../Organisms/Footer/FooterMobile";
import "./AboutUs.css";
import Title from "../../Atoms/Title/Title";
import Map from "../Map/Map";
import Gallery from "../Gallery/ViewGallery";
import ViewGallery from "../Gallery/ViewGallery";
import ReserveForm from "../ReserveForm/ReserveForm";

// import { Gallery } from "react-grid-gallery";

function AboutUs() {
  const [isMobile, setIsMobile] = useState(false);

  

  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.outerWidth]);
  return (
    <>
      <Title title="YUVA | A Glimpse into what we are all about." />

      {isMobile ? (
        <div className="AboutUsBodyMobile">
          <div className="aboutUsMobileBannerMobile">
            <img src={aboutusMobileBanner} className="aboutUsImageMobile"></img>
            <p className="AboutUsHeadingMobile">About Us</p>
          </div>
          <div className="videoSectionMobile">
            <p className="AboutUsHeadingMobile2">
              GETTING TO THE HEART OF YUVA HEALTH
            </p>

            <p className="AboutUsSubHeadingMobile">
              The YUVA Health team comprises experienced individuals who come
              from various domains like insurance, healthcare, and wellness.
              With the help of technology experts, we have been successful in
              launching and implementing India's first cashless OPD (Outpatient
              Department) in both Rural and Urban India. Our mission is to use
              our expertise in technology and healthcare to create digital
              solutions that are both user-friendly and cost-effective, making
              preventive healthcare practices more accessible for everyone.
            </p>
            <div className="backgroundColoutAboutUs">
              <div className="aboutUsImageBody">
                <img src={aboutUsimage12} className="aboutUsImageBody"></img>
              </div>
              <div className="aboutBody2">
                <div className="aboutUsImageBody2">
                  <div className="aboutImageBlock2Header">
                    A wealth of experience under our belts
                  </div>
                  <div className="aboutImageBlock2Content">
                    Our team members have years of experience creating,
                    nurturing, and leading products to success in the
                    health-tech space. We have a history of launching and
                    implementing innovative solutions that have made a real
                    difference in the lives of individuals and organisations.
                    <br />
                    <br />
                    We are always looking for new ways to use technology to
                    improve healthcare and make it accessible to all.
                  </div>
                </div>
              </div>

              <div className="aboutUsBody3">
                <div className="aboutUsHeader33">
                  Focus on Preventive Healthcare
                </div>
                <div className="aboutUsHeader3Content">
                  At Yuva Health, we believe that preventive healthcare is key
                  to improving overall well-being and quality of life. By
                  promoting healthy habits and enabling easy access to
                  preventive care, we can help individuals and organisations
                  improve their health and reduce the risk of future health
                  issues.
                  <br />
                  <br />
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${aboutUsImage44})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="aboutUsImageBody44"
              >
                <div className="aboutUsHeader3Content2">
                  {" "}
                  We are committed to developing tech-friendly solutions that
                  make it easier for organisations to implement preventive
                  healthcare practices, such as regular check-ups and
                  screenings. By making these practices more accessible and
                  convenient, we can help people live healthier lives and
                  prevent future health problems.
                </div>
              </div>
            </div>
          </div>

          <div class="AboutUsLocationWrapperMobile">
            <div className="AboutUsLocationHeadingMobile">
              <p>OUR LOCATIONS</p>
            </div>
            <div className="locationOneMobile1">
              {/* <div className="locationMask"> */}
              <p className="locationNameMobile1">Bengaluru</p>

              {/* </div> */}
            </div>
            <div className="locationOneMobile2">
              {/* <div className="locationMask"> */}

              <p className="locationNameMobile2"> Delhi </p>
              {/* </div> */}
            </div>
          </div>

          {/* <div className="soonAbout">Coming soon to place near you...!</div> */}

          {/* <FooterMobile /> */}
        </div>
      ) : (
        <>
          <div className="AboutUsBody">
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
              {/* <div className="img-mask"></div> */}

              <div className="AboutUsHeading">
                <p>LUXURY HOTEL EXPERIENCE</p>
                <h2 style={{ fontSize: "3vw" }}>About Ladakh Heights</h2>
              </div>
            </div>

            <div>
              <div className="landingSecondPageGrid">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${h1})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="aboutUsPageImg1"
                  ></div>
                  {/* <img className="landingSecondPagePic2" alt="error" src={h2}></img> */}
                  <div
                    style={{
                      backgroundImage: `url(${h2})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="aboutUsPageImg2"
                  ></div>
                </div>

                <div className="aboutUsContentBody">
                  <div className="landingSecondPageHeading">
                    {" "}
                    Ladakh Heights
                  </div>
                  <div className="landingSecondPageSubHeading1">
                    Into the natures lap
                  </div>

                  <div className="landingSecondPageSubHeading2">
                    Welcome to Ladakh Heights
                  </div>

                  <div className="landingSecondPageContent">
                    Bestowing excellent hospitality to its every category of
                    guests, Himalayan Retreat Karzoo reflects the culture and
                    ethos of its location. With the perfect fusion of
                    contemporary decor in the sumptuous interiors of the hotel,
                    the hotel has set the bar of services much higher than the
                    expectations of its guests. The concept of intuitive
                    anticipatory service makes the guest experience unalloyed.
                    One of the most appealing hotel in leh near market.
                    <br />
                    <br />
                    Himalayan Retreat Karzoo is best luxury hotels in leh ladakh
                    near market. Make your weekend holiday memorable with our
                    friends & family at our hotel in Leh Ladakh. The hotel
                    welcomes and offers hospitality to guests coming from all
                    around the world. We are focussed on delivering high
                    quality, the best value, and superior customer service for
                    an ultimate and intimate travelling experience. Experience
                    the best hospitality in one of the best hotels in Leh
                    Ladakh. Available for every budget segment.
                  </div>

                  <div className="landingSecondPageSubHeading3">
                    Book from official website and get special offers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <ReserveForm/>
          {/* <ViewGallery  /> */}
          <Map />
        </>
      )}
    </>
  );
}

export default AboutUs;
