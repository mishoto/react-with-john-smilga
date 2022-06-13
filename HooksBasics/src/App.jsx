import React from 'react';
import ReactDOM from 'react-dom';
import UseStateHook from './components/useState/UseState';
import UseStateWithArray from './components/useState/UseStateWithArray';

import './index.css';

const App = () => (
  <div className='container'>
    <UseStateHook />
    <UseStateWithArray />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
