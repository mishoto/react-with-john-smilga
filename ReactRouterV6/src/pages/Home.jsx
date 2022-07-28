import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <h3>Home</h3>
      <Link to='/about' className='btn'>About</Link>
      <Link to='/products' className='btn'>Products</Link>
    </section>
  );
}

export default Home