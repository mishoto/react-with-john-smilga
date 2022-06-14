import React from 'react';
import ReactDOM from 'react-dom';
import Tours from './components/Tours';

import './index.css';

const App = () => (
  <div className='container'>
    <h2>Tours Project</h2>
    <Tours />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
