import React, { useState } from 'react';
import List from '../components/PeopleList/List';
import data from '../components/data';

const Home = () => {
  const [people, setPeople] = useState(data);
  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button
        onClick={() => {
          setPeople([]);
        }}>
        clear all
      </button>
    </section>
  );
};

export default Home;
