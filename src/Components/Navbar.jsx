import '../Css/Navbar.css';


import { Link } from 'react-router-dom'
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbarWrapper'>
    <nav className="navbar">
      <div className="logo">David Bischof</div>
      <ul className="nav-links">
        <Link to='/'><li className='navbarli'>Home</li></Link>
        <Link to='/Projekte'><li className='navbarli'>Projects</li></Link>
        <Link to='/AboutMe'><li className='navbarli'>About Me</li></Link>
        <Link to='/Galerie'><li className='navbarli'>Galerie</li></Link>
        <Link to='/Kontakt'><li className='navbarli'>Kontakt</li></Link>

      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
