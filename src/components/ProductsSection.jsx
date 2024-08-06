import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductsSection.css";

const ProductsSection = ({ products }) => {
  return (
    <section className="products-section" id="products">
      <div className="products-title-container">
        <h2 className="products-title">Nossos Produtos</h2>
        <p className="products-description">
          Explore nossa gama de produtos de alta qualidade para todos os seus desejos automotivos.
        </p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
