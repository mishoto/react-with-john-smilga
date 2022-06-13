import React from 'react';
import ReactDOM from 'react-dom';
import UseStateHook from './components/useState/UseState';
import UseStateWithArray from './components/useState/UseStateWithArray';
import UseStateWithObject from './components/useState/UseStateWithObject';
import UseStateWithCounter from './components/useState/UseStateWithCounter';

import './index.css';

const App = () => (
  <div className='container'>
    <UseStateHook />
    <UseStateWithArray />
    <UseStateWithObject />
    <UseStateWithCounter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
