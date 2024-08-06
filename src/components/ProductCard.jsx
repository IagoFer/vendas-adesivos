import React from "react";
import { motion } from "framer-motion";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">R${product.price.toFixed(2)}</span>
          <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
