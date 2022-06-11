import React from 'react';
import ReactDOM from 'react-dom';
import UseStateHook from './components/useState/UseState';

import './index.css';

const App = () => (
  <div className='container'>
    <UseStateHook />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
