import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import { AppProvider } from './context';

import './index.css';

const App = () => (
  <>
    <h3 style={{ textAlign: 'center' }}>Sidebar Modal Example</h3>
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
