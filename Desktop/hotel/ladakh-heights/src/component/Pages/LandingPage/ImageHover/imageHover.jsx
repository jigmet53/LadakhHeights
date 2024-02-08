

import React from 'react';
import './ImageHover.css'; 
import room1 from '../../../../assets/Lightbox-11.jpg'
import room2 from '../../../../assets/Lightbox-13.jpg'
import room3 from '../../../../assets/Lightbox-17.jpg'


const Snip1193 = ({ imageSrc, altText, title }) => {
  const handleMouseLeave = (event) => {
    event.target.classList.remove("hover");
  };

  return (
    <div className='roomImeageBox'>

    <figure className="snip1193" onMouseLeave={handleMouseLeave}>
      {/* <img src={imageSrc} alt={altText} /> */}
      <div
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height:"30vw"
                }}
                className="landingPag3eImg2"
              ></div>
      <figcaption>
        <h4>{title}</h4>
        <a href="#" className="bottom-left"><i className="ion-ios-chatboxes-outline"></i></a>
        <a href="#" className="bottom-right"><i className="ion-ios-telephone-outline"></i></a>
        <a href="#" className="bottom-right"><i className="ion-ios-telephone-outline">Hello</i></a>

      </figcaption>
    </figure>
    </div>
  );
};

// const HoverSnip1193 = ({ imageSrc, altText, title }) => {
//   const handleMouseLeave = (event) => {
//     event.target.classList.remove("hover");
//   };

//   return (
//     <figure className="snip1193 hover" onMouseLeave={handleMouseLeave}>
//       <img src={imageSrc} alt={altText} />
//       <figcaption>
//         <h4>{title}</h4>
//         <a href="#" className="bottom-left"><i className="ion-ios-chatboxes-outline"></i></a>
//         <a href="#" className="bottom-right"><i className="ion-ios-telephone-outline"></i></a>
//       </figcaption>
//     </figure>
//   );
// };

const ImageHover = () => {
    return (
      <div className='roomBody'>

      <div>
        <p className='roomHeading1'>LUXURY EXPERIENCE</p>
        <h2 className='roomHeading2'>Rooms & Suites</h2>
      </div>
      <div className='roomImageBox'>
        <Snip1193 imageSrc={room1} altText="sample31" title="Double Room" />
        <Snip1193 imageSrc={room2} altText="sample31" title="Delux Room" />
        <Snip1193 imageSrc={room3} altText="sample31" title="Superior Room" />

      </div>
      </div>
      
    );
  };
  
  export default ImageHover;