import React, { useState } from 'react';

const UseStateWithObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () => {
    setPerson({ ...person, message: 'new message' });
  };
  const [age, setAge] = useState(person.age);
  const [firstName, setFirstName] = useState('alex');
  const changeAge = () => {
    setAge(25);
  };
  const changeName = () => {
    let name = 'george';
    setFirstName(name);
  };

  return (
    <>
      <h3>UseStateWithObject</h3>
      <h4>{firstName}</h4>
      <h4>{age}</h4>
      <h4>{person.message}</h4>
      <button className='btn' onClick={() => changeMessage()}>
        change msg
      </button>
      <button className='btn' onClick={() => changeAge()}>
        change age
      </button>
      <button className='btn' onClick={() => changeName()}>
        change name
      </button>
    </>
  );
};

export default UseStateWithObject;
