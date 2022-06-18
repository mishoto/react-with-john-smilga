import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

import './index.css';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Carousel Demo</h2>
    <Carousel />
  </>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
