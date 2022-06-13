import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  let counter = 0;
  const [value, setValue] = useState(counter);

  useEffect(() => {
    console.log(`number of rendering times: ${++counter}`);
  });

  return (
    <>
      <h2>{value}</h2>

      <button className='btn' onClick={() => setValue(value + 1)}>
        +
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        {' '}
        reset{' '}
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>
        -
      </button>
    </>
  );
};

export default UseEffectHook;
