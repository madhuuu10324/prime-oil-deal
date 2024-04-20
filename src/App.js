// src/App.js
import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import InfoComponent from './components/InfoComponent';
import TestimonialsWrapLayout2 from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <InfoComponent />
      <TestimonialsWrapLayout2 />
      <Footer />
    </div>
  );
}

export default App;
