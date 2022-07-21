import React from 'react';
import { useGlobalContext } from '../context';
import phoneImg from '../images/phones.svg';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver = {closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infra 4 the net</h1>
          <p>Stripe power the payments</p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
