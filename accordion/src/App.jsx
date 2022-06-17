import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import SingleQuestion from './components/Questions';
import data from './data';

import './index.css';

const App = () => (
  <main className='container'>
    <Questions />
  </main>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
