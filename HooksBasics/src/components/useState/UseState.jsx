import React, { useState } from 'react';

const UseStateHook = () => {
  const [text, setText] = useState('old Title');

  const toggleTitle = () => {
    text === 'new Title' ? setText('old Title') : setText('new Title');
  };
  return (
    <div>
      <h1>{text}</h1>
      <button className='btn' onClick={toggleTitle}>
        change title
      </button>
    </div>
  );
};

export default UseStateHook;
