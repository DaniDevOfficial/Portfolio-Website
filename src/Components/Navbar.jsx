
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Navbar.css';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



function handleHamburger() {
    setIsMenuOpen(!isMenuOpen);
  }
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="home-link "><Link className="link-style" to="/">Home</Link></div>
            </div>
            <a href="#" className='toggle-button'
            onClick={handleHamburger}>
                <span className='bar' />
                <span className='bar'/>
                <span className='bar'/>

            </a>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <ul >
            <Link className="link-style" to="/AboutMe">  <li>AboutMe</li></Link>
                <li><Link className="link-style" to="/contact">Contact</Link></li>
            </ul>
            </div>
        </nav>
    );
}
