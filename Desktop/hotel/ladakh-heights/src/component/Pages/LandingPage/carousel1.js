import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import h2 from "../../../assets/h2.jpeg"
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay={true}
        // autoplaySpeed={2000}
        autoplayDirection='right'
        autoplayDelay={10}
        dotsNav={true} 
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: "100%",
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: "100vw", height: 700, background: '#ff80ed' }}>
        <img style={{width:"100vw" , height:"100vh"}} src={h2}></img>
        </div>
        <div style={{ width: "100vw", height: 700, background: '#065535' }}>
        <img style={{width:"100vw" , height:"100vh"}} src={h2}></img>

        </div>
        <div style={{ width: "100vw", height: 700, background: '#000000' }}>
        <img style={{width:"100vw" , height:"100vh"}} src={h2}></img>

        </div>
        <div style={{ width: 
          '100vw', height: 700, background: '#133337' }}>
                <img style={{width:"100vw" , height:"100vh"}} src={h2}></img>

        </div>
      
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;