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
    <h3 style={{ textAlign: 'center', margin: '2rem' }}>Stripe Submenus</h3>
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
