import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h3>Our Tours</h3>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
