import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInputs from './components/forms/ControlledInputs';
import MultipleInputs from './components/forms/MultipleInputs';

import './index.css';

const AppWithForms = () => (
  <div className='contaiter'>
    {/* <ControlledInputs /> */}
    <MultipleInputs />
  </div>
);
ReactDOM.render(<AppWithForms />, document.getElementById('appWithForms'));
