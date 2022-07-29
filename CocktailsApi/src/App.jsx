import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='/cocktail/:id' element={<SingleCocktail/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);
