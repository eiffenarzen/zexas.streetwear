import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/mentahan.png" alt="Streetwear Hero Background" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title fade-in">DEFINE YOUR<br /><span className="text-accent">PRESSURE</span></h1>
        <p className="hero-subtitle fade-in delay-1">i love more and i don't care.</p>
        <div className="hero-actions fade-in delay-2">
          <a href="#shop" className="btn">Shop Collection</a>
        </div>
      </div>
    </section>
  );
}
