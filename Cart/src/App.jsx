import React from 'react';
import ReactDOM from 'react-dom';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { AppProvider } from './context';

import './index.css';

const App = () => (
  <main>
    <Navbar />
    <CartContainer />
  </main>
);
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,

  document.getElementById('app'),
);
