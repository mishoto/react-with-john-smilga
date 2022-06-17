import React, { useState } from 'react';
import SingleQuestion from '../components/Question';
import data from '../data';

const Home = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className='container'>
      <h3>Questions and answers about login</h3>
      <section className='info'>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
};

export default Home;
