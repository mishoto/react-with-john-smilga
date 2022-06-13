import React, { useState } from 'react';

const UseStateWithCounter = () => {
  const [value, setValue] = useState(0);

  const increaseWithDelay = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h3>UseStateWithCounter</h3>
        <h2>{value}</h2>
        
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className='btn' onClick={increaseWithDelay}>
          increase with delay
        </button>
      </section>
    </>
  );
};

export default UseStateWithCounter;
