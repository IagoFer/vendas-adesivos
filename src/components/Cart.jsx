import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, getTotalPrice, removeFromCart } = useCart();

  return (
    <div className="cart-section" id="cart">
      <h2 className="cart-title">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.name}`}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <span className="cart-item-price">R${item.price.toFixed(2)}</span>
                <span className="cart-item-quantity">Quantidade: {item.quantity}</span>
              </div>
              <button 
                className="remove-item-button" 
                onClick={() => removeFromCart(item.id, item.name)}
              >
                Remover
              </button>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-amount">R${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="cart-buttons">
            <Link to="/payment" className="payment-button-link">
              <button className="payment-button">
                Ir para Pagamento
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
