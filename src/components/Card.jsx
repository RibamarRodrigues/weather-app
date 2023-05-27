import React from 'react';
import '../styles/Card.css';

function Card({ data: { location, current } }) {
  return (
    <>
      <div className='weather-card'>
        <h1>{location.name}</h1>
        <p>{location.region}, {location.country}</p>
        <h1>{current.temp_c}</h1>
        <img src={current.condition.icon} alt={current.condition.text}/>
        <p>{current.condition.text}</p>
      </div>
    </>
  )
}

export default Card;
