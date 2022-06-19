import React from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import logo from '../../src/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
<div className="nav-header">
<img src={logo} alt='logo' />
<button className='nav-toggle'>
<FaBars/>
</button>
</div>
<div className="links-container show-container">

</div>
      </div>
      </nav>
  )
}

export default Navbar