import React from 'react';
import ReactDOM from 'react-dom';
import MultipleReturns from './components/conditionalRendering/MultipleReturns';
import ShortCircuitEval from './components/conditionalRendering/ShortCircuitEval';
import ShowHideComponent from './components/conditionalRendering/ShowHideComponent';

import './index.css';

const AppWithConditionalRendering = () => (
  <div className='container'>
    <h3>Conditional Rendering</h3>
    <MultipleReturns />
    <ShortCircuitEval />
    <ShowHideComponent />
  </div>
);
ReactDOM.render(
  <AppWithConditionalRendering />,
  document.getElementById('appWithConditionalRendering'),
);
