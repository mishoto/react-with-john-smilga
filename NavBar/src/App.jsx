import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import NavbarWithUseRef from './component/NavbarWithUseRef';

import './index.css';

const App = () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <h3>Navbar With Toggle Icon</h3>
      <Navbar />
    </div>
    <div style={{ textAlign: 'center' }}>
      <h3>Navbar with useRef & dynamic/extendable links container</h3>
      <NavbarWithUseRef />
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
