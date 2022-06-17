import React, { useState, useEffect } from 'react';
import rgbToHex from '../utils/rgbToHex';

const SingleColor = ({ rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const rgbAsCSVString = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `${hex}`;

  useEffect(()=> {
    const timeOut = setTimeout(()=>{
      setAlert(false)
    },3000);
    return ()=> clearTimeout(timeOut);
  },[alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbAsCSVString})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

// #f15025
