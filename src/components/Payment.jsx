import React from 'react';
import './Payment.css';
import { useCart } from '../context/CartContext';

function Payment({ onReturnToHome }) {
  const { getTotalPrice, clearCart } = useCart();

  const handlePayment = () => {
    // Simulação de processamento de pagamento
    alert('Pagamento realizado com sucesso!');
    clearCart();
    onReturnToHome(); // Voltar para a página inicial
  };

  return (
    <section className="payment-section">
      <h2 className="payment-title">Pagamento</h2>
      <p className="payment-total">Total a pagar: R${getTotalPrice().toFixed(2)}</p>
      <button className="payment-button" onClick={handlePayment}>
        Pagar Agora
      </button>
      <button className="payment-back-button" onClick={onReturnToHome}>
        Voltar
      </button>
    </section>
  );
}

export default Payment;
