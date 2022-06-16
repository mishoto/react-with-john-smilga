import React, { useState, useEffect } from 'react';

const UseEffectWithCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h3>UseEffectWithCleanup</h3>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectWithCleanup;
