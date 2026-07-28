import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'BLOCK THE CHAIN (mzd)',
    price: 120000,
    image: './produk2.png'
  },
  {
    id: 2,
    name: 'HUE IN LINE',
    price: 120000,
    image: './produk1.png'
  },
  {
    id: 3,
    name: 'PIN ZEX.1',
    price: 5000,
    image: './pin.png'
  }
];

export default function ProductList({ onAddToCart }) {
  return (
    <section id="shop" className="product-list-section" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(./duri.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <h2 className="section-title text-center">LATEST ARRIVALS</h2>
        <div className="product-grid">
          {DUMMY_PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
