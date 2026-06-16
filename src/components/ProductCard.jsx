import React from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = React.useState('L');
  
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <div className="size-selector">
            {['M', 'L', 'XL'].map(size => (
              <button 
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart({ ...product, size: selectedSize })}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
