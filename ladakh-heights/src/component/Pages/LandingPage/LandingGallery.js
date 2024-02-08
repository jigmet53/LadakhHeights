import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import AfroStyles from "./afroStyle";

const LandingGallery=(props)=>
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #4",
            description: "Hello World!"
        }
    ]

    const anArrayOfNumbers = [<img src="http://random.com/one"/>, 
                          <img src="http://random.com/two"/>, 
                          <img src="http://random.com/three"/>
                         ];

    return (
        <Carousel animation={"fade"}autoPlay={true}
        indicatorIconButtonProps={false}
        
        // NavButton={false}
        // IndicatorIcon={anArrayOfNumbers}
        // indicatorIconButtonProps={{
        //     style: {
        //         padding: '10px',    // 1
        //         color: 'blue'       // 3
        //     }
        // }}
        // activeIndicatorIconButtonProps={{
        //     style: {
        //         backgroundColor: 'white' // 2
        //     }
        // }}
        // indicatorContainerProps={{
        //     style: {
        //         marginTop: '10px', // 5
        //         textAlign: 'center' // 4
        //     }
    
        // }}
        >
            {
                AfroStyles.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className='backgroundIeemageBody' style={{height:"100vh", width:"110vw"}}>
           
            <div  key={props.item.id} style={{height:"100vh", width:"110vw"}}>
              <div className="img-body" style={{height:"100vh", width:"110vw"}}>
              <div className="img-mask"></div>
                <img  style={{height:"100%", width:"110vw"}}src={props.item.src} alt={props.item.alt} />
              </div>
            </div>
       
            
        </Paper>
    )
};
export default LandingGallery;