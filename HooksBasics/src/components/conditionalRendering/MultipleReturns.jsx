import React, { useState, useEffect } from 'react';
import data from './githubUsersData';

const MultipleReturns = () => {
  // const url = 'https://api.github.com/users';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      data.map((user) => {
        
        const { login } = user;
        
        setUser(login);
        
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
