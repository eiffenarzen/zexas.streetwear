import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'NOCTURNAL HOODIE',
    price: 350000,
    image: './product_hoodie.png'
  },
  {
    id: 2,
    name: 'ACID WASH TEE',
    price: 150000,
    image: './contoh.png'
  },
  {
    id: 3,
    name: 'PRESSURE HOODIE',
    price: 350000,
    image: './product_hoodie.png'
  }
];

export default function ProductList({ onAddToCart }) {
  return (
    <section id="shop" className="product-list-section">
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
