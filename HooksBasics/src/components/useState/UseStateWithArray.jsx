import React from 'react';
import { data } from './data';

const UseStateWithArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h3>Use State with Array</h3>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        onClick={() => {
          setPeople([]);
        }}>
        clear all items
      </button>
    </>
  );
};

export default UseStateWithArray;
