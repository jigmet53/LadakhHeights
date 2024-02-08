import React, { useEffect, useState } from "react";
import "./Services.css";
import ServicesOne from "../../../assets/Attraction/PL.jpeg";
import GroupOne from "../../../assets/LandingPage_Services/Group1.png";
import Grouptwo from "../../../assets/LandingPage_Services/Group2.png";
import Groupthree from "../../../assets/LandingPage_Services/Group3.png";
import Groupfour from "../../../assets/LandingPage_Services/Group4.png";
import Groupfive from "../../../assets/LandingPage_Services/Group5.png";
import Groupsix from "../../../assets/LandingPage_Services/Group6.png";
import Groupseven from "../../../assets/LandingPage_Services/Group7.png";
import Groupeight from "../../../assets/LandingPage_Services/Group8.png";
import ServicesTwo from "../../../assets/Attraction/KL.jpeg";
import ServicesThree from "../../../assets/Attraction/MH.jpeg";
import ServicesFour from "../../../assets/Attraction/NV.jpeg";
import ServicesFive from "../../../assets/Attraction/H.jpeg";
import ServicesSix from "../../../assets/Attraction/ST.jpeg";
import ServicesSeven from "../../../assets/Attraction/LP.jpeg";
import ServicesEight from "../../../assets/Attraction/Z.jpeg";
import testube from "../../../assets/LandingPage_Services/testube.png";
import head from "../../../assets/LandingPage_Services/head.png";
import bag from "../../../assets/LandingPage_Services/bag.png";
import bag2 from "../../../assets/LandingPage_Services/bag2.png";
import ambulance from "../../../assets/LandingPage_Services/ambulance.png";
import heart from "../../../assets/LandingPage_Services/heart.png";
import setos from "../../../assets/LandingPage_Services/setos.png";
import headphone from "../../../assets/LandingPage_Services/headphone.png";
import { useNavigate } from "react-router-dom";

function Services() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hovering, setHovering] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (window.outerWidth <= 600) {
      setIsMobile(true);
    }
  }, [window.outerWidth]);

  const servicesData = [
    {
      imageSrc: ServicesOne,
      imageicon: GroupOne,
      imageIconsecond: setos,
      serviceText: "Pangong Lake",
      text: "hello",
    },
    {
      imageSrc: ServicesTwo,
      imageicon: Groupfour,
      imageIconsecond: heart,
      serviceText: "Khardungla",
      text: "hello",
    },
    {
      imageSrc: ServicesThree,
      imageicon: Groupfive,
      imageIconsecond: bag2,
      serviceText: "Magnetic Hill",
      text: "hello",
    },
    {
      imageSrc: ServicesFour,
      imageicon: Groupsix,
      imageIconsecond: head,
      serviceText: "Nubra Valley",
      text: "hello",
    },
    {
      imageSrc: ServicesFive,
      imageicon: Groupthree,
      imageIconsecond: testube,
      serviceText: "Hanle",
      text: "hello",
    },
    {
      imageSrc: ServicesSix,
      imageicon: Groupseven,
      imageIconsecond: bag,
      serviceText: "Shanti Stupa",
      text: "hello",
    },
    {
      imageSrc: ServicesSeven,
      imageicon: Groupeight,
      imageIconsecond: headphone,
      serviceText: "Leh Palace",
      text: "hello",
    },
    {
      imageSrc: ServicesEight,
      imageicon: Grouptwo,
      imageIconsecond: ambulance,
      serviceText: "Zanskar",
      text: "hello",
    },
  ];

  function handleServiceClick(serviceText) {
    switch (serviceText) {
      case "OPD CONSULTATION":
        navigate("/consultation/cashless-opd");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "HEALTH RISK ASSESSMENT":
        navigate("/health-risk-assessment");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "PHARMACY":
        navigate("/Pharmacy");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "MENTAL WELLNESS":
        navigate("/mental-wellness");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "MY TESTS":
        localStorage.setItem(
          "viewEvery",
          JSON.stringify({
            radioItem: "NO_RANGE",
            minPrice: 0,
            maxPrice: 10000,
            allChecked: ["Test"],
          })
        );
        navigate("/view-test");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "EMRM":
        navigate("/EMRM");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "ONLINE CONSULTATION":
        navigate("/talk-to-doctor");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      case "AMBULANCE":
        navigate("/ambulance");
        window.scrollTo({ top: 0, behavior: "smooth" });

        break;
      default:
        break;
    }
  }

  const handleMouseEnter = (index) => {
    setHovering(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setHoveredIndex(null);
  };

  return (
    <>
      {isMobile ? (
        <div className="LandingServicesMainContainer">
          <div className="LandingServicesContainer"><h2>ATTRACTIONS</h2></div>
          <div className="LandingServicesSubContainer">
            Leh is the joint capital and largest city of the union territory of
            Ladakh in India. Leh, located in the Leh district, was also the
            historical capital of the Kingdom of Ladakh, the seat of which was
            in the Leh Palace, the former residence of the royal family of
            Ladakh, built in the same style and about the same time as the
            Potala Palace in Tibet.
          </div>
          <div className="ServicesOfferedgridcontainer">
            {servicesData.map((service, index) => (
              <div
                className="ServiceOfferedgriditem"
                key={index}
                onClick={() => handleServiceClick(service.serviceText)}
              >
                <div>
                  <div className="ServicesTextDisplay">
                    {service.serviceText}
                  </div>
                </div>
                <div className="ServicesOfferedCircleFirstMobile">
                  <img
                    className="ServicesOfferedCircleFirstImageMobileK"
                    alt=""
                    src={service.imageicon}
                  ></img>
                </div>
                <div className="ServicesOfferedCirclesecondMobile"></div>
                <div className="ServicesIMageContainerContainer">
                  <div className="ImageContainer">
                    <div className="ImageOverlay"></div>
                    <img
                      alt=""
                      className="ServicesIMageContainer"
                      src={service.imageSrc}
                    />
                  </div>
                  <div className="ServicesTextDisplay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="LandingServicesMainContainer">
          <div className="LandingServicesContainer">ATTRACTIONS</div>
          <div className="LandingServicesSubContainer">
            Leh is the joint capital and largest city of the union territory of
            Ladakh in India. Leh, located in the Leh district, was also the
            historical capital of the Kingdom of Ladakh, the seat of which was
            in the Leh Palace, the former residence of the royal family of
            Ladakh, built in the same style and about the same time as the
            Potala Palace in Tibet.
          </div>
          <div className="ServicesOfferedgridcontainer">
            {servicesData.map((service, index) => (
              <div
                className="ServiceOfferedgriditem"
                key={index}
                onClick={() => handleServiceClick(service.serviceText)}
              >
                <div
                  className={`ServicesOfferedCirclesecond ${
                    hovering && hoveredIndex === index ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="ServicesOfferedCircleFirst">
                    {/* <img
                      className="ServicesOfferedCircleFirstImage"
                      alt=""
                      src={
                        hoveredIndex === index
                          ? service.imageIconsecond
                          : service.imageicon
                      }
                    ></img> */}
                    <p className="ServicesOfferedCircleFirstImage">
                    {
                        hoveredIndex === index
                          ? service.serviceText
                          : service.serviceText
                      }
                      {/* {service.serviceText} */}
                    </p>
                    <div className="inner-circle">
                       {/* { <img
                      className="ServicesOfferedCircleFirstImage"
                      alt=""
                      src={
                        hoveredIndex === index
                          ? service.imageIconsecond
                          : service.imageicon
                      }
                    ></img>  */}
                    </div>
                  </div>
                </div>
                <div className="ServicesOfferedCirclesecondContainer">
                  <img
                    alt=""
                    className="ServicesIMageContainer "
                    src={service.imageSrc}
                  />
                  <div className="ServicesTextDisplay"></div>
                  <div>
                    <div className="Services-Hover-Text">
                      {service.serviceText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
