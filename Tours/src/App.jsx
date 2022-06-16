import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './index.css';

const App = () => (
  
    <main>
      <h2 className='title'>Tours Project</h2>
      <Home />
    </main>
  
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
