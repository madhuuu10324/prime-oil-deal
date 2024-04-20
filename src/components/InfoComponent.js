
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './InfoComponent.css'; 
const InfoComponent = () => {
  return (
    <div className="info-container">
      {/* Left section */}
      <div className="left-section">
        <h1>Why <span>Prime Oil Deal ?</span></h1>
        <div className="sub-section">
          <h2>CONNECT</h2>
          <p>Local, High-Quality, Low-Cost Heating Oil Dealers with Home Owners & Business Owners</p>
        </div>
        <div className="sub-section">
          <h2>BEST DEAL</h2>
          <p>Enabling customers to easily purchase discounted heating oil using cash or a credit card</p>
        </div>
        <div className="sub-section">
          <h2>BEST SERVICES</h2>
          <p>Offered free of charge to homeowners, facilitating their selection of competitively priced heating</p>
        </div>
      </div>

      {/* Right section */}
      <div className="right-section">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="about-box-layout3 has-animation">
            <div className="figure-box2">
              <img src="/filling.jpg" alt="About" width="920" height="742" />
              <div className="mask-content">
                <div className="number">200+</div>
                <div className="text">Zipcodes</div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default InfoComponent;
