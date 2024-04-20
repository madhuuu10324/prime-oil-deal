import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './NavMobile.css';

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="nav-mobile">
      <Hamburger toggled={isOpen} toggle={toggleMenu} />
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Dealers</a></li>
            <li><a href="#">Zip Covered</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <a href="#" onClick={toggleSubMenu}>Login</a>
              {showSubMenu && (
                <ul className="sub-menu">
                  <li><a href="#">User Login</a></li>
                  <li><a href="#">Dealer's Login</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
