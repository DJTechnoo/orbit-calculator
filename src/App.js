import React, {useEffect, useState} from 'react';
import Cards from './components/cards/Cards';
import HeightInput from './components/forms/HeightInput';
import {getBodies} from './api';
import './App.css';



const App = () => {

  const [bodies, setBodies] = useState([]);
  const [height, setHeight] = useState(400000);

  useEffect(() => {
    const asyncFetch = async () => {
      setBodies(await getBodies());
    }
    asyncFetch();
  }, []);


  return (
      <div>
        <HeightInput height={height} setHeight={setHeight}/>
        <Cards bodies={bodies} height={height}/>
      </div>
  );
}

export default App;
