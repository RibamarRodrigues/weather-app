import propTypes from 'prop-types';
import '../styles/Card.css';

function Card({ data: { location, current } }) {
  return (
    <>
      <ul className='weather-card'>
        <li>{location.name}</li>
        <li>{location.region}, {location.country}</li>
        <li>{current.temp_c}</li>
        <li>
          <img src={current.condition.icon} alt={current.condition.text}/>
        </li>
        <li>{current.condition.text}</li>
      </ul>
    </>
  )
}

export default Card;
Card.propTypes = {
  data: propTypes.object,
}.isRequired