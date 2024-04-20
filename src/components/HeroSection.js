
import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
      <h1 className="hero-heading">LOOKING FOR BEST OIL RATE ?</h1>
        {/* Input card */}
        <div className="input-card">
          <input type="text" placeholder="Heating Oil" />
          <input type="text" placeholder="Zip Code" />
          <button>SEARCH</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;