import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';
import { AppProvider } from './context';

import './index.css';

const App = () => (
  <>
    
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  </>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
