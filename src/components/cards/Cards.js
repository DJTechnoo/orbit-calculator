import React from 'react';
import Card from './Card';
import {getOrbitalVelocity, massFromExponent} from '../../helper';


const Cards = ({bodies, height}) => {

  const bodiesOutput = bodies.map(({name, mass, exp, radius}, i) => 
    <Card 
      name={name}
      mass={mass}
      exp={exp}
      radius={radius}
      height={height}
      ov={getOrbitalVelocity(massFromExponent(mass, exp), height+radius)}
      key={i}
    />
  );


  return (
    <div className="wrapper">
      <ul className="auto-grid">
        {bodiesOutput}
      </ul>
    </div>
  )
}

export default Cards;