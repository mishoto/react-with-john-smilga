import React from 'react';
import ReactDOM from 'react-dom';
import UseStateHook from './components/useState/UseState';
import UseStateWithArray from './components/useState/UseStateWithArray';
import UseStateWithObject from './components/useState/UseStateWithObject';

import './index.css';

const App = () => (
  <div className='container'>
    <UseStateHook />
    <UseStateWithArray />
    <UseStateWithObject />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
