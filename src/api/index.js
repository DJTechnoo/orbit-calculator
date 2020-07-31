import axios from 'axios';

const url = 'https://api.le-systeme-solaire.net/rest/';


export const getBodies = async () => {

  try {   

    const {data: {bodies}} = await axios.get(url + 'bodies');

    const modBodies = bodies.filter(body => {
      if (body.mass) return true; // skip if there is no mass available
      return false;
    }).map(body => ({
        name: body.englishName,
        mass: body.mass.massValue,
        exp: body.mass.massExponent,
        radius: body.meanRadius* 1000
    }));
    
    return modBodies;  

  } catch (error) {
    console.log(error);
  }

}