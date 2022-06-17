import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import './index.css';

const App = () => (
  <main>
    <Home />
  </main>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
