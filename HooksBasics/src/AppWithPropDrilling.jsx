import React from 'react';
import ReactDOM from 'react-dom';
import PropDrilling from './components/propDrilling/PropDrilling';

import './index.css';

const AppWithPropDrilling = () => {
  return (
    <>
      <h3>AppWithPropDrilling</h3>
      <PropDrilling />
    </>
  );
};

ReactDOM.render(
  <AppWithPropDrilling />,
  document.getElementById('appWithPropDrilling'),
);
