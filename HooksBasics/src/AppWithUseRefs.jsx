import React from 'react';
import ReactDOM from 'react-dom';
import UseRef from './components/useRef/UseRef'

import './index.css';

const AppWithUseRefs = () => (
  <div className='contaiter'>
    <h3>useRef Example</h3>
    <UseRef />
  </div>
)
ReactDOM.render(<AppWithUseRefs />, document.getElementById('appWithUseRefs'));
