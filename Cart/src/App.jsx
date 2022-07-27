import React from 'react';
import ReactDOM from 'react-dom';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { AppProvider, useGlobalContext } from './context';

import './index.css';


const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,

  document.getElementById('app'),
);
