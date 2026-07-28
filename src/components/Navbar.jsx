import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ cartItemCount, setIsCartOpen }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'glass' : ''}`}>
        <div className="container nav-content">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} color="#fff" />
            </button>
            <div className="desktop-links">
              <a href="#shop" className="nav-link">SHOP</a>
              <a href="#about" className="nav-link">ABOUT</a>
            </div>
          </div>

          <div className="logo">
            <a href="#">
              <img src="./logo_up.png" alt="Zexas Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </a>
          </div>

          <div className="nav-right">
            <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={24} color="#fff" />
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={32} color="#fff" />
        </button>
        <div className="mobile-links">
          <a href="#shop" onClick={() => setIsMobileMenuOpen(false)}>SHOP</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          <button className="mobile-cart-btn" onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}>
            CART ({cartItemCount})
          </button>
        </div>
      </div>
    </>
  );
}
