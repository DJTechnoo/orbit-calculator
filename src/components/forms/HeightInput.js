import React from 'react';
import style from './HeightInput.module.scss';

const HeightInput = ({height, setHeight}) => {
  return (
    <div className='fixed-input'>
      <form>
      <label>
        Height in m:
        <input className={style['input-type']}
          type="number" 
          name="height" 
          value={height} 
          onChange={event => {setHeight(Number(event.target.value))}}
          />
      </label>
      </form>
    </div>
  );
}

export default HeightInput;