import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.size === product.size);

      if (existingItemIndex >= 0) {
        // Item exists with same size, increment quantity
        const newItems = [...prev];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        return newItems;
      }

      // New item
      return [...prev, { ...product, quantity: 1 }];
    });

    // Open cart automatically when adding item
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (product, change) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.size === product.size);

      if (existingItemIndex >= 0) {
        const newQuantity = prev[existingItemIndex].quantity + change;

        if (newQuantity <= 0) {
          // Remove if quantity goes to 0
          return prev.filter((_, index) => index !== existingItemIndex);
        }

        const newItems = [...prev];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newQuantity
        };
        return newItems;
      }

      return prev;
    });
  };

  const handleRemoveItem = (product) => {
    setCartItems(prev => prev.filter(item => !(item.id === product.id && item.size === product.size)));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar cartItemCount={totalItems} setIsCartOpen={setIsCartOpen} />

      <main>
        <Hero />
        <ProductList onAddToCart={handleAddToCart} />
        <About />
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <p className="text-muted" style={{ fontFamily: '"Bebas Neue", cursive', fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '1rem' }}>
            zexas._
          </p>
          <a href="https://instagram.com/zexas._" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '1rem', color: '#fff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff3b3b'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
            <Instagram size={24} />
          </a>
          <p className="text-muted" style={{ fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} zexas._ All rights reserved.
          </p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
      />
    </>
  );
}

export default App;
