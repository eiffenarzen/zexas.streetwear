import React, { useState } from 'react';
import { formatRupiah } from '../utils/whatsapp';
import SizeChartModal from './SizeChartModal';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('L');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  
  return (
    <>
      <div className="product-card">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className={`product-image ${product.isSmall ? 'small-img' : ''}`} />
          <div className="product-overlay">
            <div className="size-selector-header" style={{display: 'flex', justifyContent: 'center', marginBottom: '-5px'}}>
              <button className="size-chart-trigger" style={{color: '#aaa', fontSize: '0.8rem', textDecoration: 'underline'}} onClick={() => setIsSizeChartOpen(true)}>View Size Chart</button>
            </div>
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
          <p className="product-price">{formatRupiah(product.price)}</p>
        </div>
      </div>
      <SizeChartModal isOpen={isSizeChartOpen} onClose={() => setIsSizeChartOpen(false)} />
    </>
  );
}
