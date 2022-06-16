import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  let counter = 0;

  const [value, setValue] = useState(counter);
  const [dependency, setDependency] = useState(0);

  useEffect(() => {
    console.log(`number of rerendering times: ${dependency}`);
    
  }, [dependency]);

  return (
    <>
      <h4>value: {value}</h4>
      <h4>dependency:{dependency}</h4>

      <button className='btn' onClick={() => setValue(value + 1)}>
        +
      </button>
      <button className='btn' onClick={() => setDependency(dependency + 1)}>
       change dependency value
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>
        -
      </button>
    </>
  );
};

export default UseEffectHook;
