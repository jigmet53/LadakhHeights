// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";

// import backgroundImageUrl from '../../../assets/landingBackground.jpeg';
// import backgroundImageUrl1 from '../../../assets/landingBackground1.jpeg';

// import './Banner.css';
// const Banner = () => {
//   const [click, setClick] = useState(false);
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 4000,
//     cssEase: "linear",
//     beforeChange: () => {
//       setClick(true);
//     },
//     afterChange: () => {
//       setClick(false);
//     },
//   };




//   return (
//     <div>
//       <Slider {...settings}>
      
//           <div>
//             <img
//               alt=""
//               className="HealthAdvisorMainSliderImage"
             
//               src={backgroundImageUrl}
//               style={{ cursor: "pointer" }}
           
//             ></img>
//           </div>

//           <div>
//             <img
//               alt=""
//               className="HealthAdvisorMainSliderImage"
               
//               src={backgroundImageUrl1}
//               style={{ cursor: "pointer" }}
           
//             ></img>
//           </div>
        
//       </Slider>
//     </div>
//   );
// }

// export default Banner;