import React, { useEffect, useState } from "react";
import AboutUsHeading from "../../../assets/AboutUs/AboutUsHeading.png";
import aboutUsimage12 from "../../../assets/AboutUs/aboutUsimage12.png";
import aboutUsImage44 from "../../../assets/AboutUs/aboutUsImage44.png";
import aboutusMobileBanner from "../../../assets/AboutUs/aboutusMobileBanner.png";
import bengaluru from "../../../assets/AboutUs/Bangalore.png";
import delhi from "../../../assets/AboutUs/delhi.png";
import NAI1 from "../../../assets/AboutUs/NAI1.png";
import NAI2 from "../../../assets/AboutUs/NAI2.png";
import Footer from "../../Organisms/Footer/Footer";
import FooterMobile from "../../Organisms/Footer/FooterMobile";
import "./AboutUs.css";
import Title from "../../Atoms/Title/Title";

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
            The YUVA Health team comprises experienced individuals who come from various domains like insurance, healthcare, and wellness. With the help of technology experts, we have been successful in launching and implementing India's first cashless OPD (Outpatient Department) in both Rural and Urban India. Our mission is to use our expertise in technology and healthcare to create digital solutions that are both user-friendly and cost-effective, making preventive healthcare practices more accessible for everyone.
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

          <FooterMobile />
        </div>
      ) : (
        <>
          <div className="AboutUsBody">
            <div className="AboutUsHeading">
              <p>About Us</p>
            </div>

            <div
              style={{
                backgroundImage: `url(${AboutUsHeading})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
              className="AboutUsHeadingImage"
            ></div>

            <div className="AboutUsHeading2">YUVA at a Glance</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="AboutUsSubHeading">
              The YUVA Health team comprises experienced individuals who come from various domains like insurance, healthcare, and wellness. With the help of technology experts, we have been successful in launching and implementing India's first cashless OPD (Outpatient Department) in both Rural and Urban India. Our mission is to use our expertise in technology and healthcare to create digital solutions that are both user-friendly and cost-effective, making preventive healthcare practices more accessible for everyone.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="AboutUsSubHeading">
              
              </div>
            </div>

            <div className="NewAboutUSBody">
              <div
                style={{
                  backgroundImage: `url(${NAI1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
                className="NewAboutImg"
              ></div>

              <div className="NewAboutImgContent">
                <div className="NewAboutImgContentHeading">
                  A wealth of experience under our belts
                </div>
                <div className="NewAboutImgContentDetails">
                  Our team members have years of experience creating, nurturing,
                  and leading products to success in the health-tech space. We
                  have a history of launching and implementing innovative
                  solutions that have made a real difference in the lives of
                  individuals and organisations.
                </div>
                <div className="NewAboutImgContentDetails1">
                  We are always looking for new ways to use technology to
                  improve healthcare and make it accessible to all.
                </div>
              </div>
            </div>

            <div className="NewAboutUSBody">
              <div className="NewAboutImgContent2">
                <div className="NewAboutImgContentHeading2">
                  Focus on Preventive Healthcare
                </div>
                <div className="NewAboutImgContentDetails2">
                  At Yuva Health, we believe that preventive healthcare is key
                  to improving overall well-being and quality of life. By
                  promoting healthy habits and enabling easy access to
                  preventive care, we can help individuals and organisations
                  improve their health and reduce the risk of future health
                  issues.
                </div>
                <div className="NewAboutImgContentDetails12">
                  We are committed to developing tech-friendly solutions that
                  make it easier for organisations to implement preventive
                  healthcare practices, such as regular check-ups and
                  screenings. By making these practices more accessible and
                  convenient, we can help people live healthier lives and
                  prevent future health problems.
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${NAI2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
                className="NewAboutImg2"
              ></div>
            </div>

            <div className="AboutUsLocationHeading">OUR LOCATIONS</div>

            <div class="AboutUswrapper AboutUsLeadersHeading">
              <div className="locationOne">
                <div
                  className="gridInnerBlock"
                  style={{
                    backgroundImage: `url(${bengaluru})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  {/* <div className="maskWebLocation"> */}

                  <div className="locationName">Bengaluru</div>
                  {/* </div> */}
                </div>
              </div>
              <div className="locationOne">
                <div
                  className="gridInnerBlock"
                  style={{
                    backgroundImage: `url(${delhi})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <div className="maskWebLocation"> */}

                  <div className="locationName"> Delhi </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default AboutUs;
