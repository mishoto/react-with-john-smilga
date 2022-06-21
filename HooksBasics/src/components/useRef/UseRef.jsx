import React, { useRef } from 'react';

const UseRef = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRef;
