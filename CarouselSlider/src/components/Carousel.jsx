import React, { useState, useEffect } from 'react';
import data from '../data';
import Title from './Title';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <section className='section'>
        <Title />
        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            
            return (
              <div key={id}>
                <article className='position'>
                  <img src={image} alt={name} className='person-img' />
                  <h4>{name}</h4>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon' />
                </article>
              </div>
            );
          })}
          <button className='prev' onClick={()=>setIndex(index-1)}>
            <FiChevronLeft />
          </button>
          <button className='next' onClick={()=> setIndex(index+1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
