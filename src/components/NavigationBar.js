// NavigationBar.js
import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import './NavigationBar.css'; 

const NavigationBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src="/prime-logo.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">DEALERS</a></li>
            <li><a href="#">ZIP COVERED</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li className="login-menu">
              <a href="#">LOGIN</a>
              <div className="submenu">
                <a href="#">User Login</a>
                <a href="#">Dealer Login</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-contact">
          <img src="/contact-us.png" alt="Contact Icon" />
          <div className='contact-p'>
            <h3>Contact Us</h3>
            <p>92 666 888 0000</p>
          </div>
        </div>
        {isSmallScreen && <NavMobile />}
      </div>
    </nav>
  );
};

export default NavigationBar;
