import React from 'react'
import { useState } from 'react';
import '../CSS/navbar.css'
function NavBar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <a exact to="/" className="nav-logo">
              RKVBN
            </a>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default NavBar;