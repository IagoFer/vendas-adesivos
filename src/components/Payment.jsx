import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import "../styles/Payment.css";

function Payment({ onReturnToHome }) {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Selecione um método de pagamento.');
      return;
    }
    if (!shippingAddress) {
      alert('Digite o endereço de entrega.');
      return;
    }
    alert('Pagamento realizado com sucesso!');
    clearCart();
    onReturnToHome();
  };

  return (
    <section className="payment-section">
      <h2 className="payment-title">Pagamento</h2>
      <div className="payment-summary">
        <h3>Resumo do Pedido</h3>
        <ul className="payment-summary-list">
          {cartItems.map((item) => (
            <li className="payment-summary-item" key={`${item.id}-${item.name}`}>
              <span>{item.name} (x{item.quantity})</span>
              <span>R${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="payment-total">
          <span>Total a pagar:</span>
          <span className="total-amount">R${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
      <div className="payment-methods">
        <h3>Forma de Pagamento</h3>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="creditCard" 
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          Cartão de Crédito
        </label>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="paypal" 
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          PayPal
        </label>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="bankTransfer" 
            checked={paymentMethod === 'bankTransfer'}
            onChange={() => setPaymentMethod('bankTransfer')}
          />
          Transferência Bancária
        </label>
      </div>
      <div className="payment-shipping">
        <h3>Informações de Envio</h3>
        <label>
          Endereço de Entrega:
          <input 
            type="text" 
            name="shippingAddress" 
            placeholder="Digite seu endereço" 
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </label>
      </div>
      <div className="payment-buttons">
        <button className="payment-button" onClick={handlePayment}>
          Pagar Agora
        </button>
        <button className="payment-back-button" onClick={onReturnToHome}>
          Voltar
        </button>
      </div>
    </section>
  );
}

export default Payment;
