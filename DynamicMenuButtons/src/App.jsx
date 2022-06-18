import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './index.css';

const App = () => (
  <main className='container'>
    <h3 style={{textAlign: 'center'}}>menu project with dynamic buttons</h3>
    <Home />
  </main>
);
ReactDOM.render(<App />, document.getElementById('app'));
