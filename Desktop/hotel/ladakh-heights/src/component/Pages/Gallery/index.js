import React, { useEffect, useState } from 'react';
import './style.css';
import wall from '../../../assets/landingBackground.jpeg'
const GallerySlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };
  const galleryArr=[
    {
        image:"",
        name:"abc",
        content:"asdfasodfnsdf"
    },
    {
        image:"",
        name:"bcd",
        content:"adfasdf"
    },  {
        image:"",
        name:"edg",
        content:"adsfasdfasdfasdfasd"
    },  {
        image:"",
        name:"gho",
        content:"cvzxcvzxcv"
    },  {
        image:"",
        name:"jkl",
        content:"qetqwerqwer"
    },  {
        image:"",
        name:"mno",
        content:"fgadfgad"
    },
  ]
 

  return (
    <div className='gbody'>

    <div className="gcontainer">
      <div id="slide">
        {galleryArr.map((item, index) => (
            <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}  style={{ backgroundImage: `url(${wall}})` }}>
                <div key={index} class="content">
                    <div key={index} class="name">{item.name}</div>
                    <div key={index} class="des">{item.content}</div>
                    <button>See more</button>
            </div>

          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
        </div>
  );
};

export default GallerySlide;
