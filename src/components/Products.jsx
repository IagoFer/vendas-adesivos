import React from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';

function Products({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="product-section" id="products">
      <h2 className="product-title">Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">R${product.price.toFixed(2)}</p>
              <button className="product-button" onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
