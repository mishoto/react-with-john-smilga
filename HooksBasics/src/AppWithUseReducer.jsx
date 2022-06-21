import React from 'react';
import ReactDOM from 'react-dom';
import UseReducerWithDaveGray from './components/useReducer/UseReducerWithDaveGray';
import UseReducerWithJohnSmilga from './components/useReducer/UseReducerWithJohnSmilga';

import './index.css';

const AppWithUseReducer = () => (
  <>
  <div className='contaiter'>
    <h3>useReducer with Dave Gray</h3>
    <UseReducerWithDaveGray />
  </div>
  <div className='contaiter'>
    <h3>useReducer with John Smilga</h3>
    <UseReducerWithJohnSmilga />
  </div>
  </>
);
ReactDOM.render(<AppWithUseReducer />, document.getElementById('appWithUseReducer'));
