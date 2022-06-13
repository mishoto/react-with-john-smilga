import React, { useState } from 'react';

const UseStateHook = () => {
  const [text, setText] = useState('initial state');

  const toggleTitle = () => {
    text === 'first State' ? setText('second State') : setText('first State');
  };
  return (
    <div>
      <h3>{text}</h3>
      <button className='btn' onClick={toggleTitle}>
        change title
      </button>
    </div>
  );
};

export default UseStateHook;
