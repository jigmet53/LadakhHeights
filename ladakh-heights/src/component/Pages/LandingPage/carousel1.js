import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Add your own styles
import backgroundImageUrl from "../../../assets/landingBackground.jpeg";

const Carousel1 = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { id: 1, title: 'Card 1', content: 'Content for Card 1' },
    { id: 2, title: 'Card 2', content: 'Content for Card 2' },
    { id: 3, title: 'Card 3', content: 'Content for Card 3' },
  ];

  const nextCard = () => {
    setActiveCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 3000); // Change the interval time as needed (e.g., every 3 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={prevCard}>Previous</button>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === activeCard ? 'active' : ''}`}
          >
            <img className='packageImage' src="backgroundImageUrl" alt='error'>
            </img>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default Carousel1;
