const G = 6.67408 * Math.pow(10, -11);

export const getOrbitalVelocity = (planetMass, radius) => {
  return Math.sqrt((G*planetMass)/radius);
}

export const massFromExponent = (mass, exponent) => {
  return mass * Math.pow(10, exponent);
}