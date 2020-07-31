import React from 'react';
import PlanetImage from '../../assets/planet.jpg';


const Card = ({name, mass, exp, radius, ov, height}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={PlanetImage} alt='planet'/>
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{name}</span>
        <p>Has a mass of {mass} * 10^{exp}kg and 
        a radius of {radius.toFixed(0)}m. 
        The required velocity to orbit {name} at {height}m
        from the surface is: </p> 
        
        <h4>{ov? ov.toFixed(2) : 0}m/s</h4>
      </div>
    </div>
  );
}

export default Card;