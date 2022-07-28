import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './shared/SharedLayout';
import SingleProduct from './pages/SingleProduct'

import './index.css';


const App = () => (
  <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
