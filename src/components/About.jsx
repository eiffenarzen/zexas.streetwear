import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section" style={{
      backgroundImage: 'url(./rante.png)',
      backgroundSize: '50% auto',
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat'
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
