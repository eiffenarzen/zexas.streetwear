import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(./rante.png)',
      backgroundSize: '100% 100%, 50% auto',
      backgroundPosition: 'center, right bottom',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title">HARDWORK NOT WORK</h2>
          <p className="about-text">
            no work, no school, no drugs,

            JUST SKATEBOARDING
          </p>
          <p className="about-text">
            BUITENZORG DISTRICT
          </p>
        </div>
      </div>
    </section>
  );
}
