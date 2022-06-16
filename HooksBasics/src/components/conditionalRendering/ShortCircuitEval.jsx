import React, { useState } from 'react';

const ShortCircuitEval = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>ShortCircuitEval</h2>
      <h3>{text || 'john'}</h3>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {isError && <h3>error...</h3>} */}
      {isError ? <p>true Error</p> : <p>false Error</p>}
    </>
  );
};

export default ShortCircuitEval;
