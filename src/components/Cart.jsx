import React, { useState } from "react";
import "../styles/Cart.css";

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-section" id="cart">
      <h2 className="cart-title">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <span className="cart-item-price">R${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-amount">R${calculateTotal()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
