import React from 'react';
import { X, Plus, Minus, MessageCircle } from 'lucide-react';
import { createWhatsAppCheckoutUrl } from '../utils/whatsapp';
import './CartDrawer.css';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  updateQuantity, 
  removeItem 
}) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    const url = createWhatsAppCheckoutUrl(cartItems, total);
    window.open(url, '_blank');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>YOUR CART</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} color="#fff" />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="btn btn-outline" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="text-muted">Size: {item.size}</p>
                  <p className="cart-item-price">${item.price}</p>
                  
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item, -1)}><Minus size={16} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item, 1)}><Plus size={16} /></button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeItem(item)}>
                  <X size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer glass">
            <div className="cart-total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              <MessageCircle size={20} />
              CHECKOUT VIA WHATSAPP
            </button>
          </div>
        )}
      </div>
    </>
  );
}
