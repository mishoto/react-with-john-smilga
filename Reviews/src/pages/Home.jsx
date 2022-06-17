import React from 'react';
import Review from '../components/Review';

const Home = () => {
  return (
    <section className='container'>
      <div className='title'>
        <h2>Reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  );
};

export default Home;
