import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello from Dashboard, {user?.name}</h4>
    </section>
  );
};

export default Dashboard;
