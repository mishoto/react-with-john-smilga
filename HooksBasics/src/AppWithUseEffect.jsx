import React from 'react';
import ReactDOM from 'react-dom';
import UseEffectHook from './components/useEffect/UseEffect';
import UseEffectWithDepList from './components/useEffect/UseEffectWithDepList';
import UseEffectWithCleanup from './components/useEffect/UseEffectWithCleanup';
import UseEffectWithFetch from './components/useEffect/UseEffectWithFetch';

import './index.css';

const AppWithUseEffect = () => (
  <div className='container'>
    <UseEffectHook />
    <UseEffectWithDepList />
    <UseEffectWithCleanup />
    <UseEffectWithFetch />
  </div>
);
ReactDOM.render(
  <AppWithUseEffect />,
  document.getElementById('appWithUseEffect'),
);
