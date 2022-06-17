import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './index.css';

const App = () => (
  <main className='container'>
    <Home />
  </main>
);
ReactDOM.render(<App />, document.getElementById('app'));
