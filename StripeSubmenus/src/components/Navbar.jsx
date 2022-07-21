import React from 'react';
import { useGlobalContext } from '../context';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const btnLocation = e.target.getBoundingClientRect();
    const centerBtnLocation = (btnLocation.left + btnLocation.right) / 2;
    const topSubmenu = btnLocation.bottom - 3;
    openSubmenu(page, { centerBtnLocation, topSubmenu });
  };

  const handleSubmenu = (e) =>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver = {handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
