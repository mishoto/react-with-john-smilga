import React, { useState, useEffect } from 'react';

const ShowHideComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h3>ShowHideComponent</h3>
      <button
        className='btn'
        onClick={() => {
          setShow(!show);
        }}>
        show/hide
      </button>
      {show ? <Item /> : <h3>ups item is hidden:)</h3>}
    </>
  );
};

const Item = () => {
  return (
    <div>
      <h1>new Item Display</h1>
    </div>
  );
};

export default ShowHideComponent;
